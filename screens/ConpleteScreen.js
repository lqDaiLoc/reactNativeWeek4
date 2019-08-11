import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ConpleteScreen(){
  return(
    <View style = {styles.container}>
      <Text>Conplete_Screen</Text>
    </View>
  )
}
ConpleteScreen.navigationOptions = {
  title: 'Complete',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
  },
});
