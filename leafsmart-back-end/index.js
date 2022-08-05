const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});
const loginRoute = require("./routes/login_route");
const favouriteRoute = require("./routes/favourite_route");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", loginRoute(db));
app.use("/favourites", favouriteRoute(db));

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all users from the database
app.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: Fetch user by userId from the database
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  db.select("*")
    .from("users")
    .where("user_id", "=", userId)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: Fetch all users from the database
app.get("/favourites", (req, res) => {
  db.select("*")
    .from("favourites")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET: Fetch user by userId from the database
// app.get("/favourites/:favouriteId", (req, res) => {
//   const favouriteId = req.params.userId;
//   db.select("*")
//     .from("favourites")
//     .where("favourite_id", "=", favouriteId)
//     .then((data) => {
//       console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// POST: Create users and add them to the database
app.post("/favourites/new", (req, res) => {
  const { favourite_id, user_id, geoname_id, display_name, city_name } = req.body;
  db("favourites")
    .insert({
      favourite_id: favourite_id,
      user_id: user_id,
      geoname_id: geoname_id,
      display_name: display_name,
      city_name: city_name
    })
    .then(() => {
      console.log("Favourite Added");
      return res.json({ msg: "Favourite Added" });
    })
    .catch((err) => {
      console.log(err);
    });

});

// DELETE: Delete user by userId from the database
app.delete("/delete-user", (req, res) => {
  const userId = req.body;
  const userIdToDelete = Number(userId.userId);
  console.log(userIdToDelete);
  db("users")
    .where("user_id", "=", userIdToDelete)
    .del()
    .then(() => {
      console.log("User Deleted");
      return res.json({ msg: "User Deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.WEB_PORT || 3001;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
