import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Card } from 'react-native-paper';
export const CompactInfo=({restaurant})=>{
    return <View style={{alignItems:"center"}}>
        <Card elevation={5} style={styles.card}>
    <Card.Cover style={styles.image} source={{ uri: restaurant.photos[0] }} />
    <Text numberOfLines={3} style={styles.text}>{restaurant.name}</Text>
  </Card>
    </View>
}
const styles=StyleSheet.create({
    card:{
        width:150,
        height:180,
    },
    image:{
        width:"90%",
        height:"78%",
        marginLeft:7,
        marginTop:7,
        borderRadius:10,
        overflow:"hidden"
    },
    text:{
        textAlign:"center",
        fontSize:13
    }
})
