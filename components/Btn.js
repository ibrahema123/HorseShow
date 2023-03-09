import { StyleSheet, Text, View, Pressable } from "react-native";

function Btn({
  children,
  onPress,
  isHidden,
  isDisabled,
  buttonStyle,
  buttonText,
  rippleColor,
  disabledButtonStyle,
  disabledButtonText,
}) {
  if (isHidden) {
    return <View></View>;
  }

  if (isDisabled) {
    return (
      <View style={[styles.buttonInnerContainerDisabled, disabledButtonStyle]}>
        <Text style={[styles.disabledText, disabledButtonText]}>
          {children}
        </Text>
      </View>
    );
  } else if (!isDisabled) {
    return (
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, buttonStyle, styles.pressed]
            : [styles.buttonInnerContainer, buttonStyle]
        }
        onPress={onPress}
        android_ripple={{ color: rippleColor || "#e60f0f00" }}
      >
        <Text style={[styles.defaultText, buttonText]}>{children}</Text>
      </Pressable>
    );
  }
}

export default Btn;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#00ecfd",
    elevation: 2,
  },
  defaultText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  buttonInnerContainerDisabled: {
    backgroundColor: "#565757",
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  disabledText: {
    color: "#8f8f8f",
    textAlign: "center",
  },
});
