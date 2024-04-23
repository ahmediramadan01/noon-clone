import * as React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Divider, Appbar, Button } from "react-native-paper";

const AccountScreen = () => {
	return (
		<>
			<ScrollView>
				<View style={styles.main}>
					<View style={styles.container}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11.6667H5" stroke="#404553" stroke-width="2" stroke-linecap="round" />
							<path
								d="M9.66667 16.3333L5 11.6667L9.66667 7"
								stroke="#404553"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
						<Text style={styles.text}>Profile</Text>
					</View>
					<View style={styles.container1}>
						<View style={styles.container2}>
							<Text>Email</Text>
							<Text style={styles.text2}>mennaismail70@gmail.com</Text>
						</View>
						<View style={styles.line} />
						<View style={styles.container2}>
							<Text>First Name</Text>
							<View style={styles.container3}>
								<Text style={styles.text2}>Menna</Text>
								<Appbar.Action icon="pencil-outline" onPress={{}} />
							</View>
						</View>
						<View style={styles.line} />
						<View style={styles.container2}>
							<Text>Last Name</Text>
							<View style={styles.container3}>
								<Text style={styles.text2}>Ismail</Text>
								<Appbar.Action icon="pencil-outline" onPress={{}} />
							</View>
						</View>
						<View style={styles.line} />
						<View style={styles.container2}>
							<Text>Phone number</Text>
							<View style={styles.container3}>
								<Text style={styles.text2}>+20-12-87543131</Text>

								<Appbar.Action icon="pencil-outline" onPress={{}} />
							</View>
							<Text style={styles.tRights}>This can be used to login to all noon apps</Text>
						</View>
						<View style={styles.line} />
						<View style={styles.container2}>
							<Text>Birthday</Text>
							<View style={styles.container3}>
								<Text style={styles.text2}>02-08-2001</Text>

								<Appbar.Action icon="pencil-outline" onPress={{}} />
							</View>
							<Text style={styles.tRights}>Cannot be changed</Text>
						</View>

						<View style={styles.line} />
						<View style={styles.container3}>
							<View>
								<Text style={styles.text3}>Gender</Text>
							</View>
							<View style={styles.container5}>
								<Button style={styles.btn2}>
									<Appbar.Action icon="human-male-boy" onPress={{}} />
									<Text>Mail</Text>
								</Button>
								<Button style={styles.btn3}>
									<Appbar.Action icon="human-female-girl" onPress={{}} />
									<Text>Femail</Text>
								</Button>
							</View>
						</View>
						<View style={styles.line} />
						<View style={styles.container2}>
							<Text>Nationality</Text>
							<View style={styles.container3}>
								<Text style={styles.text2}>Egypt</Text>
								<Appbar.Action icon="pencil-outline" onPress={{}} />
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.container1}>
				<Text style={styles.btntext}>SANE</Text>
				<Button style={styles.btn4} disabled>
					<Text style={styles.btntext}>SAVE</Text>
				</Button>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	main: {
		backgroundColor: "whitesmoke",
	},
	container: {
		flexDirection: "row",
		margin: 10,
	},
	text: {
		marginLeft: 20,
		fontSize: 20,
	},
	text2: {
		fontSize: 16,
		fontWeight: "500",
		marginTop: 16,
	},
	text3: {
		marginLeft: 16,
		marginTop: 16,
	},
	container1: {
		backgroundColor: "white",
		margin: 10,
		borderRadius: 5,
	},
	container2: {
		flexDirection: "column",
		margin: 10,
		justifyContent: "center",
	},
	container3: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	line: {
		width: "97%",
		height: 1,
		backgroundColor: "#d3d3d3",
		marginLeft: "1%",

		marginTop: 5,
	},
	tRights: {
		color: "#696969",
		fontSize: 12,
	},
	btn2: {
		width: 130,
		backgroundColor: "#dcdcdc",
		height: 35,
		justifyContent: "center",
	},
	btn3: {
		width: 130,
		backgroundColor: "#ffb6c1",
		height: 35,
		justifyContent: "center",
		borderColor: "red",

		marginLeft: 5,
	},
	container5: {
		flexDirection: "row",
		margin: 20,
	},
	btn4: {
		backgroundColor: "#d3d3d3",
		justifyContent: "center",
		borderRadius: 5,
	},
	btntext: {
		color: "white",
		fontWeight: "bold",
	},
});
export default AccountScreen;
