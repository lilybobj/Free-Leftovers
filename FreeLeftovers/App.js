import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import PointsScreen from './screens/PointsScreen';
import MainScreen from './screens/MainScreen';
import ClaimedItemsScreen from './screens/ClaimedItemsScreen';
import NewFoodItemScreen from './screens/NewFoodItemScreen';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='PointsScreen' component={PointsScreen} />
        <Tab.Screen name='MainScreen' component={MainScreen} />
        <Tab.Screen name='ClaimedItemsScreen' component={ClaimedItemsScreen} />
        <Tab.Screen name='NewFoodItemScreen' component={NewFoodItemScreen} />
      </Tab.Navigator> 
    </NavigationContainer>
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="hi"></Button>
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
