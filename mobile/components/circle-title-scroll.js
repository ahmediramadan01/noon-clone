import { View, StyleSheet, Image,Text ,ScrollView} from "react-native";

import { Chip } from "react-native-paper";



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
       <View style={styles.titleContainer}>
                <Chip key={index}
                >
                    {title}
                    <View style={{ marginLeft: 10}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle">
                            <circle cx="12" cy="12" r="10">
                            </circle>
                            <polyline points="8 12 12 16 16 12">
                            </polyline>
                            <line x1="12" y1="8" x2="12" y2="16">
                            </line>
                        </svg>
                    </View>
                </Chip>
        </View>
            ))}
        </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, // Adjust this value for padding between items
        paddingLeft: 5,
        marginBottom:10
      },
    tinyLogo: {
        width: 85,
        height: 65,
        borderRadius: 50, 

    },
});
export default CircleTitlesScroll;