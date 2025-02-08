import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});

const NavigationButtons = ({ buttonsData, onPress }) => {
  return (
    <>
      {buttonsData.map((button) => (
        <TouchableOpacity key={button.type} style={styles.button} onPress={() => onPress(button.type)}>
          <Text style={styles.buttonText}>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default NavigationButtons;
