import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const NewSideBar = () => {
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
      justifyContent:"space-around",
      backgroundColor:"green",
      width:50
    },
    text:{
      color:"white"
    }
  })
export default NewSideBar;
