import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

import Http from '../../libs/http';
import FoodMenuItem from './FoodMenuItem';
import colors from 'aldini/src/res/colors';
import FoodPromos from '../promos/FoodPromos';
import FoodSearch from './FoodSearch';

const FoodScreen = ({ navigation }) => {
    const [foodMenu, setFoodMenu] = useState([]);
    const [allFoodMenu, setAllFoodMenu] = useState([]);
    const [promosMenu, setPromosMenu] = useState([]);
    const [loading, setLoading] = useState(false)
    const [loadingPromos, setLoadingPromos] = useState(false)

    useEffect(()=> {
        const getData = async () => {
            setLoading(true);
            const getFoodMenu = await Http.instance.get('food');
            setFoodMenu(getFoodMenu.data);
            setAllFoodMenu(getFoodMenu.data)
            setLoading(false);
        }

        getData();

        const getPromos = async () => {
            setLoadingPromos(true);
            const getPromosMemu = await Http.instance.get('promos');
            setPromosMenu(getPromosMemu.data);
            setLoadingPromos(false);
        }

        getPromos();
    }, []) 

    const handlePress = (menuItem) => {
        console.log("detail food menu" , menuItem);
        const scoreDetail= Array(5).fill(false);
        for (let index = 0; index < menuItem.score; index++) {
            scoreDetail[index] = true;
        }

        navigation.navigate('FoodDetail', { menuItem , scoreDetail});
    }

    const handleSearch = (query)=> {
        if(query === ""){
            setFoodMenu(allFoodMenu);
        } else {
            const foodFiltered = allFoodMenu.filter((foodItem)=>{
                return foodItem.name.toLowerCase().includes(query.toLowerCase()) || 
                foodItem.description.toLowerCase().includes(query.toLowerCase());
            });
            setFoodMenu(foodFiltered);
        }
    }

    return (
        <View style={styles.container}>
            <FoodSearch onChange={handleSearch} /> 

            {
                loadingPromos ?
                    <ActivityIndicator color="#000" size="large" style={styles.loader} />
                : null
            }
            <FlatList 
                data={promosMenu}
                horizontal={true}
                keyExtractor={ (item) => item.id}
                renderItem={({ item }) => 
                    <FoodPromos item={item} />
                }
                style={styles.promosContainer}
            />

            {
                loading ?
                    <ActivityIndicator color="#000" size="large" style={styles.loader} />
                : null
            }
            <FlatList 
                data={foodMenu}
                keyExtractor={ (item) => item.id}
                renderItem={({ item }) => 
                <FoodMenuItem item={item} onPress={() => handlePress(item)}
             />
            }
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
    },
    btn: {
        padding: 8,
        backgroundColor: "#000",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff"
    },
    loader: {
        marginTop: 60
    },
    promosContainer: {
        height: 200
    }
})

export default FoodScreen;