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

app.patch("/:id", async (req, res) => {
	let { score, level } = req.body;
	let id = req.params;
	try {
		const afterUpdate = await UserModel.findByIdAndUpdate(
			id,
			{ $set: { score: score, level: level } },
			{ new: true }
		);
		return res.status(200).send(afterUpdate);
	} catch (e) {
		return res.status(401).send(e);
	}
});

module.exports = app;
