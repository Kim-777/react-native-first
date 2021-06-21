import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>오늘 해야 할일😋</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'rgb(172, 242, 233)',
    }, 
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Header
