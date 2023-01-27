const express = require("express");
const UserModel = require("../models/user.model");

const app = express.Router();

app.post("/register", async (req, res) => {
	let { name, score, difficulty, level } = req.body;
	let newUser = UserModel({ name, score, difficulty, level });
	await newUser.save();
	return res.status(200).send({
		message: "User Created",
		id: newUser.id,
		difficulty: newUser.difficulty,
	});
});

module.exports = app;
