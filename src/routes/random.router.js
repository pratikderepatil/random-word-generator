const express = require("express");

const words = require("../data/words.json");
const app = express.Router();

function between(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get("/", (req, res) => {
	let random = between(1, 98);
	let randomword = words.find((x) => x.id === random).word.toLowerCase();
	res.send({ word: randomword });
});

module.exports = app;
