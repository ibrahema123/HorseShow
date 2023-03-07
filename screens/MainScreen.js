import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Btn from "../components/Btn";

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

function MainScreen({ onPress }) {
  function changeScreen() {
    onPress(1);
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#fff5f5" }}>
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
        <View style={[styles.container, { flex: 3 }]}>
          <Card imageSorce={require("../assets/images/Hourse1.jpg")}>
            <View style={styles.cardContainer}>
              <View>
                <Text style={styles.cardTitle}>Fusaichi Pegasus</Text>
                <Text style={styles.cardPrice}>$70 milleon</Text>
              </View>
              <Btn
                buttonText={styles.buttonText}
                buttonStyle={styles.buttonStyle}
                onPress={changeScreen}
              >
                {<Ionicons name="arrow-forward"></Ionicons>}
              </Btn>
            </View>
          </Card>
        </View>
        <View style={[styles.container, { flex: 3 }]}>
          <Card imageSorce={require("../assets/images/Hourse2.jpg")}>
            <View style={styles.cardContainer}>
              <View>
                <Text style={styles.cardTitle}>Shareef Dancer</Text>
                <Text style={styles.cardPrice}>$40 milleon</Text>
              </View>
              <Btn
                buttonText={styles.buttonText}
                buttonStyle={styles.buttonStyle}
              >
                {<Ionicons name="arrow-forward"></Ionicons>}
              </Btn>
            </View>
          </Card>
        </View>
        <View style={[styles.container, { flex: 3 }]}>
          <Card imageSorce={require("../assets/images/Hourse3.jpg")}>
            <View style={styles.cardContainer}>
              <View>
                <Text style={styles.cardTitle}>Annihilator</Text>
                <Text style={styles.cardPrice}>$19 milleon</Text>
              </View>
              <Btn
                buttonText={styles.buttonText}
                buttonStyle={styles.buttonStyle}
              >
                {<Ionicons name="arrow-forward"></Ionicons>}
              </Btn>
            </View>
          </Card>
        </View>
      </View>
      <View style={[styles.container, { flex: 3, marginBottom: 20 }]}>
        <Card imageSorce={require("../assets/images/Hourse4.jpg")}>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.cardTitle}>the Green Monkey</Text>
              <Text style={styles.cardPrice}>$16 milleon</Text>
            </View>
            <Btn
              buttonText={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            >
              {<Ionicons name="arrow-forward"></Ionicons>}
            </Btn>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

export default MainScreen;

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
});
