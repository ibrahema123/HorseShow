import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import HourseScreen from "./screens/HourseScreen";
import Horse from "./Entities/Horse";
import AddHorseScreen from "./screens/AddHorseScreen";
import EditScreen from "./screens/EditScreen";
import { I18nManager } from "react-native";
import { I18n } from "i18n-js";
import Translation from "./assets/languages/Translate.json";
import { NativeModules } from "react-native";

const horseArray = [];
let horse = new Horse(
  "Fusaichi Pegasus",
  "20 million",
  "22/ 6/ 2002",
  "information for horse"
);

horseArray.push(horse);

const i18n = new I18n(Translation);
i18n.fallbacks = true;

export default function App() {
  if (I18nManager.isRTL == true) {
    i18n.locale = "ar";
  } else if (I18nManager.isRTL == false) {
    i18n.locale = "en";
  }
  const toggleLanguage = () => {
    const newLanguage = i18n.locale.startsWith("en") ? "ar" : "en";
    i18n.locale = newLanguage;
    if (newLanguage.startsWith("ar")) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
    NativeModules.DevSettings.reload();
  };

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
        i18n={i18n}
        toggleLanguage={toggleLanguage}
      />
    );
  } else if (horseScreen == "horseScreen") {
    screen = (
      <HourseScreen
        onPress={setHorseScreen}
        horseData={horseData}
        horseList={horseArray}
        horseIndex={horseIndex}
        i18n={i18n}
        toggleLanguage={toggleLanguage}
      />
    );
  } else if (horseScreen == "addHorseScreen") {
    screen = (
      <AddHorseScreen horseList={horseArray} changeScreen={setHorseScreen} i18n={i18n} toggleLanguage={toggleLanguage}/>
    );
  } else if (horseScreen == "editScreen") {
    screen = (
      <EditScreen
        horseList={horseArray}
        changeScreen={setHorseScreen}
        horseIndex={horseIndex}
        i18n={i18n}
        toggleLanguage={toggleLanguage}
      />
    );
  }
  return <View style={{ flex: 1 }}>{screen}</View>;
}

const styles = StyleSheet.create({});
