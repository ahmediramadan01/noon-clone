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
		const { title, description, brand, thumbnail, images, category, quantityInStock, price, discountPercentage } = body;

		if (
			!title ||
			!description ||
			!brand ||
			!thumbnail ||
			!images ||
			!category ||
			!quantityInStock ||
			!price ||
			!discountPercentage
		) {
			return new Response("Missing required fields", { status: 400 });
		}

		const updatedProduct = await collection.findOneAndUpdate(
			{ _id: new ObjectId(params.id) },
			{
				$set: {
					title,
					description,
					brand,
					thumbnail,
					images,
					category,
					quantityInStock,
					price,
					discountPercentage,
				},
			},
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
