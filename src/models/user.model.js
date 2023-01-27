const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		score: { type: Number, required: true, default: 0 },
		difficulty: {
			type: String,
			enum: ["Easy", "Medium", "Hard"],
			default: "Easy",
		},
		level: { type: Number, required: true, default: 0 },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
