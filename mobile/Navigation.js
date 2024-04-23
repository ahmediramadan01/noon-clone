import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

function TabGroup() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
		</Tab.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<TabGroup></TabGroup>
		</NavigationContainer>
	);
}
