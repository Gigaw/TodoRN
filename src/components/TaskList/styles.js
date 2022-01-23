import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 280,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  addBtn: {
    marginLeft: "auto",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  taskText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    paddingHorizontal: 5
    // backgroundColor: 'gray',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    backgroundColor: "#fff",
    marginRight: 15
  },
  line: {
    width: '100%',
    height: 2,
    position: 'absolute',
    top: '50%',
    zIndex: 1   
  }
});
