import { View, Text, StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import { useState } from "react";
export const InputField = () => {
  const [input, setInput] = useState("");
  const [, setInputt] = useState("");
  const [, setPassword] = useState("");

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
            //   value={inputt}
            onChange={(inputt) => setInputt(inputt)}
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
            onChange={(password) => setPassword(password)}
            secureTextEntry={true}
          />
        </View>
        {/* <View style={styles.btn}> */}
        <Button title="Submit" color={"purple"} onPress={() => console.log("submitted")} />
        {/* </View> */}
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    textAlign: "center",
    color: "purple",
  },
  btn: {
    backgroundColor: "red",
    height: 45,
    color: "white",
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
