import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  },
  buttonText: {
    paddingVertical: "5%",
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});

export const NavigationButtons = () => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>Создать</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>История</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>
    </>
  );
};
