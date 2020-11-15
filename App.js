/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import FoodStack from 'aldini/src/components/menu/FoodStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import colors from 'aldini/src/res/colors';
import FavoritesStack from 'aldini/src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            tintColor: "#fefefe",
            style: {
              backgroundColor: colors.blackPearl
            }
          }}
        >
          <Tabs.Screen 
            name="Menu" 
            component={FoodStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image 
                  style={{width: size, height: size}}
                  source={require('aldini/src/assets/score.png')} /> 
              )
            }}
            />

          <Tabs.Screen 
            name="Favoritos" 
            component={FavoritesStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image 
                  style={{width: size, height: size}}
                  source={require('aldini/src/assets/score.png')} /> 
              )
            }}
            />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
