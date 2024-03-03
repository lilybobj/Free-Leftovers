import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, FlatList } from 'react-native';
import React, { useState } from 'react';


// MainScreen.js

/*
const MainScreen = ({ navigation }) => {
    const [foodItems, setFoodItems] = useState(["Apple", "Banana", "Orange"]);
    const [claimedItems, setClaimedItems] = useState([]);

    const claimFoodItem = (index) => {
        const claimedItem = foodItems.splice(index, 1)[0];
        setFoodItems([...foodItems]);
        setClaimedItems([...claimedItems, claimedItem]);
    }
    

    return (
        <View>
            <Text>Available Food Items</Text>
            <FlatList
                data={foodItems}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item}</Text>
                        <Button
                            title="Claim"
                            onPress={() => claimFoodItem(index)}
                            disabled={false} // Add logic for disabling
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            
        </View>
    );
};

export default MainScreen;*/

const MainScreen = ({ navigation }) => {
    const [availableItems, setAvailableItems] = useState(["Apple", "Banana", "Orange"]);

    const claimFoodItem = (index) => {
        const claimedItem = availableItems[index];
        setAvailableItems(prevItems => prevItems.filter((item, i) => i !== index));
        // Update the claimed items list or perform any other action
    }

    const handleAddFoodItem = (newItem) => {
        setAvailableItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <View>
            <Text>Available Food Items</Text>
            <FlatList
                data={availableItems}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item}</Text>
                        <Button
                            title="Claim"
                            onPress={() => claimFoodItem(index)}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Button
                title="Add Food Item"
                onPress={() => navigation.navigate('NewFoodItem', { onAddFoodItem: handleAddFoodItem })}
            />
        </View>
    );
};

export default MainScreen;