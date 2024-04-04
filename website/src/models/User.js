import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			default: "",
		},
		phoneNumber: {
			type: String,
			default: "",
		},
		birthday: {
			type: String,
			default: "",
		},
		gender: {
			type: String,
			default: "",
		},
		nationality: {
			type: String,
			default: "",
		},
		wishlist: {
			type: Array,
			default: [],
		},
		cart: {
			type: Array,
			default: [],
		},
		ratings: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
