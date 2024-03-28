import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://ahmediramadan01:team5@cluster.g1pbl8a.mongodb.net/");
await client.connect();
const database = client.db("");
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
		return new Response(error, { status: 500 });
	}
}

export async function POST(request) {
	try {
		const contentType = request.headers.get("content-type");

		if (!contentType || !contentType.includes("application/json")) {
			return new Response("Content-Type header must be application/json", { status: 400 });
		}

		const body = await request.json();

		// if (
		// 	!body ||
		// 	!body.title ||
		// 	!body.description ||
		// 	!body.brand ||
		// 	!body.thumbnail ||
		// 	!body.images ||
		// 	!body.category ||
		// 	!body.quantityInStock ||
		// 	!body.price ||
		// 	!body.discountPercentage
		// ) {
		// 	return new Response("Missing fields", { status: 400 });
		// }

		const newProduct = {
			title: body.title,
			description: body.description,
			brand: body.brand,
			thumbnail: body.thumbnail,
			images: body.images,
			category: body.category,
			quantityInStock: body.quantityInStock,
			price: body.price,
			discountPercentage: body.discountPercentage,
			rating: 0,
			ratingQuantity: 0,
			sold: 0,
		};

		const insertResult = await collection.insertOne(newProduct);

		if (!insertResult.insertedId) {
			return new Response("Error inserting product", { status: 500 });
		}

		return new Response(JSON.stringify(newProduct), {
			headers: {
				"Content-Type": "application/json",
			},
			status: 201,
		});
	} catch (error) {
		return new Response(error, { status: 500 });
	}
}
