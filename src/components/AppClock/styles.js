import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  clock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  timeBlock: {
    width: 75,
    height: 70,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    backgroundColor: "#FAE68C",
    alignItems: "center",
    justifyContent: "center",
  },
  timeBlockBottomBackground: {
    backgroundColor: "#FEE15B",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: "50%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  number: {
    fontWeight: "700",
    fontSize: 64,
  },
  timeSeparator: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 64,
    lineHeight: 64,
    marginHorizontal: 5,
  },
});
