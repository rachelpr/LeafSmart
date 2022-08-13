const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/', (req, res) => {
    const { user_id, city_name } = req.body;
    const city = city_name.toLowerCase();
    db.raw(
      `DELETE FROM favourites 
      WHERE user_id=${user_id} AND display_name LIKE '${city}' AND city_name LIKE '${city}'
      RETURNING *`,
    )
    .then((result) => {
    console.log("Result: ", result);
     return res.json(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });

  });
  return router;
}