const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.post("/", (req, res) => {
    const { user_id, geoname_id, display_name, city_name } = req.body;
    db.raw(
      `INSERT INTO favourites (user_id, geoname_id, display_name, city_name) 
      values(?, ?, ?, ?)`,
      [`${user_id}`, `${geoname_id}`, `${display_name}`, `${city_name}`]
    )
    .then((res) => {
      console.log("Favourites Submitted!");
    })
    .catch((err) => {
      console.log(err);
    });

  });
  return router;
}