import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://ahmediramadan01:team5@cluster.g1pbl8a.mongodb.net/");
await client.connect();

const database = client.db("");
const collection = database.collection("products");

export async function GET(_request, { params }) {
	try {
		const product = await collection.findOne({ _id: new ObjectId(params.id) });

		if (!product) {
			return new Response("Product not found", { status: 404 });
		}

		return new Response(JSON.stringify(product), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		return new Response(error, { status: 500 });
	}
}

export async function PATCH(request, { params }) {
	try {
		const body = await request.json();
		const updatedFields = {};

		const {
			title,
			description,
			brand,
			thumbnail,
			images,
			category,
			quantityInStock,
			price,
			discountPercentage,
			rating,
			ratingQuantity,
			sold,
		} = body;

		if (title) updatedFields.title = title;
		if (description) updatedFields.description = description;
		if (brand) updatedFields.brand = brand;
		if (thumbnail) updatedFields.thumbnail = thumbnail;
		if (images) updatedFields.images = images;
		if (category) updatedFields.category = category;
		if (quantityInStock) updatedFields.quantityInStock = quantityInStock;
		if (price) updatedFields.price = price;
		if (discountPercentage) updatedFields.discountPercentage = discountPercentage;
		if (rating) updatedFields.rating = rating;
		if (ratingQuantity) updatedFields.ratingQuantity = ratingQuantity;
		if (sold) updatedFields.sold = sold;

		if (Object.keys(updatedFields).length === 0) {
			return new Response("No fields to update", { status: 400 });
		}

		const updatedProduct = await collection.findOneAndUpdate(
			{ _id: new ObjectId(params.id) },
			{ $set: updatedFields },
			{ returnDocument: "after" }
		);

		if (!updatedProduct) {
			return new Response("Product not found", { status: 404 });
		}

		return new Response(JSON.stringify(updatedProduct), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		return new Response(error, { status: 500 });
	}
}

export async function DELETE(_request, { params }) {
	try {
		const deletedProduct = await collection.findOneAndDelete({ _id: new ObjectId(params.id) });

		if (!deletedProduct) {
			return new Response("Product not found", { status: 404 });
		}

		return new Response(JSON.stringify(deletedProduct), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		return new Response(error, { status: 500 });
	}
}
