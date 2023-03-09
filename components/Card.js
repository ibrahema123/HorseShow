import { View } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

function Card({ children, cardStyle, imageSorce, imageStyle, isHeddin }) {
  if (isHeddin) {
    return <View></View>
  }
  else {
    return (
      <ImageBackground
        imageStyle={imageStyle}
        resizeMode="stretch"
        source={imageSorce}
        style={[styles.card, cardStyle]}
      >
        <View>{children}</View>
      </ImageBackground>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 300,
    height: 190,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: '#000000'
  },
});
