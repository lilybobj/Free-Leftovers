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

    const [claimedItems, setClaimedItems] = useState([]);

    const claimFoodItem = (index) => {
        const itemToClaim = availableItems[index];
        setAvailableItems(prevItems => prevItems.filter((item, i) => i !== index));
        setClaimedItems(prevItems => [...prevItems, itemToClaim]);
    }

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
                title="Go to My Claims"
                onPress={() => navigation.navigate('ClaimedItemsScreen', { claimedItems })}
            />
        </View>
    );
};

export default MainScreen;