import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
