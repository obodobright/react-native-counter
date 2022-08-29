import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import HeaderComponent from "./Header";
import MyCart from "../CartDesign";
import { InputField } from "../../Input";
import { useState } from "react";
const ParentComponent = () => {
  const [show, setShow] = useState(false);

  const handleNext = () => {
    setShow(true);
  };
  return (
    <ScrollView>
      <HeaderComponent />
      {show ? <MyCart /> : <InputField goNext={handleNext} />}

      {/* <Pressable style={styles.btn}>
        <Text>Next</Text>
      </Pressable> */}
    </ScrollView>
  );
};
export default ParentComponent;

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 50,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});
