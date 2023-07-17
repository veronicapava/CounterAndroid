import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const CounterScreen = () => {
    const [count, setCount] = useState(10)


  return (
    <View style={style.container}>
        <Text style={style.counter}>Counter: {count}</Text>

        <TouchableOpacity onPress={() => setCount(count + 1)} style={style.fabLocationBR}>
            <View style={style.fab}>
                <Text style={style.fabText}>+1</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCount(count - 1)} style={style.fabLocationBL}>
            <View style={style.fab}>
                <Text style={style.fabText}>-1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CounterScreen

const style = StyleSheet.create({
    container: {flex:1, backgroundColor:"pink",justifyContent: "center"},
    counter: {fontSize:50, textAlign:"center"},
    fab: {backgroundColor:"red", width:60, height:60,borderRadius:100},
    fabLocationBR: {position: "absolute",bottom:10, right:10},
    fabLocationBL: {position: "absolute",bottom:10, left:10},
    fabText: { alignSelf:'center',color: "white", fontSize:25, fontWeight:"bold" }
})