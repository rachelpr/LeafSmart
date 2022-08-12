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

  // destructre email and password
  const { email, password, first_name, last_name } = req.body;
  // is email or password don't exist send error
  if (!email || !password) {
    return res.status(400).send({ message: "No email or password" });
  }
  try {
    if (emailExists(email) === true) {
      return res.status(400).send({ message: "This email exists" });
    }
    const hashed = bcrypt.hashSync(password, saltRounds);
      const newUser = db
        .raw(
          `INSERT INTO users (email, first_name, last_name, password) 
        values(?, ?, ?, ?)
        RETURNING *`,
          [`${email}`, `${first_name}`, `${last_name}`, `${hashed}`]
        )
        .then(() => {
          return res
            .status(201)
            .send({ message: "User Creared!", user: newUser });
        })
        .catch((err) => {
          console.log(err);
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
  console.log("I tried to get here first!")
  try {
    // check for email in database
    db.select("user_id", "email", "first_name", "last_name", "password")
      .from("users")
      .where({ email: email })
      .then((data) => {
        const user = data;
        console.log("Then I went here!", user)
        // // if the user doesn't exist send error
      /*   if (!result[0].user_id) {
          return res.status(400).send({ message: "User does not exist" });
        } */

        bcrypt.compare(password, hash).then(function (result) {
          console.log("I have nodemade it here!");
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
          console.log("Now I am here!", payload);
          return res.send({ message: "Hey from login!", token });
        });
      });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Login Error!", error: err.message });
  }
};

module.exports = { login, register };
