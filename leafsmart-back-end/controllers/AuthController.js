const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

function emailExists(email) {
  const emailCheck = db.select("email").from("users").where({ email: email });
  if (email === emailCheck) {
    return true;
  } else {
    return false;
  }
}

const register = async (req, res) => {
  console.log("here first!");
  // destructre email and password
  const { email, password, first_name, last_name } = req.body;
  // is email or password don't exist send error
  if (!email || !password) {
    return res.status(400).send({ message: "No email or password" });
  }
  console.log("here second!");
  try {
    if (emailExists(email) === true) {
      return res.status(400).send({ message: "This email exists" });
    }
    console.log("here third!");
    bcrypt.hash(password, saltRounds)
      .then((hash) => {
        db
        .raw(
          `INSERT INTO users (email, first_name, last_name, password) 
        values(?, ?, ?, ?)
        RETURNING users`,
          [`${email}`, `${first_name}`, `${last_name}`, `${hash}`]
        )
        .then((data) => {
          console.log("res: ", data.rows[0])
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Registration Error!", error: err.message });
  }
};

const login = async (req, res) => {
  // destructre email and password
  const { email, password } = req.body;
  // is email or password don't exist send error
  if (!email || !password) {
    return res.status(400).send({ message: "No email and password" });
  }
  try {
    // check for email in database
    db.select("user_id", "email", "first_name", "last_name", "password")
      .from("users")
      .where({ email: email })
      .then((data) => {
        // // if the user doesn't exist send error
        if (data[0].email !== email) {
          return res.status(400).send({ message: "User does not exist" });
        }
        const hash = data[0].password;
        bcrypt.compare(password, hash).then(function (result) {
          if (result !== true) {
            return res.status(400).send({ message: "Password is incorrect" });
          }
          const payload = {
            id: data[0].user_id,
            email: data[0].email,
            first_name: data[0].first_name,
            last_name: data[0].last_name,
          };

          // Generate a token with the payload and the secret
          const token = jwt.sign(payload, SECRET, { expiresIn: "10m" });

          return res.send({ message: "Hey from login!", token });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Login Error!", error: err.message });
  }
};

module.exports = { login, register };
