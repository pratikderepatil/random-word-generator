require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 8080;
const connect = require("./config/db");
const userRouter = require("./routes/user.router");
const randomRouter = require("./routes/random.router");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.set("strictQuery", false);

app.use("/user", userRouter);
app.use("/randomword", randomRouter);

app.get("/", (req, res) => {
	res.send("Random Word Generator");
});

app.listen(PORT, async () => {
	connect();
	console.log(`Listening at http://localhost:${PORT}`);
});
