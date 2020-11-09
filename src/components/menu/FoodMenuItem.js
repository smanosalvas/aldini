import React from 'react';
import { Image, StyleSheet, Text, View,  Pressable } from 'react-native';
import colors from 'aldini/src/res/colors';

const FoodMenuItem = ({item, onPress}) => {
    return(
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={{
                uri: item.image
            }} />
            <Pressable onPress={onPress} style={styles.subcontainer}>
                <Text style={styles.title}>{ item.name }</Text>
                <Text style={styles.description}>{ item.description } </Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{`$${item.price}`}</Text>
                    {
                        item.available ?
                        <Text style={styles.isAvailable}>Disponible</Text>
                        :
                        <Text style={styles.isNotAvailable}>Agotado</Text>

                    }
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row"

    },
    subcontainer:{
        paddingLeft:10,
        paddingRight: 10,
        width: 300,
        backgroundColor: colors.blackPearl,
        borderRadius: 5
    },
    image: {
        width: 80,
        height: 80,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5
    },
    title: {
        color: colors.zircon,
        fontWeight: "bold",
        fontSize: 18,
        marginBottom:5
    },
    description: {
        color: colors.zircon,
        marginBottom: 5,
        textAlign: "justify",
        fontSize: 12
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        color: colors.zircon,
        fontSize: 14,
        fontWeight: "bold"
    },
    isAvailable:{
        color: "green"
    },
    isNotAvailable:{
        color: "red"
    }
})
export default FoodMenuItem;