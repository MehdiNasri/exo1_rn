import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const MyNavBar = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>icone1</Text>
      <Text style={styles.text}>icone2</Text>
      <Text style={styles.text}>icone3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    body:{
      flexDirection:"row",
      justifyContent:"space-around",
      backgroundColor:"red",
      height:50,
      alignItems:"center",
    },
    text:{
      color:"white"
    }
  })
export default MyNavBar;
