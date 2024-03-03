import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Post() {
  return (  
    <View style={styles.container}>
        <Button title="Press"></Button>
        <Text>Josh's Banana</Text>
        <StatusBar style="auto" />
        
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
