import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../res/colors';

const FoodDetailScreen = ({ route }) => {
    const { image, name, description } = route.params.menuItem;
    const { scoreDetail } = route.params;

    return (
        <View style={styles.container}>
            <Image 
            style={styles.hero}
            source={{
                uri: image
            }}/>
            <View style={styles.detail} >
                <Text style={styles.title}>{name}</Text>
                <View style={styles.scoreContainer}>
                    {
                        scoreDetail.map((scoreValue) => {
                            return(
                                scoreValue ? 
                                <Image
                                    style={styles.iconScore}
                                    source={require('aldini/src/assets/score.png')} />
                                    :
                                <Image
                                    style={styles.iconScoreDisable}
                                    source={require('aldini/src/assets/score.png')} />
                            )
                        })
                    }
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.charade
    },
    detail:{
        padding: 10
    },
    hero: {
        height: 300
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: colors.zircon,
        textAlign: "center",
        height: 40
    },
    description: {
        color: colors.zircon,
        fontSize: 14
    },
    scoreContainer: {
        flexDirection: "row",
        marginBottom: 10
    },
    iconScore: {
        width: 22,
        height: 22,
        marginRight: 5
    },
    iconScoreDisable: {
        width: 22,
        height: 22,
        tintColor: "gray",
        marginRight: 5
    }
});

export default FoodDetailScreen;