import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  textContainer: {
    width: "69.3%",
    marginBottom: 65,
  },
  title: {
    marginBottom: 15,
  },
  button: {
    width: "100%",
    marginBottom: 25,
  },
  content: {
    alignItems: "center",
    marginBottom: 25,
    // backgroundColor: 'yellow',
    width: "82.4%",
  },
  inputsContainer: {
    width: "100%",
    height: 275,
    justifyContent: "space-between",
    marginBottom: 25,
  },
  alternativeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alternativeText: {
    fontSize: 14,
    lineHeight: 21,
  },
  alternativeTextStrong: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '800',
    color: '#FFD615'
  }
});
