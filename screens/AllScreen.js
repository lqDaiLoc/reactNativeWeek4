import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import TODOS from '../utils/data';
import TodoItems from '../components/TodoItems';
export default class AllScreen extends React.Component{
  static navigationOptions = {
    title: 'All',
  };
  constructor(props){
    super(props);
    this.state = {
      text: '',
      todoList: TODOS,
    }
  }
  onSubmit = () => {
    const {todoList, text} = this.state;
    const lengtList = todoList.length - 1;
    const newTODOItem = {
    body : text,
    status: 'Active',
    id: todoList[lengtList].id + 1,
    };
    const newTODOList = [...todoList, newTODOItem];
    this.setState({
      todoList: newTODOList,
      text: '',
    })
  };

  onPressTodoItem = (data) => {
    const {todoList, text} = this.state;
    const todoChange = todoList.find(TodoItems => TodoItems.id === data);
    todoChange.status = todoChange.status === 'Done' ? 'Active' : 'Done';
    const todoChangeIndex = todoList.findIndex(TodoItems => TodoItems.id === data);
    todoList[todoChangeIndex] = todoChange;
    const newTodoList = [...todoList];
    this.setState({
      todoList : newTodoList,
    }, () => {
      setTimeout(() => {
        this.props.navigation.navigate('TodoDetail', {
          sendData: todoChange,
        });
      }, 1);
    })
  };
  onLongPressTodoItem = (data) => {
    Alert.alert(
      'Xoa cai',
      data.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => {this.deleteTodo(data.id)}},
      ],
      {cancelable: false},
    );
  };
  deleteTodo = id => {
    const {todoList, text} = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList,
    })
  };
  render(){
    const {todoList, text} = this.state;  
    return(
      <ScrollView style={{backgroundColor: '#FFDCA8',}}>
        <View style={styles.container}>
          {todoList.map((todo, idx) =>{
            return <TodoItems todo = {todo} idxxx = {idx} key = {todo.id} 
              onPressTodoItem = {() => this.onPressTodoItem(todo.id)}
              onPressLongTodoItem = {() => this.onLongPressTodoItem(todo)}/>
          })}
          <TextInput style={styles.inputStyle}
            onChangeText={(text) => this.setState({text})}
            value = {text}/>
          <TouchableOpacity style={styles.submitStyle} onPress = {this.onSubmit}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitStyle: {
    width: 70, 
    height: 30, 
    backgroundColor: '#A82300', 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  inputStyle: {
    width: '90%',
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  }
});
