import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import Storage from '../../libs/storeage';
import colors from '../../res/colors';

const FoodDetailScreen = ({ route }) => {
    const { image, name, description, id } = route.params.menuItem;
    const { scoreDetail } = route.params;
    const [ isFavorite, setIsFavorite] = useState(false);
    const storage = Storage.instance;

    useEffect(()=> {
        getFavorite();
    });

    const toggleFavorite = () => {
        if(isFavorite){
            removeFavorite();
        } else {
            addFavorite();
        }
    }

    const addFavorite = async () => {
        const menuFoodItem = JSON.stringify(route.params.menuItem);
        const key = `favorite-${id}`

        const stored = await storage.store(key, menuFoodItem);
        setIsFavorite(stored);
    }
    const removeFavorite = async () => {
        Alert.alert("Eliminar Favorito" , "¿Està seguro de eliminar favorito?", 
        [
            {
                text: "cancel",
                onPress: ()=>{},
                style: "cancel"
            },
            {
                text: "Eliminar",
                onPress: async ()=>{
                    const key = `favorite-${id}`
                    const stored =  await storage.remove(key);
                    setIsFavorite(!stored);
                },
                style: "destructive"
            }
        ])
        
    }

    const getFavorite = async ()=> {
        try {
            const key = `favorite-${id}`;
            const favorite = await storage.get(key);
            console.log("Detalle : ", favorite);
            if(favorite){
                const jsonFavorite = JSON.parse(favorite);
                setIsFavorite(jsonFavorite.id === id)
            } else {
                setIsFavorite(false);
            }
        } catch (error) {
            console.error(error)
            setIsFavorite(false);
        }
    }

    return (
        <View style={styles.container}>
            <Image 
            style={styles.hero}
            source={{
                uri: image
            }}/>
            <View style={styles.detail} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Pressable 
                        onPress={toggleFavorite}
                        style={[
                            styles.btnFavorite,
                            isFavorite ? 
                            styles.btnFavoriteRemove : 
                            styles.btnFavoriteAdd
                        ]}>
                        <Text style={styles.btnFavoriteText}>{isFavorite ? "Quitar favorito" :  "Agregar a favoritos"}</Text>
                    </Pressable>
                </View>
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
    titleContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
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
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8
    },
    btnFavoriteAdd: {
        backgroundColor: colors.picton
    },
    btnFavoriteRemove: {
        backgroundColor: colors.carmine
    },
    btnFavoriteText: {
        color: colors.white
    },
    
});

export default FoodDetailScreen;