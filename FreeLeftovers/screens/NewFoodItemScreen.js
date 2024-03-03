import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


const NewFoodItemScreen = ({ addFoodItem }) => {
    const [foodName, setFoodName] = useState('');

    const handleAddFoodItem = () => {
        addFoodItem(foodName);
        setFoodName('');
    }

    return (
        <View>
            <Text>Add New Food Item</Text>
            <TextInput
                placeholder="Enter food name"
                value={foodName}
                onChangeText={setFoodName}
            />
            <Button
                title="Add"
                onPress={handleAddFoodItem}
            />
        </View>
    );
};

export default NewFoodItemScreen;
