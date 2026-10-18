import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital ID Card</Text>

      <Image
        source={require("../../../assets/images/user.png")}
        style={styles.image}
      />

      <Text style={styles.text}>Name: Thathsarani Kotinkaduwa</Text>
      <Text style={styles.text}>Student ID: PS/2022/234</Text>
      <Text style={styles.text}>Course: Mobile Application Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 30,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
});