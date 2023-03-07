import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import HourseScreen from "./screens/HourseScreen";

export default function App() {
  const [hourseScreen, setHourseScreen] = useState(0);
  let screen = hourseScreen;
  if (hourseScreen == 0) {
    screen = <MainScreen onPress={setHourseScreen}/>;
  }
  else
  {
    screen = <HourseScreen onPress={setHourseScreen}/>
  }
  return (
  <View>{screen}</View>
  );
}

const styles = StyleSheet.create({});
