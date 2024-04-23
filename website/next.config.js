module.exports = {
	env: {
		mongodb_username: "ahmediramadan01",
		mongodb_password: "team5",
		mongodb_clustername: "cluster",
		mondodb_database: "",
	},
	images: {
		domains: ["m.media-amazon.com", "images.unsplash.com"],
	},
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
					{
						key: "Access-Control-Allow-Headers",
						value:
							"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};
