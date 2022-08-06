const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
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
        if (!data[0].user_id) {
          return res.status(400).send({ message: "User does not exist" });
        }
        // Compare database for entered password
        if (password !== data[0].password) {
          console.log("I'm Here now!");
          return res.status(400).send({ message: "Password is incorrect" });
        }
        // // if the password is not in the database return error
        const payload = {
          id: data[0].user_id,
          email: data[0].email,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
        };

        // Generate a token with the payload and the secret
        const token = jwt.sign(payload, SECRET, { expiresIn: "100m" });

        return res.send({ message: "Hey from login!", token });
      });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Login Error!", error: err.message });
  }
};

module.exports = { login };
