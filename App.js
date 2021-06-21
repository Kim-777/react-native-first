import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: '커피 마시기', key: '1'},
    {text: '자바스크립트 공부하기', key: '2'},
    {text: '타입스크립트 공부하기', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key !== key))
  }

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAddTodo={handleAddTodo}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
