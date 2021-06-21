import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const AddTodo = ({ handleAddTodo }) => {

    let number = useRef(4);

    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }


    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="일정을 추가하세요."
                onChangeText={changeHandler}
                value={text}
            />
            <Button 
                onPress={() => {
                    if(text.length) {
                        handleAddTodo({
                            text,
                            key: (number.current++).toString(10),
                        })
                    } else {
                        Alert.alert('일정을 입력해주셔야 해요!', '꼭이요!', [
                            {text: '확인', onPress: () => console.log('alert closed')}
                        ])
                    }
                }} 
                title="일정 추가하기" 
                color='rgb(172, 242, 233)' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 16,
        marginTop: 16,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default AddTodo
