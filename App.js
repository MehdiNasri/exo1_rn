import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MyNavBar from './component/MyNavBar';
import NewSideBar from './component/NewSideBar';
import Content from './component/Content';

const App = () => {
  return (
    <View style={styles.body}>
      <MyNavBar />
      <View style={styles.content}>
        <NewSideBar />
        <Content />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  content:{
    flex:1,
    flexDirection:"row"
  }
})
export default App;
