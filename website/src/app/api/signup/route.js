import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { firstName, email, password, lastName, phoneNumber, birthday, gender, nationality, wishlist, cart, ratings } =
		await request.json();

	await connect();

	try {
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return new NextResponse("Email is already registered", { status: 400 });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			firstName,
			email,
			password: hashedPassword,
			lastName,
			phoneNumber,
			birthday,
			gender,
			nationality,
			wishlist,
			cart,
			ratings,
		});

		await newUser.save();

		return new NextResponse("User registered successfully", { status: 200 });
	} catch (error) {
		console.error("Error creating user:", error);
		return new NextResponse(
			{ message: "An error occurred while creating the account. Please try again later." },
			{ status: 500 }
		);
	}
}
