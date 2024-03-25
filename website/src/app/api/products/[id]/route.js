import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://ahmediramadan01:team5@cluster.g1pbl8a.mongodb.net/");
await client.connect();

const database = client.db("noon-clone");
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
		return new Response("Internal Server Error", { status: 500 });
	}
}

export async function PATCH(request, { params }) {
	try {
		const body = await request.json();
		const { title } = body;

		if (!title) {
			return new Response("Title is required", { status: 400 });
		}

		const updatedProduct = await collection.findOneAndUpdate(
			{ _id: new ObjectId(params.id) },
			{ $set: { title: title } },
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
		return new Response("Internal Server Error", { status: 500 });
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
		return new Response("Internal Server Error", { status: 500 });
	}
}
