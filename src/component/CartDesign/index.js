import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from "react-native";

const MyCart = () => {
  return (
    <ScrollView style={cartStyle.body}>
      <View style={cartStyle.navHeader}>
        <View>
          <Text style={cartStyle.icons}>+</Text>
        </View>
        <View>
          <Text style={cartStyle.header}> My Cart</Text>
        </View>
        <View>
          <Text style={cartStyle.icons}></Text>
        </View>
      </View>
      <View style={[cartStyle.productCard, cartStyle.elevation]}>
        <View style={cartStyle.img}></View>
        <View style={cartStyle.description}>
          <Text>Minions pack</Text>
          <Text>Collections</Text>
          <Text>$4.99</Text>
        </View>
        <View style={cartStyle.productNo}>
          <Text style={cartStyle.btn1}>+</Text>
          <Text>1</Text>
          <Text style={cartStyle.btn2}>-</Text>
        </View>
      </View>
      <View style={[cartStyle.productCard, cartStyle.elevation]}>
        <View style={cartStyle.img}></View>
        <View style={cartStyle.description}>
          <Text>Moana</Text>
          <Text>Ceramic toy</Text>
          <Text>$3.99</Text>
        </View>
        <View style={cartStyle.productNo}>
          <Text style={cartStyle.btn1}>+</Text>
          <Text>1</Text>
          <Text style={cartStyle.btn2}>-</Text>
        </View>
      </View>
      <View style={cartStyle.action}>
        <Text style={cartStyle.actionText}>Promo Code</Text>
        <TouchableHighlight style={cartStyle.btn} underlayColor="#fff0" activeOpacity={0.3}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Apply</Text>
        </TouchableHighlight>
      </View>
      <View>
        <View style={cartStyle.receipt}>
          <Text style={cartStyle.receiptText}>Cart total</Text>
          <Text style={cartStyle.receiptText}>$8.98</Text>
        </View>
        <View style={cartStyle.receipt}>
          <Text style={cartStyle.receiptText}>Tax</Text>
          <Text style={cartStyle.receiptText}>$2</Text>
        </View>
        <View style={cartStyle.receipt}>
          <Text style={cartStyle.receiptText}>Delivery fee</Text>
          <Text style={cartStyle.receiptText}>$2</Text>
        </View>
        <View style={cartStyle.receipt}>
          <Text style={cartStyle.receiptText}>Promo discount</Text>
          <Text style={cartStyle.receiptText}>-$0</Text>
        </View>
        <View style={{ borderBottomColor: "#52006A", borderBottomWidth: 1, marginTop: 4 }}></View>
        <View style={cartStyle.receipt}>
          <Text style={cartStyle.receiptText}>Subtotal</Text>
          <Text style={cartStyle.receiptText}>$12.98</Text>
        </View>
      </View>
      <View style={cartStyle.btnContainer}>
        <TouchableHighlight style={cartStyle.btnProceed}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Proceed</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
export default MyCart;

const cartStyle = StyleSheet.create({
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  receiptText: {
    fontSize: 17,
    color: "#91A7B7",
  },
  receipt: {
    display: "flex",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    marginTop: 7,
  },
  btn: {
    width: 120,
    height: 40,
    backgroundColor: "#52006A",
    color: "#fff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnProceed: {
    width: 150,
    height: 40,
    backgroundColor: "#52006A",
    color: "#fff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  actionText: {
    fontSize: 17,
  },
  action: {
    width: "100%",
    height: 60,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#52006A",

    borderRadius: 7,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  productNo: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn1: {
    backgroundColor: "#52006A",
    color: "#fff",
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn2: {
    backgroundColor: "#fff",
    color: "#52006A",
    borderWidth: 1,
    borderColor: "#52006A",
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // fontSize: 18,
  },
  img: {
    width: 70,
    height: 70,
    backgroundColor: "gray",
  },
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: "whitesmoke",
  },
  header: {
    fontSize: 21,
    fontWeight: "600",
  },
  navHeader: {
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#ff00",
    marginBottom: 15,
  },
  icons: {
    // color: "",
    fontSize: 20,
    fontWeight: "500",
  },
  productCard: {
    width: "100%",
    height: 100,
    backgroundColor: "transparent",
    // borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  description: {
    flex: 1,
    marginLeft: 4,
  },
  elevation: {
    elevation: 3,
    shadowColor: "#52006A",
  },
});
