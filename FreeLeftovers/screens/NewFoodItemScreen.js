import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';



const NewFoodItemScreen = ({ navigation, route }) => {
    const [newItemText, setNewItemText] = useState('');

    const handleAddFoodItem = () => {
        if (newItemText.trim() !== '') {
            route.params.onAddFoodItem(newItemText.trim());
            navigation.goBack();
        }
    };
    

    return (
        <View>
            <Text>Add New Food Item</Text>
            <TextInput
                placeholder="Enter new item"
                value={newItemText}
                onChangeText={text => setNewItemText(text)}
            />
            <Button
                title="Add"
                onPress={handleAddFoodItem}
            />
        </View>
    );
};

export default NewFoodItemScreen;
