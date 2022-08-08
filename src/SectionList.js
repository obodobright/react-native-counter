import React, { useState } from "react";
import { View, Text, SectionList, StyleSheet, RefreshControl } from "react-native";
// import { FlatList } from "react-native-web";

export const Section = () => {
  const DATA = [
    {
      id: "1",
      name: "Bright",
      data: ["red", "blue"],
    },
    {
      id: "2",
      name: "Chinedu",
      data: ["gray", "indigo"],
    },
    {
      id: "3",
      name: "Ezra",
      data: ["red", "green"],
    },
  ];
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState(DATA);

  const onRefresh = () => {
    setRefresh(true);
    setData([
      ...data,
      { id: (data.length + 1).toString(), name: "Chizom", data: ["purple", "magenta"] },
    ]);
    setRefresh(false);
  };

  return (
    <SectionList
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      sections={data}
      renderItem={({ item }) => (
        <View style={styles.view2}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.view1}>
          <Text style={{ color: "#fff" }}>{section.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  view1: {
    width: "100%",
    background: 40,
    padding: 5,
    backgroundColor: "red",
    color: "white",
    // justifyContent: "center",
    // alignItems: "center",
    // display: "flex",
  },
  view2: {
    padding: 5,
  },
});
