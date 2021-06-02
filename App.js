/*
Homework 2

Please submit a text file “hw2.txt” that has two links:  
1) the URL to your homework Github repository. 
2)  the URL to your Expo stack homework project. 

Please create an application with the following layout. 
You should have all the alignments, texts and boxes similar to the following styles. 
There are borders for the whole screen, column, row and child boxes. 
The layout may not be different in mobile phones but you should at least make 
sure that the web version has the correct layout styles. The colors don’t matter.

*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styles from "./Styles.js";
// import box from "./box.js";

export default function App() {
  return (
    /* Container level, then two rows.  Inside the first row is the column boxes. 
      Inside the second row is the row boxes.  */
    <View style={styles.container}>
      <View style={styles.colbox}>Column
        <View style={styles.box2}>Child1</View>
        <View style={styles.box2}>Child2</View>
        <View style={styles.box2}>Child3</View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.rowbox}>Row
        <View style={styles.box2}>Child4</View>
        <View style={styles.box2}>Child5</View>
        <View style={styles.box2}>Child6</View>
        //<StatusBar style="auto" />
      </View>
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f1f2',
    alignItems: "center", // Vertical
    justifyContent: "center",  // Horizontal
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#000000",
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dddddd",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black"
  }, 

  boxText: {
    color: "black",
    fontWeight: "bold"
  }
});
*/