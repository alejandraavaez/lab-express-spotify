require('dotenv').config();
const bodyParser = require("body-parser");
const express = require('express');
const hbs = require('hbs');

// require spotify-web-api-node package here:

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// setting the spotify-api goes here:ç

app.use(bodyParser.urlencoded({ extended: true }));

// Our routes go here:
let index = require("./routes/")
app.use("/", index)


app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
