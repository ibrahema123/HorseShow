import { Ionicons } from "@expo/vector-icons";
import HorseComp from "../Entities/HorseComp";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Btn from "../components/Btn";


function MainScreen({ horseArray, changeScreen, horseData, horseIndex }) {
  function changeHorseScreen(screen) {
    changeScreen(screen);
  }
  return (
    <View style={{flex: 1}}>
      <View style={{ backgroundColor: "#fff5f5" }}>
        <View style={styles.container}>
          <View style={[styles.container, styles.underLine]}>
            <Ionicons style={styles.icon} name="apps"></Ionicons>
            <Text style={styles.title}>Horse show</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePhoto}
                source={require("../assets/images/Profile.jpg")}
              />
            </View>
          </View>
        </View>
        <View style={styles.addHorseContainer}>
          <Text style={styles.addHorseText}>Your Horse</Text>
          <LinearGradient
            style={styles.addHorseBtnGrid}
            colors={["rgba(177, 1, 1, 0.8)", "black"]}
          >
            <Btn buttonStyle={styles.addHorseBtn} onPress={changeHorseScreen.bind(this, 'addHorseScreen')}>Add New</Btn>
          </LinearGradient>
        </View>
      </View>
      <FlatList
          style={styles.flatList}
          data={horseArray}
          renderItem={(itemData) => {
            return (
              <View style={[styles.container, { flex: 3 }]}>
                <HorseComp horse={itemData.item} changeScreen={changeScreen} horseData={horseData} setHorseIndex={horseIndex} horseIndex={itemData.index}/>
              </View>
            );
          }}
          keyExtractor={(item) => item.name+Math.random().toString()}
        />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff5f5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 5
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
  addHorseContainer: {
    margin: 30,
    flexDirection: "row",
  },
  addHorseText: {
    color: "#600000",
    fontSize: 20,
    fontWeight: "bold",
  },
  addHorseBtn: {
    borderRadius: 10,
    backgroundColor: "#00000000",
    elevation: 0,
    margin: 0,
    paddingVertical: 3,
    paddingHorizontal: 20,
  },
  addHorseBtnGrid: {
    borderRadius: 10,
    elevation: 4,
    marginLeft: 130,
  },
  flatList: {
    marginVertical: 10,
  }
});
