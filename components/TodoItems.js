import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function TodoItems(props){
    const statusStyle = {
        backgroundColor: props.todo.status === 'Done' ? '#538622' : '#2D7B78'
    };
    return (
        <TouchableOpacity style={[styles.TodoItem, statusStyle]} 
            onPress = {props.onPressTodoItem}
            onLongPress = {props.onPressLongTodoItem}
            >
            <Text style={styles.todoItemsText}>
                {props.idxxx + 1}: {props.todo.body}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodoItem: {
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
        width: '90%',
    },
    todoItemsText: {
        color: 'white',
        fontSize: 20,
    }
  });

export default TodoItems;