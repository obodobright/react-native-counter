import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";

const NewLayout = () => {
  const [refresh, setRefresh] = useState(false);
  const [list, setList] = useState([
    {
      name: "Bayp]o",
      age: 20,
    },
    {
      name: "Kehinde]o",
      age: 20,
    },
    {
      name: "Emmanuel",
      age: 20,
    },
    {
      name: "Ibukun",
      age: 20,
    },
    {
      name: "Itunu",
      age: 20,
    },
    {
      name: "BolaS",
      age: 20,
    },
  ]);
  const onRefresh = () => {
    setRefresh(true);
    setList([...list, { name: "EBuka", age: 30 }]);
    setRefresh(false);
  };
  return (
    <>
      <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
        <View style={styles.view1}>
          {list.map((data, i) => (
            <View style={styles.text} key={i}>
              <Text>{data.name}</Text>
              <Text>{data.age}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default NewLayout;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    // height: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    margin: 5,

    fontSize: 16,
    backgroundColor: "lightgray",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
