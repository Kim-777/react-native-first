import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>boxOne</Text>
            <Text style={styles.boxTwo}>boxTwo</Text>
            <Text style={styles.boxThree}>boxThree</Text>
            <Text style={styles.boxFour}>boxFour</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 40,
    }
})

export default Sandbox
