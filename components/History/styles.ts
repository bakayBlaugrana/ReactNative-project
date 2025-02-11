import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 20,
  },
  card: {
    width: "95%",
    marginHorizontal: "auto",
    borderRadius: 25,
    overflow: "hidden",
  },
  background: {},
  overlay: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Полупрозрачный чёрный слой
  },
  data: {
    fontSize: 18,
    color: "white",
  },
  location: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 35,
    letterSpacing: 2,
    color: "white",
  },
});
