const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { user_id } = req.body;
    db.select(
      'geoname_id',
      'display_name',
      'city_name'
    )
    .from("favourites")
    .where({
      user_id: user_id
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