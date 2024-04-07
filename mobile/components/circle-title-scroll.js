import { View, StyleSheet, Image,Text ,ScrollView} from "react-native";

import { Chip, IconButton } from "react-native-paper";



const CircleTitlesScroll=({titles})=>{
    return(
        <>
         <ScrollView
             horizontal
             pagingEnabled
             showsHorizontalScrollIndicator={true}
             contentContainerStyle={styles.cardsContainer}
        >
            {titles.map((title, index) => (
        <View style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-around',alignItems:'center',marginLeft:4,marginRight:1}}>
                <Chip key={index} 
                >
                    {title}
                     <IconButton icon="chevron-down"  style={styles.iconStyle} />
                    
                </Chip>
        </View>
        // </View>
            ))}
        </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    cardsContainer: {
        display: "flex",
        paddingHorizontal: 5,
        alignContent:'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:9,
        marginLeft:10
      },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        marginHorizontal: 5, // Adjust this value for padding between items
        paddingLeft: 5,
        marginBottom:10
      },
    iconStyle:{
        paddingLeft:0,
        marginLeft:7,
        paddingTop:0,
        width:25,
        height:25
        
      }
});
export default CircleTitlesScroll;