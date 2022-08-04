import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList } from "react-native";

const NewLayout = () => {
  const [refresh, setRefresh] = useState(false);
  const [list, setList] = useState([
    {
      name: "Bayp]o",
      age: 20,
      // key: "1",
    },
    {
      name: "Kehinde]o",
      age: 20,
      // key: "2",
    },
    {
      name: "Emmanuel",
      age: 20,
      // key: "3",
    },
    {
      name: "Ibukun",
      age: 20,
      // key: "4",
    },
    {
      name: "Itunu",
      age: 20,
      // key: "5",
    },
    {
      name: "BolaS",
      age: 20,
      // key: "6",
    },
  ]);
  const onRefresh = () => {
    setRefresh(true);
    setList([...list, { name: "EBuka", age: 30 }]);
    setRefresh(false);
  };
  return (
    <>
      <FlatList
        horizontal
        inverted
        // numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={({ item }) => (
          <View style={styles.text}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} colors={["#ff0", "#fff4"]} />
        }
      >
        <View style={styles.view1}>
          {list.map((data, i) => (
            <View style={styles.text} key={i}>
              <Text>{data.name}</Text>
              <Text>{data.age}</Text>
            </View>
          ))}
        </View>
      </ScrollView> */}
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
