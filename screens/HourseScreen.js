import { StyleSheet, Text, View } from "react-native";
import Btn from "../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function HourseScreen( {onPress, horseData, horseList, horseIndex, i18n, toggleLanguage} ) {
  console.log(horseIndex)
  function removeHorse(index) {
    console.log(index)
    let m = 0
    if (index == 0)
    {
      m = 1;
    }
    else {
      m = index;
    }
    horseList.splice(index, m);
    Home();
  }

  function Home() {
      onPress('mainScreen');
  }
  function edit() {
    onPress('editScreen');
  }
  return (
    <ImageBackground
      source={horseData.photo}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Btn
          buttonStyle={styles.buttonStyle}
          buttonText={[styles.buttonText, { color: "white" }]}
          onPress={Home}
        >
          {<Ionicons name="arrow-back"></Ionicons>}
        </Btn>
        <Btn buttonStyle={styles.buttonStyle} buttonText={styles.buttonText} onPress={removeHorse.bind(this, horseIndex)}>
          {<Ionicons style={{color: 'red', fontSize: 15}} name="trash-outline"></Ionicons>}
        </Btn>
      </View>
      <View style={styles.viewStyle}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardTitle}>{horseData.name}</Text>
          <Btn buttonStyle={styles.buttonStyle3} buttonText={styles.buttonText} onPress={edit}>
            {<Ionicons style={{color: '#b9b9b9', fontSize: 30}} name="create-outline"></Ionicons>}
          </Btn>
        </View>
        <Text style={styles.smallText}>{horseData.info}</Text> 
        <Text style={styles.mediumText}>{i18n.t("Date_of_birth")}: {horseData.dob}</Text>
        <Text style={styles.mediumText}>{i18n.t("Price")}: ${horseData.price}</Text>
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <LinearGradient style={styles.buttonStyle2} colors={['rgba(177, 1, 1, 0.8)', 'black']}>
                <Btn buttonStyle={[styles.buttonStyle2, {margin: 0}]} buttonText={styles.buttonText2}>{i18n.t("Buy_Now")}</Btn>
            </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HourseScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 46,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: "#f7f5f541",
    borderRadius: 25,
  },
  buttonText: {
    color: "#d3d3d3b4",
    fontWeight: "bold",
    paddingVertical: 7,
  },
  viewStyle: {
    width: 340,
    height: 345,
    marginLeft: 28,
    marginBottom: 10,
    marginHorizontal: 12,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: '#000000a6'
  },
  cardTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingRight: 70,
    marginLeft: 30,
    marginTop: 20,
    fontSize: 23,
  },
  smallText: {
    color: '#ffffff',
    fontSize: 13,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 40
  },
  mediumText: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 30,
    marginTop: 16,
    marginBottom: 12,
  },
  buttonStyle2: {
    backgroundColor: "#f7f5f500",
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText2: {
    color: "#fdfbfbb4",
    fontWeight: "bold",
  },
  buttonStyle3: {
    backgroundColor: "hsla(0, 5%, 54%, 0)",
    borderRadius: 25,
    paddingVertical: 1,
    paddingHorizontal: 1,
    marginBottom: 20,
    marginTop: 20,
    elevation: 0,
  },
  buttonText3: {
    color: "#fdfbfbb4",
    fontWeight: "bold",
  },
});
