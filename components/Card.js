import { View } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

function Card({ children, imageSorce}) {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground
        resizeMode="stretch"
        source={imageSorce}
        style={styles.card}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 300,
    height: 190,
    marginHorizontal: 12,
    overflow: "hidden",
    borderRadius: 30,
    elevation: 4,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    opacity: 0.6,
    overlayColor: "black",
  },
  viewStyle: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 300,
    height: 190,
    marginHorizontal: 12,
    overflow: "hidden",
    borderRadius: 30,
    elevation: 4,
    backgroundColor: 'black'
  }
});
