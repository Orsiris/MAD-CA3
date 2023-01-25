import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalScreen from "./Modal";
import moment from "moment";
const Task = (props, { task }) => {
  const [isModalVisible, setModalVisible] = useState(false);
 
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const completeTask = (todoId) => {
    if (props.datetext == moment().format("DD MMM")) {
      setCheckboxState(!checkboxState);
      const filteredItem = props.todayTask.find((item) => item.id === todoId);
      const newTodosItem = props.todayTask.filter((item) => item.id !== todoId);
      props.setTodayTask(newTodosItem);

      const completedItem = {
        taskName: filteredItem.taskName,
        taskDescription: filteredItem.taskDescription,
        date: filteredItem.date,
        id: Math.random(),
      };
      console.log(completedItem);
      props.setCompletedTask([...props.completedTask, completedItem]);
    }
  };

  const deleteTodo = (todoId) => {
    if (props.datetext == moment().format("DD MMM")) {
      const newTodosItem = props.todayTask.filter((item) => item.id != todoId);
      props.setTodayTask(newTodosItem);
    } else if (props.datetext == moment().add(1, "days").format("DD MMM")) {
      const newTodosItem = props.tomorrowTask.filter(
        (item) => item.id != todoId
      );
      props.setTomorrowTask(newTodosItem);
    } else {
      const newTodosItem = props.upcomingTask.filter(
        (item) => item.id != todoId
      );
      props.setUpcomingTask(newTodosItem);
    }
  };

  return (
    <View style={styles.item}>
      <Text style={{ textAlign: "center" }}>{props.datetext}</Text>
      <View style={styles.task}>
        <BouncyCheckbox
          size={28}
          fillColor="#A4AEEA"
          unfillColor="#FFFFFF"
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{
            fontFamily: "sans-serif",
            color: checkboxState ? "#808486" : "#222B45",
            fontSize: 18,
          }}
          isChecked={props.checkboxState}
          onPress={() => completeTask(props.id)}
          text={props.text}
        ></BouncyCheckbox>
      </View>

      <View style={styles.button}>
        <Pressable onPress={toggleModal}>
          <MaterialCommunityIcons name="pencil" color={"#222B45"} size={25} />

          <ModalScreen
            title="Edit Task"
            isVisible={isModalVisible}
            onPress={toggleModal}
            dateText={"26 Dec 2022"}
          />
        </Pressable>
        <Pressable
          style={styles.secondButton}
          onPress={() => deleteTodo(props.id)}
        >
          <MaterialCommunityIcons name="delete" color={"#222B45"} size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A4AEEA",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 24,
    elevation: 3,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  task: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
  },

  secondButton: {
    marginLeft: 10,
  },

  tasktext: {
    marginLeft: 20,
  },
});
