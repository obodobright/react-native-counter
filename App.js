import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";

const App = () => {
  const [name, setName] = useState("Bright");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const updateName = () => {
    setName("Mousuf");
  };
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>Heelo {name}, Welcome!</Text>
        <Button color={"blue"} title="CLick Me" onPress={updateName}></Button>

        <Text style={styles.count}>Counter : {count}</Text>
        <Button color="green" title="Increment" onPress={increment}>
          Increament
        </Button>
        <Button color="red" title="Decrement" onPress={decrement}>
          Decreament
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  count: {
    fontSize: 20,
    color: "gray",
  },
  incrementBtn: {
    backgroundColor: "green",
    color: "white",
    margin: "10px",
  },
  decrementBtn: {
    backgroundColor: "red",
    color: "white",
    margin: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "blue",
    margin: 10,
    // fontWeight: 500,
  },
});

export default App;
