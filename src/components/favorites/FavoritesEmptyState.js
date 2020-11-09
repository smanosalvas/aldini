import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../res/colors';

const FavoritesEmptyState = () => {
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>Sin Favoritos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    }
});

export default FavoritesEmptyState;