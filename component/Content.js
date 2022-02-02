import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';

export const Content = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Mon Contenu</Text>
      <Image
       style={styles.image}
      source={require('../images/Gaming_5000x3125.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    body:{
        flex:1,
        
    },
    text:{
        textAlign:"center",
        margin:50,
        fontSize:40
    },
    image:{
        height:200,
        width:200,
        marginLeft:75
    }
  })
export default Content;
