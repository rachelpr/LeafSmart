const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    db.select(
      'user_id',
      'email',
      'first_name', 
      'last_name',
      'password'
    )
    .from("users")
    .where({
      email: email,
      password: password 
    })
    .then((result) => {
      console.log("Res: ",result);
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });

  });
  return router;
}
