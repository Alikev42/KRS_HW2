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

    colbox: {
      width: 200,
      height: 400,
      justifyContent: "center",
      alignItems: "Center",
      backgroundColor: "#d1d2d3",
      margin: 10,
      borderWidth: 5,
      borderStyle: "solid",
      borderColor: "#000000"  // Black
    }, 

    box2: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#adadad",
        margin: 10,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#000000"
    },
  
    rowbox: {
        width: 400,
        height: 200,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#d1d2d3",
        margin: 10,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#000000"
    },

    box4: {
        width: 300,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#adadad",
        margin: 10,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#000000"
    },

    boxText: {
      color: "black",
      fontWeight: "bold"
    }
  });

  /*
  export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "ghostwhite",
    alignItems: 'center'/*,
    justifyContent: 'center',*
},

box: {
  height: 100,
  width: 100,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightgray",
  borderWidth: 1,
  borderStyle: "dashed",
  borderColor: "darkslategray",
  margin: 10
},

boxText: {
  color: "darkslategray",
  fontWeight: "bold"
}
});*/