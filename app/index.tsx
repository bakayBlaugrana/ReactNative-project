import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});

export default function Index() {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>Создать</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>История</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}
