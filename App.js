import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [ name, setName ] = useState('yechan');
  const [person, setPerson] = useState({name: 'mario', age: 10});

  const clickHandler = () => {
    setName('핸썸 예찬');
    setPerson({name: '여우', age: 20});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText} >Hello, World!</Text>
      </View>
      <View>
        <Text>제 이름은 {name}입니다!</Text>
        <Text>제 친구 이름은 {person.name}이고 나이는 {person.age}입니다.</Text>
        <View style={styles.buttonContainer}><Button title='change name' onPress={clickHandler}/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  }
});
