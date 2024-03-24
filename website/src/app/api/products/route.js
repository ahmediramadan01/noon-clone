import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://ahmediramadan01:team5@cluster.g1pbl8a.mongodb.net/");

await client.connect();
const database = client.db("noon-clone");
const collection = database.collection("products");

export async function GET(request) {
	try {
		const searchParams = new URL(request.url).searchParams;
		const query = searchParams.get("query");

		const filteredProducts = query
			? await collection.find({ title: { $regex: query, $options: "i" } }).toArray()
			: await collection.find({}).toArray();

		return new Response(JSON.stringify(filteredProducts), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		console.error("Error fetching products:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}

export async function POST(request) {
	try {
		const contentType = request.headers.get("content-type");

		if (!contentType || !contentType.includes("application/json")) {
			return new Response("Content-Type header must be application/json", { status: 400 });
		}

		const body = await request.json();

		if (!body || !body.title) {
			return new Response("Title is required", { status: 400 });
		}

		const newProduct = {
			title: body.title,
		};

		const insertResult = await collection.insertOne(newProduct);

		if (!insertResult.insertedId) {
			return new Response("Failed to insert product", { status: 500 });
		}

		return new Response(JSON.stringify(newProduct), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 201,
		});
	} catch (error) {
		console.error("Error creating product:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}
