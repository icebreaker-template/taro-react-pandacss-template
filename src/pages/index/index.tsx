import { IceButton } from "@/components/IceButton";
import { View, Text, Image } from "@tarojs/components";
// import { useLoad } from "@tarojs/taro";
import { css } from "styled-system/css";
import "./index.scss";

const styles = css({
  bg: "yellow.200",
  rounded: "9999px",
  fontSize: "60px",
  p: "10px 15px",
  color: "pink.500",
  textAlign: "center",
});

export default function Index() {
  return (
    <>
      <View>
        <Image
          className={css({
            w: "screen",
          })}
          src='https://pica.zhimg.com/70/v2-6b0adc0d7cfef4698c0df39e5bb634e0_1440w'
          mode='widthFix'
        ></Image>
      </View>
      <View className={styles}>
        <Text>Hello Pandaria's world!</Text>
      </View>
      <View
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <IceButton>IceButton default</IceButton>
        <IceButton
          size='lg'
          visual='outline'
          customClass={css({
            // ! means !important
            // you could write "2xl !important" instead
            // https://panda-css.com/docs/concepts/writing-styles#important-styles
            fontSize: "2xl!",
          })}
        >
          IceButton custom
        </IceButton>
      </View>
    </>
  );
}
