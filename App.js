import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [ name, setName ] = useState('yechan');
  const [ age, setAge ] = useState('30');
  const [people, setPeople] = useState([
    {name: 'mario', age: 10,id: '1'},
    {name: 'moo', age: 10,id: '2'},
    {name: 'roo', age: 20,id: '3'},
    {name: 'koo', age: 1,id: '4'},
    {name: 'sea', age: 2,id: '5'},
    {name: 'tool', age: 50,id: '6'},
  ]);

  const clickHandler = () => {
    setName('핸썸 예찬');
    setPerson({...person, name: '여우'});
  }

  const inputHandler = (value) => {
    setName(value);
  }

  const handlerChangeAge = (value) => {
    setAge(value);
  }

  const pressHandler = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  }

  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.boldText} >Hello, World!</Text>
        </View>
        <View>
          <Text>제 이름은 {name}입니다!</Text>
          <Text>제 나이는 {age} </Text>


          {/* <View>
            {people.map(people => (
              <View style={styles.card} key={people.key}>
                <Text>{people.name}</Text>
                <Text>{people.age}</Text>
              </View>
            ))}
          </View> */}

          <FlatList 
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Text style={styles.card}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <Text>이름 변경: </Text>
          <TextInput 
            multiline
            style={styles.input}
            placeholder='이름을 입력해주세요.'
            onChangeText={inputHandler}
          />

          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="나이를 변경해주세요."
            onChangeText={handlerChangeAge}
          />

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
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  card: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    paddingHorizontal: 20,
    padding: 30,
    fontSize: 24,
    marginHorizontal: 10,
  }
});
