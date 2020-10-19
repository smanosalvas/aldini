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

const App = () => {
  return (
    <>
      <NavigationContainer>
        <FoodStack />
      </NavigationContainer>
    </>
  );
};



export default App;
