import mongoose from "mongoose";

const connect = async () => {
	if (mongoose.connections[0].readyState === 1) return;

	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to database successfully");
	} catch (error) {
		console.error("Error connecting to database:", error);
		throw new Error("Error connecting to database");
	}
};

export default connect;
