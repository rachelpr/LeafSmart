const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();
const index = require("./routes/index");

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

const favRoute = require("./routes/favouriteRouter");
const savFavRoute = require('./routes/saveFavouritesRouter')
const deleteFavourite = require('./routes/deleteFavouriteRouter')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

app.use("/login", index);
app.use("/favourites", favRoute(db));
app.use("/save", savFavRoute(db));
app.use("/delete", deleteFavourite(db));

const port = process.env.WEB_PORT || 3001;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

module.exports = db;
