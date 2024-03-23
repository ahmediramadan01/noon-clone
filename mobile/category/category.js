import { View } from "react-native";
import { Text } from "react-native-paper";
import CircleCardItem from "../components/circleCardItem";
const Category=()=>{
    const circleImg=[
    "../assets/aimagePrice_1.avif",
    "../assets/aimagePrice_2.avif",
    "../assets/aimagePrice_3.avif",
    "../assets/aimagePrice_4.avif",
    "../assets/aimagePrice_5.avif",
    "../assets/aimagePrice_6.avif"

]
    return(
        <>
        <View>
         <CircleCardItem items={circleImg} />
        </View>
        </>
    )
}
export default Category;