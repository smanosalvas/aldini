import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from './FoodScreen';
import FoodDetailScreen from './FoodDetailScreen'

const Stack = createStackNavigator();

const FoodStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Food" component={FoodScreen} />
            <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
        </Stack.Navigator>
    );
}

export default FoodStack;