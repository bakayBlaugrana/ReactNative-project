import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

export default styles;
