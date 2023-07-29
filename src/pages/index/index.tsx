import { View, Text } from "@tarojs/components";
// import { useLoad } from "@tarojs/taro";
import { css } from "styled-system/css";
import "./index.scss";

const styles = css({
  bg: "yellow.200",
  rounded: "9999px",
  fontSize: "90px",
  p: "10px 15px",
  color: "pink.500",
});

export default function Index() {
  return (
    <View className={styles}>
      <Text>Hello world!</Text>
    </View>
  );
}
