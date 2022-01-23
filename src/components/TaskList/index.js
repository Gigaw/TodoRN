import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import AppTitle from "../AppTitle";
import Task from "./Task";

import styles from "./styles";
import AddTaskIcon from './../../assets/svg/add-task.svg'

const mock = [];

for (let i = 0; i < 3; i++) {
  mock.push(
    {
      isChecked: true,
      name: "Learn Javascript by 11am",
    },
    {
      isChecked: false,
      name: "Have Lunch by 2pm",
    }
  );
}

export default TaskList = () => {
  const [list, setList] = useState(mock); 

  const handleItemPress = (item) => {
    const newList = [...list];
    item.isChecked = !item.isChecked
    setList(newList);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppTitle>Daily Tasks</AppTitle>
        <TouchableOpacity style={styles.addBtn}>
          <AddTaskIcon/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {list.map((el, index) => (
          <Task {...el} key={index} onPress={() => handleItemPress(el)} />
        ))}
      </ScrollView>
    </View>
  );
};
