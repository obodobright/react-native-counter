import { ScrollView, Text, StyleSheet, View, Image, ImageBackground } from "react-native";

const ImagePrac = () => {
  return (
    <ImageBackground source={require("../../img.png")} style={styles.image}>
      <ScrollView>
        <View style={styles.body}>
          <Text>Hello</Text>
          {/* <Image source={require("../../img.png")} resizeMode="contain" blurRadius={0.9} /> */}
          <Image
            source={{
              uri: "https://pbcdn1.podbean.com/imglogo/dir-logo/139840/139840_300x300.jpeg",
            }}
          />
        </View>
        <View>
          <Image
            style={styles.view}
            source={{
              uri: "https://cdn.vanguardngr.com/wp-content/uploads/2020/08/The-Elevation-Church-768x511.jpg?width=768&auto_optimize=medium",
            }}
          />
          <Text>hello</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ImagePrac;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    padding: 20,
    // height: 100,
  },
  image: {
    // width: 130,
    // height: 130,
    // borderRadius: 100,
  },
  view: {
    height: 300,
  },
});
