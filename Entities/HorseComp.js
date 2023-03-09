import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Btn from "../components/Btn";
import { Ionicons } from "@expo/vector-icons";

function HorseComp({ horse, changeScreen, horseData, setHorseIndex, horseIndex }) {
  function changeHorseScreen() {
    changeScreen('horseScreen');
    horseData(horse);
    setHorseIndex(horseIndex);
  }
  return (
    <Card imageStyle={styles.imageStyle} imageSorce={horse.photo}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardTitle}>{horse.name}</Text>
          <Text style={styles.cardPrice}>${horse.price}</Text>
        </View>
        <Btn
          buttonText={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          onPress={changeHorseScreen}
        >
          {<Ionicons name="arrow-forward"></Ionicons>}
        </Btn>
      </View>
    </Card>
  );
}

export default HorseComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 26,
  },
  icon: {
    backgroundColor: "#580000",
    color: "#ffffff",
    fontSize: 25,
    padding: 10,
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
  buttonStyle: {
    backgroundColor: "#78787891",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  cardContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 26,
    paddingBottom: 10,
  },
  cardTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingRight: 100,
  },
  cardPrice: {
    color: "#ffffff",
    paddingRight: 100,
  },
  imageStyle: {
    opacity: 0.7,
  },
});
