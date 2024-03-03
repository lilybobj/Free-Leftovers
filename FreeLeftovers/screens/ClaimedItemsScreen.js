import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ClaimedItemsScreen = ({ claimedItems }) => {
    return (
        <View>
            <Text>My Claims</Text>
            <FlatList
                data={claimedItems}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ClaimedItemsScreen;
