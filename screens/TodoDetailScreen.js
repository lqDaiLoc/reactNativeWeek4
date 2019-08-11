import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class TodoDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const data = this.props.navigation.getParam('sendData')
        return(
            <View style={styles.container}>
                <Text>id: {data.id}</Text>
                <Text>status: {data.status}</Text>
                <Text>{JSON.stringify(data.body)}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDCA8',
      justifyContent: 'center',
      alignItems: 'center',
    },
})