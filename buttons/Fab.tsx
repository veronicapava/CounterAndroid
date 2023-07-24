import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    position?: "bl" | "br"
}

const Fab = ({title,onPress, position ="br"} : Props) => {
  return (
    
    <TouchableOpacity 
        style={
            (position === "bl"? style.fabLocationBL : style.fabLocationBR)
        }
        onPress={onPress}
    >
        <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Fab

const style = StyleSheet.create({
    fab: {backgroundColor:"red", width:60, height:60,borderRadius:100,justifyContent:"center"},
    fabLocationBR: {position: "absolute",bottom:25, right:10},
    fabLocationBL: {position: "absolute",bottom:25, left:10},
    fabText: { alignSelf:'center',color: "white", fontSize:25, fontWeight:"bold" }
})