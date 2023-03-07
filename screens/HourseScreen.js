import { StyleSheet, Text, View } from "react-native";
import Btn from "../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function HourseScreen( {onPress} ) {
    function Home() {
        onPress(0);
    }
  return (
    <ImageBackground
      source={require("../assets/images/Hourse3.jpg")}
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
        <Btn buttonStyle={styles.buttonStyle} buttonText={styles.buttonText}>
          {<Ionicons name="heart"></Ionicons>}
        </Btn>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.cardTitle}>Fusaichi Pegasus</Text>
        <Text style={styles.smallText}>Fusaichi Pegasus is Thoroughbred reachose that has earned the first spot on the list of the most expensive horses in the world.</Text>
        <Text style={styles.mediumText}>Date of birth: May 12th, 2015</Text>
        <Text style={styles.mediumText}>Price: $70 million</Text>
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <LinearGradient style={styles.buttonStyle2} colors={['rgba(177, 1, 1, 0.8)', 'black']}>
                <Btn buttonStyle={[styles.buttonStyle2, {margin: 0}]} buttonText={styles.buttonText2}>Buy Now</Btn>
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
    color: "#5a5a5ab4",
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
    paddingRight: 100,
    marginLeft: 30,
    marginTop: 50,
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
});
