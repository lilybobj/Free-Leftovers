// LilyApp.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ClaimedItemsScreen from './ClaimedItemsScreen';
import NewFoodItemScreen from './NewFoodItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main' }} />
        <Stack.Screen name="ClaimedItems" component={ClaimedItemsScreen} options={{ title: 'My Claims' }} />
        <Stack.Screen name="NewFoodItem" component={NewFoodItemScreen} options={{ title: 'Add Food Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
