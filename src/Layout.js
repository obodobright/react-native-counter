import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./style";

const Layout = () => {
  return (
    <>
      <View style={style.navbar}>
        <Text style={style.navText}>Good Morning, Bright</Text>
        <Text style={style.walletIcon}></Text>
        <Image source={require("./img.png")} style={style.profile} />
      </View>
      <View style={style.container}>
        <View style={style.balance}>
          <View style={style.balanceContent}>
            <Text style={{ color: "white" }}>Total Balance</Text>
            <Text style={style.setting}></Text>
          </View>
          <View style={style.balanceContent}>
            <Text style={{ color: "white" }}>NGN22v,191,723.15</Text>
            <Text>Hide balance</Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default Layout;
