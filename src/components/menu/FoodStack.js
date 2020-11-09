import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from './FoodScreen';
import FoodDetailScreen from '../menuDetail/FoodDetailScreen'
import colors from 'aldini/src/res/colors'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const FoodStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.blackPearl,
                        shadowColor: colors.blackPearl
                    },
                    headerTintColor: colors.white
                }
            }
        >
            <Stack.Screen name="Food" component={FoodScreen} />
            <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
        </Stack.Navigator>
    );
}

export default FoodStack;