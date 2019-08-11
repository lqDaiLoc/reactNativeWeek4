import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ActiveScreen() {
  
  return (
    <View style = {styles.container}>
      <Text>Active_Screen</Text>
    </View>
    
  );
}

ActiveScreen.navigationOptions = {
  title: 'Active',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
  },
  toDo: {
    width: 20,
    height: 30,
  }
});
