import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import { InputField } from "./src/Input";
import Layout from "./src/Layout";
import NewLayout from "./src/layouts";
import { Section } from "./src/SectionList";
import MyCart from "./src/component/CartDesign";

const App = () => {
  const [name, setName] = useState("Bright");
  const [count, setCount] = useState(0);
  const [numLimit, setNumLimit] = useState(false);

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
      {/* <View style={styles.body}>
        <Text style={styles.text}>Heelo {name}, Welcome!</Text>
        <Button color={"blue"} title="CLick Me" onPress={updateName}></Button>

        <Text style={styles.count}>Counter : {count}</Text>
        <Button color="green" title="Increment" onPress={increment}>
          Increament
        </Button>
        {count === 0 ? (
          <Button color="red" title="Decrement" disabled onPress={decrement}>
            Decreament
          </Button>
        ) : (
          <Button color="red" title="Decrement" onPress={decrement}>
            Decreament
          </Button>
        )}
        <Text>Numberof time clicked is {count} </Text>
        <View style={btns}>
          <Button title="Like"></Button>
        </View>
      </View> */}
      {/* external linking

      <Button title="youtube btn" onPress={() => Linking.openUrl()}></Button>
 */}
      {/* <Layout /> */}
      {/* <NewLayout /> */}
      {/* <Section /> */}
      <MyCart />
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
    margin: 10,
  },
  decrementBtn: {
    backgroundColor: "red",
    color: "white",
    margin: 10,
  },
  body: {
    width: "100%",
    height: "100%",
    minHeight: 30,
    backgroundColor: "gray",
    // backgroundColor: "white",
    borderWidth: 20,
    borderColor: "red",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "blue",
    margin: 10,
    textTransform: "uppercase",
    textAlign: "center",
    // fontWeight: 500,
  },
  btn: {
    backgroundColor: "red",
    width: 300,
    height: 50,
    // padding: 20,
    color: "green",
  },
});

const btns = StyleSheet.compose(styles.btn, styles.incrementBtn);

export default App;
