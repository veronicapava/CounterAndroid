import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Fab from '../buttons/Fab'

const CounterScreen = () => {
    const [count, setCount] = useState(10)


  return (
    <View style={style.container}>
        <Text style={style.counter}>Counter: {count}</Text>

        <Fab
            title="+1"
            onPress={() => setCount(count + 1)}
        />

        <Fab
            title="-1"
            onPress={() => setCount(count - 1)}
            position="bl"
        />
    </View>
  )
}

export default CounterScreen

const style = StyleSheet.create({
    container: {flex:1, backgroundColor:"pink",justifyContent: "center"},
    counter: {fontSize:50, textAlign:"center"},
})