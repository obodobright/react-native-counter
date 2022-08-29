import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { useState } from "react";
export const InputField = ({ goNext }) => {
  const [input, setInput] = useState("");
  const [inputt, setInputt] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    ToastAndroid.show("Login successfully", ToastAndroid.LONG);
    goNext();
    // Alert.alert("Login info", "You have successfully loggedin!", [
    //   { text: "Done", onPress: () => console.log("done") },
    //   { text: "Cancel", onPress: () => console.log("existed") },
    // ]);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text style={styles.header}>Kuda</Text>
      </View>
      <SafeAreaView>
        <View>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            // placeholderTextColor="green"
            value={input}
            onChangeText={setInput}
            maxLength={12}
            //   autoFocus
            keyboardType="twitter"
            keyboardAppearance="dark"
            autoComplete="gender"
            //   multiline
          />
        </View>
        <View>
          <Text>Email address</Text>
          <TextInput
            placeholder="Email"
            value={inputt}
            onChangeText={setInputt}
            style={styles.input}
            // placeholderTextColor="green"
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        {/* <View style={styles.btn}> */}
        {/* <Button
          title="Submit"
          color={"purple"}
          onPress={() =>
            alert(`submitted ${{ username: input, password, email: inputt }}`)
          }
        /> */}
        <TouchableHighlight
          underlayColor={"red"}
          onPress={handleSubmit}
          style={styles.btn}
          activeOpacity={0.7}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableHighlight>
        <View>
          <Text onPress={() => setShowModal(!showModal)}>Forgot Password</Text>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            transparent
            animationType="slide"
            hardwareAccelerated
          >
            <View style={styles.center_modal}>
              <View style={styles.modal}>
                <View style={{ height: 50 }}>
                  <Text>Why you go forget your password</Text>
                </View>

                <Pressable onPress={() => setShowModal(false)}>
                  <Text style={{ color: "red", backgroundColor: "green" }}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center_modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal: {
    width: 300,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    textAlign: "center",
    color: "purple",
  },
  btn: {
    backgroundColor: "purple",
    height: 45,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  body: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // backgroundColor: "red",
  },
  text1: {
    fontSize: 20,
    // color: "white",
    height: 100,
    backgroundColor: "white",
  },
  input: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "purple",
    fontSize: 18,
    borderRadius: 5,
    margin: 7,
  },
});
