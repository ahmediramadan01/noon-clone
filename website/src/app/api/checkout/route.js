import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async function () {
	const checkProducts = await stripe.products.list();
	const availableProducts = checkProducts.data.filter((product) => (product.active = true));

	return availableProducts;
};

export const POST = async function (request) {
	const { products } = await request.json();
	const data = products;

	// const prods = await stripe.products.list();
	// console.log(prods);

	let activeProducts = await getActiveProducts();

	try {
		for (const product of data) {
			const stripeProduct = activeProducts?.find(
				(stripeProduct) => stripeProduct?.name?.toLowerCase() == product.title.toLowerCase()
			);

			if (!stripeProduct) {
				const prod = await stripe.products.create({
					name: product.title,
					default_price_data: { unit_amount: product.price * 100, currency: "usd" },
				});
			}
		}
	} catch (error) {
		console.error("Error creating a new product", error);
	}

	activeProducts = await getActiveProducts();
	let stripeItems = [];
	for (const product of data) {
		const stripeProduct = activeProducts?.find(
			(stripeProduct) => stripeProduct?.name?.toLowerCase() == product.title.toLowerCase()
		);

		if (stripeProduct) {
			stripeItems.push({
				price: stripeProduct?.default_price,
				quantity: product?.quantity,
			});
		}
	}

	const stripeSession = await stripe.checkout.sessions.create({
		line_items: stripeItems,
		mode: "payment",
		success_url: "http://localhost:3000/success",
		cancel_url: "http://localhost:3000/cancel",
	});

	return NextResponse.json({ url: stripeSession.url });
};
