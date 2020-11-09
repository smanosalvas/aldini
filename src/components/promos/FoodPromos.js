import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ceil } from 'react-native-reanimated';
import colors from '../../res/colors';

const FoodPromos = ({ item })=> {
    return(
        <View style={styles.container}>
            <ImageBackground
            borderRadius={5}
            style={styles.hero}
            source={{
                uri: item.image
            }}/> 
            <View style={styles.promoDetail}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 120,
        padding: 10
    },
    hero:{
        width:100,
        height: 150,
        marginRight: 10,
        position: "relative"
    },
    promoDetail:{
        width: 100,
        height: 65,
        padding: 10,
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        borderBottomLeftRadius:5,
        borderBottomRightRadius: 5
    },
    title:{
        fontWeight: "bold",
        fontSize: 12,
        color: colors.zircon,
        textAlign: "center"
    }

})

export default FoodPromos;