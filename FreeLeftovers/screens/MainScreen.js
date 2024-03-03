import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';


// MainScreen.js
import React from 'react';
import { View, Button } from 'react-native';

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
            <Button
                title="My Claims"
                onPress={() => navigation.navigate('ClaimedItems')}
            />
            <Button
                title="Add Food Item"
                onPress={() => navigation.navigate('NewFoodItem')}
            />
        </View>
    );
};

export default MainScreen;
