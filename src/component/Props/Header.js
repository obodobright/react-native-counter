import { View, Text, StyleSheet } from "react-native";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerNav}>
        <Text style={styles.HeaderText}>Bight Mobile</Text>
      </View>
    </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
  },
  headerNav: {
    width: "100%",
    height: 80,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "red",
  },
  HeaderText: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
  },
});
