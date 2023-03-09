import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import HourseScreen from "./screens/HourseScreen";
import Horse from "./Entities/Horse";
import AddHorseScreen from "./screens/AddHorseScreen";
import EditScreen from "./screens/EditScreen";

const horseArray = [];
let horse = new Horse(
  "Fusaichi Pegasus",
  "20 million",
  "22/ 6/ 2002",
  "information for horse"
);
horseArray.push(horse);

export default function App() {
  const [horseScreen, setHorseScreen] = useState("mainScreen");
  const [horseData, sethorseData] = useState();
  const [horseIndex, sethorseIndex] = useState();

  let screen = horseScreen;
  if (horseScreen == "mainScreen") {
    screen = (
      <MainScreen
        changeScreen={setHorseScreen}
        horseArray={horseArray}
        horseData={sethorseData}
        horseIndex={sethorseIndex}
      />
    );
  } else if (horseScreen == "horseScreen") {
    screen = (
      <HourseScreen
        onPress={setHorseScreen}
        horseData={horseData}
        horseList={horseArray}
        horseIndex={horseIndex}
      />
    );
  } else if (horseScreen == "addHorseScreen") {
    screen = (<AddHorseScreen horseList={horseArray} changeScreen={setHorseScreen} />);
  }
  else if (horseScreen == 'editScreen')
  {
    screen = <EditScreen horseList={horseArray} changeScreen={setHorseScreen} horseIndex={horseIndex}/>;
  }
  return <View style={{ flex: 1 }}>{screen}</View>;
}

const styles = StyleSheet.create({});
