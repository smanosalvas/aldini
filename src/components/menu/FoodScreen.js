import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, StyleSheet, FlatList } from 'react-native';

import Http from '../../libs/http';

const FoodScreen = ({ navigation }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            const getBlogs = await Http.instance.get();
            console.log("Blogs",getBlogs)
            setBlogs(getBlogs.data);
        }

        getData();
    }, []) 

    const handlePress = () => {
        navigation.navigate('FoodDetail')
    }

    return (
        <View style={styles.container}>
            <Text> Food Screen </Text>
            <FlatList 
                data={blogs}
                keyExtractor={ (item) => item.id}
                renderItem={({ item }) => <Text> { item.name }</Text>}
            />
            <Pressable style={styles.btn} onPress={handlePress} >
                <Text style={styles.btnText}>Ir a detail</Text>
            </Pressable>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    btn: {
        padding: 8,
        backgroundColor: "#000",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff"
    }
})

export default FoodScreen;