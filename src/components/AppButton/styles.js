import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: "#FFD615",
    borderRadius: 10,
    padding: 20,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 33,
    color: "#030303",
  },
});
