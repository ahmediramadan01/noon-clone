import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
	await connect();

	try {
		const userId = params.id;
		const user = await User.findById(userId);

		if (!user) {
			return new NextResponse("User not found", { status: 404 });
		}

		return new NextResponse(JSON.stringify(user), { status: 200 });
	} catch (error) {
		console.error("Error fetching user:", error);
		return new NextResponse(
			{ message: "An error occurred while fetching the user. Please try again later." },
			{ status: 500 }
		);
	}
}

export async function PATCH(request, { params }) {
	await connect();

	try {
		const userId = params.id;
		const userData = await request.json();

		if (userData.password) {
			userData.password = await bcrypt.hash(userData.password, 10);
		}

		const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

		if (!updatedUser) {
			return new NextResponse("User not found", { status: 404 });
		}

		return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
	} catch (error) {
		console.error("Error updating user:", error);
		return new NextResponse(
			{ message: "An error occurred while updating the user. Please try again later." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	await connect();

	try {
		const userId = params.id;
		const deletedUser = await User.findByIdAndDelete(userId);

		if (!deletedUser) {
			return new NextResponse("User not found", { status: 404 });
		}

		return new NextResponse("User deleted successfully", { status: 200 });
	} catch (error) {
		console.error("Error deleting user:", error);
		return new NextResponse(
			{ message: "An error occurred while deleting the user. Please try again later." },
			{ status: 500 }
		);
	}
}
