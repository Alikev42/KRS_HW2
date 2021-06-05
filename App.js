/*
Kevin R. Salger
IS657, Summer 2021
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
      <View style={styles.rowbox1}>
        <View style={styles.rowbox2}>Row</View>
        <View style={styles.rowbox3}>
          <View style={styles.box4}><Text>Child4</Text></View>
          <View style={styles.box4}>Child5</View>
          <View style={styles.box4}>Child6</View>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}
