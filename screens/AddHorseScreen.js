import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Horse from "../Entities/Horse";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Btn from "../components/Btn";
import { useState } from "react";

function AddHorseScreen({ horseList, changeScreen, i18n, toggleLanguage }) {
  const [horseName, setHorseName] = useState('');
  const [horseInfo, setHorseInfo] = useState('');
  const [horsePrice, setHorsePrice] = useState('');
  const [horseDOB, seTHorseDOB] = useState('');

  function HorseName(enteredText) {
    setHorseName(enteredText);
  }
  function HorseAbout(enteredText) {
    setHorseInfo(enteredText);
  }
  function HorsePrice(enteredText) {
    setHorsePrice(enteredText);
  }
  function HorseBirth(enteredText) {
    seTHorseDOB(enteredText);
  }

  function createHorse() {
    horseList.push(new Horse(horseName, horsePrice, horseDOB, horseInfo));
    setHorseScreen();
  }

  function setHorseScreen() {
    changeScreen("mainScreen");
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff5f5" }}>
        <View style={styles.container}>
          <View style={[styles.container, styles.underLine]}>
            <Btn buttonStyle={styles.button} onPress={toggleLanguage}>
              <Ionicons style={styles.icon} name="apps"></Ionicons>
            </Btn>
            <Text style={styles.title}>{i18n.t('appName')}</Text>
            <Btn
              buttonStyle={[styles.addHorseBtn, styles.backButton]}
              onPress={setHorseScreen}
            >
              <Ionicons
                style={styles.backText}
                name="arrow-forward-circle-outline"
              ></Ionicons>
            </Btn>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Text
          style={[
            styles.title,
            { marginLeft: 50, marginTop: 20, color: "#e8e8e8" },
          ]}
        >
          {i18n.t('Add_New_Horses')}
        </Text>
        <TextInput
          placeholder={i18n.t("Name")}
          style={styles.textInputContainer}
          onChangeText={HorseName}
        />
        <TextInput
          placeholder={i18n.t("About")}
          style={[styles.textInputContainer, { paddingVertical: 30 }]}
          multiline={true}
          onChangeText={HorseAbout}
        />
        <TextInput
          placeholder={i18n.t("Price")}
          style={styles.textInputContainer}
          onChangeText={HorsePrice}
        />
        <TextInput
          placeholder="06/24/2021 - 06/24/2021"
          style={styles.textInputContainer}
          onChangeText={HorseBirth}
        />
        <LinearGradient
          style={styles.addHorseBtnGrid}
          colors={["rgba(177, 1, 1, 0.8)", "black"]}
        >
          <Btn
            buttonStyle={styles.addHorseBtn}
            buttonText={styles.addHorseText}
            onPress={createHorse}
          >
            {i18n.t("Add")}
          </Btn>
        </LinearGradient>
      </View>
    </View>
  );
}

export default AddHorseScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 5,
  },

  icon: {
    color: "#ffffff",
    fontSize: 25,
    borderRadius: 70,
    elevation: 2,
    shadowColor: "#580000",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginHorizontal: 50,
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 150,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#580000",
  },
  underLine: {
    borderBottomWidth: 2,
    borderBottomColor: "#787878",
    paddingBottom: 20,
    marginRight: 30,
    marginLeft: 30,
  },
  container2: {
    backgroundColor: "#635f5f",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 200,
    marginHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
  },
  textInputContainer: {
    backgroundColor: "#ffffff",
    marginTop: 40,
    paddingLeft: 20,
    width: "70%",
    borderRadius: 7,
    textAlign: "left",
    paddingVertical: 5,
  },
  addHorseBtn: {
    backgroundColor: "#00000000",
    elevation: 0,
    margin: 0,
    paddingVertical: 0,
    paddingHorizontal: 40,
  },
  addHorseText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 25,
  },
  addHorseBtnGrid: {
    borderRadius: 8,
    paddingHorizontal: 0,
    paddingVertical: 1,
    marginTop: 30,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#999393",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    overflow: "hidden",
  },
  backText: {
    fontSize: 27,
  },
  button: {
    backgroundColor: "#580000",
    paddingHorizontal: 11,
    paddingVertical: 10,
    margin: 0,
    borderRadius: 30
  }
});
