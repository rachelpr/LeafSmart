const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const login = async (req, res) => {
  // destructre email and password
  const { email, password } = req.body;
  // is email or password don't exist send error
  if (!email || !password) {
    return res.status(400).send({ message: "Enter valid email and password" });
  }

  try {
    // check for email in database
    const user = knex
      .select("user_id", "email", "first_name", "last_name", "password")
      .from("users")
      .where({ email: email });
    // // if the user doesn't exist send error
    if (!user) {
      return res.status(400).send({ message: "User does not exist" });
    }

    // Compare database for entered password
    const validPassword = knex
      .select("password")
      .from("users")
      .where({ password: password });
    // // if the password is not in the database return error
    if (!validPassword) {
      return res.status(400).send({ message: "Password is incorrect" });
    }

    // Once the password is validated create an auth token
    const payload = {
      id: user.user_id,
      email: user.email,
    };

    // Generate a token with the payload and the secret
    const token = jwt.sign(payload, SECRET, { expiresIn: "100m" });

    return res.send({ message: "Hey from login!", token });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Login Error!", error: err.message });
  }
};

module.exports = { login };
