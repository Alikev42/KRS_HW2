/*  Kevin R. Salger
    IS657, Summer 2021
    Homework 2 */
import {Platform, StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#8800ff',
    alignItems: "flex-start",      // Vertical
    justifyContent: "space-around",  // Horizontal
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "#ff0000",
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },
  //  Outer box containing "Column" and Child1, Child2, and Child3 boxes
  colbox: { 
    width: 200,
    //height: 400,
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
    backgroundColor: "#d1d2d3",
    margin: 5,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#000000"  // Black
  }, 
  //  Defines boxes for Child1, Child2, and Child3
  box2: {
      width: 75,
      height: 75,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#adadad",
      margin: 5,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#000000"
  },
  //  Defines outer box for "Row" and Child4, Child5, and Child6 boxes
  rowbox1: {
      //width: 400,
      height: 200,
      flexDirection: "row",
      justifyContent: "Flex-start",
      alignItems: "flex-start",
      backgroundColor: "#d1d2d3",
      margin: 5,
      borderWidth: 5,
      borderStyle: "solid",
      borderColor: "#000000"
  },
  //  Internal row containing only the text "Row"
  rowbox2: {
    //width: 400,
    height: 50,
    flexDirection: "column",
    justifyContent: "stretch",
    alignSelf: "stretch",
    backgroundColor: "#d1d2d3",
    margin: 5,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "#000000"
  },
  //  Internal row containing only the Child4-6 boxes
  rowbox3: {
    width: 200,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#d1d2d3",
    margin: 5,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "#000000"
  },
  //  Defines boxes containing Child4, Child5, and Child6
  box4: {
      width: 75,
      // flexDirection: "column",
      height: 75,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#adadad",
      margin: 5,
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#000000"
  },

  boxText: {
    color: "#010101",
    fontWeight: "bold"
  }
});

