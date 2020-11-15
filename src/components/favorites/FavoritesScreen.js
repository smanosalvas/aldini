import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Storage from '../../libs/storeage'
import colors from '../../res/colors'
import FoodMenuItem from '../menu/FoodMenuItem'
import FavoritesEmptyState from './FavoritesEmptyState'

const FavoritesScreen = ({navigation})=> {
    const [favorites, setFavorites] = useState([]);
    const storage = Storage.instance;
    
    useEffect(() => {
        getFavorites();
    });

    const handlePress = (menuItem) => {
        console.log("detail food menu" , menuItem);
        const scoreDetail= Array(5).fill(false);
        for (let index = 0; index < menuItem.score; index++) {
            scoreDetail[index] = true;
        }

        navigation.navigate('FoodDetail', { menuItem , scoreDetail});
    }

    const getFavorites = async () => {
        try {
            const allKeys = await storage.getAllKeys();
            const keys = allKeys.filter((key) => key.includes("favorite-"))
            const favs = await storage.multiGet(keys);
            const favorites = favs.map((fav) => JSON.parse(fav[1]));
            setFavorites(favorites);
        } catch (error) {
            console.error("Error al obtener favoritos de storage", error)
            setFavorites([])
        }
    }

    return(
        <View style={styles.container}>
            {
                favorites.length === 0 ? 
                    <FavoritesEmptyState />
                    :
                    <FlatList 
                    data={favorites}
                    renderItem={({item}) => 
                        <FoodMenuItem item={item} onPress={() => handlePress(item)} />
                    }
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.charade
    } 

})

export default FavoritesScreen