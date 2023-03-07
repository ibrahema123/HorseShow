import { StyleSheet, Text, View, Pressable } from "react-native";

function Btn({children, buttonStyle, buttonText, onPress, rippleColor}) {
  return (
    <View style={[styles.defaultBtn, buttonStyle]}>
      <Pressable
        style={({pressed}) => pressed? [styles.buttonInnerContainer, buttonStyle, styles.pressed] : [styles.buttonInnerContainer, buttonStyle]}
        onPress={onPress}
        android_ripple={{ color: rippleColor}}
      >
        <Text style={[styles.defaultText, buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Btn;

const styles = StyleSheet.create({
  defaultBtn: {
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: '#00ecfd',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  defaultText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
