import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions = {
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "text" },
			},
			async authorize(credentials) {
				await connect();
				try {
					const user = await User.findOne({ email: credentials.email });
					if (user) {
						const correctPassword = await bcrypt.compare(credentials.password, user.password);
						if (correctPassword) {
							return user;
						}
					}
				} catch (error) {
					throw new Error(error);
				}

				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session, trigger }) {
			if (trigger === "update" && session) {
				token = { ...session };
			}

			if (user) {
				return {
					...token,
					id: user._id,
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName,
					phoneNumber: user.phoneNumber,
					birthday: user.birthday,
					gender: user.gender,
					nationality: user.nationality,
					wishlist: user.wishlist,
					cart: user.cart,
					ratings: user.ratings,
					orders: user.orders,
				};
			}

			if (token && token.email) {
				try {
					const updatedUser = await User.findOneAndUpdate(
						{ email: token.email },
						{
							email: token.email,
							firstName: token.firstName,
							lastName: token.lastName,
							phoneNumber: token.phoneNumber,
							birthday: token.birthday,
							gender: token.gender,
							nationality: token.nationality,
							wishlist: token.wishlist,
							cart: token.cart,
							ratings: token.ratings,
							orders: token.orders,
						},
						{ new: true }
					);

					if (updatedUser) {
						return {
							...token,
							id: updatedUser._id,
							email: updatedUser.email,
							firstName: updatedUser.firstName,
							lastName: updatedUser.lastName,
							phoneNumber: updatedUser.phoneNumber,
							birthday: updatedUser.birthday,
							gender: updatedUser.gender,
							nationality: updatedUser.nationality,
							wishlist: updatedUser.wishlist,
							cart: updatedUser.cart,
							ratings: updatedUser.ratings,
							orders: updatedUser.orders,
						};
					}
				} catch (error) {
					console.error(error);
				}
			}

			return token;
		},
		async session({ session, token, user }) {
			return {
				...session,
				user: {
					...session.user,
					id: token._id,
					email: token.email,
					firstName: token.firstName,
					lastName: token.lastName,
					phoneNumber: token.phoneNumber,
					birthday: token.birthday,
					gender: token.gender,
					nationality: token.nationality,
					wishlist: token.wishlist,
					cart: token.cart,
					ratings: token.ratings,
					orders: token.orders,
				},
			};
			return session;
		},
	},
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
