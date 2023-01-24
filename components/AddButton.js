import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Modal from "react-native-modal";
import AddTaskModalButtons from "./AddTaskModalButtons";
import { TextInput } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const AddButton = ({
  setTodayTask,
  todayTask,
  setTomorrowTask,
  tomorrowTask,
  setUpcomingTask,
  upcomingTask
}) => {
  
  const [text, onChangeText] = React.useState("");
  const [descriptionText, onChangeDescriptionText] = React.useState("");
  const [date, setDate] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCalendar, setCalendarVisible] = useState(false);

  function DatePicker({ visible, onDateSelected }) {
    return (
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.overlay}>
          <Calendar onDayPress={onDateSelected} />
        </View>
      </Modal>
    );
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const storeData = async (taskName, taskDescription) => {
  //   try {

  //     await AsyncStorage.setItem("taskName", taskName);
  //     await AsyncStorage.setItem("taskDescription", taskDescription);
  //     setModalVisible(!isModalVisible);
  //   } catch (e) {
  //     console.log("Error saving data", e);
  //   }
  // };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendar);
  };

  const addDate = (day) => {
    var date = moment(day).date();
    var month = moment(day).month() - 1;
    var year = moment(day).year();
    setDate(moment([year, month, date]).format("DD MMM"));

    setCalendarVisible(!isCalendar);
  };

  const addTodo = () => {
    const addToday = moment().format("DD MMM");
    const addTomorrow = moment().add(1, "days").format("DD MMM");

    if (addToday === date) {
      const newTodo = {
        taskName: text,
        taskDescription: descriptionText,
        date: date,
        id: Math.random(),
      };
      setTodayTask([...todayTask, newTodo]);
      // setTextInput('');
      setModalVisible(!isModalVisible);
    } else if (addTomorrow === date) {
      const newTodo = {
        taskName: text,
        taskDescription: descriptionText,
        date: date,
        id: Math.random(),
      };
      setTomorrowTask([...tomorrowTask, newTodo]);
      // setTextInput('');
      setModalVisible(!isModalVisible);
    }

    else{
      const newTodo = {
        taskName: text,
        taskDescription: descriptionText,
        date: date,
        id: Math.random(),
      };
      setUpcomingTask([...upcomingTask, newTodo]);
      // setTextInput('');
      setModalVisible(!isModalVisible);
    }
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#5C82B8" : "#6E9CDB",
          },
          styles.button,
        ]}
        onPress={toggleModal}
      >
        <MaterialCommunityIcons name="plus" color={"#F8F8F8"} size={25} />
      </Pressable>

      <Modal isVisible={isModalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <Text style={styles.addTaskTitle}>Add Task</Text>
              </View>
              <View style={styles.inputSection}>
                <TextInput
                  mode="outlined"
                  textColor="rgba(0, 0, 0, 0.6)"
                  theme={{
                    colors: {
                      background: "white",
                      onSurfaceVariant: "rgba(0, 0, 0, 0.6)",
                    },
                  }}
                  outlineStyle={{ borderRadius: 8 }}
                  outlineColor="#A4AEEA"
                  activeOutlineColor="#A4AEEA"
                  placeholder="Enter Task Name..."
                  value={text}
                  onChangeText={onChangeText}
                />

                <TextInput
                  mode="outlined"
                  textColor="rgba(0, 0, 0, 0.6)"
                  theme={{
                    colors: {
                      background: "white",
                      onSurfaceVariant: "rgba(0, 0, 0, 0.6)",
                    },
                  }}
                  style={{ marginTop: 14 }}
                  multiline={true}
                  numberOfLines={8}
                  outlineStyle={{ borderRadius: 8 }}
                  outlineColor="#A4AEEA"
                  activeOutlineColor="#A4AEEA"
                  placeholder="Enter Task Description (Optional)"
                  value={descriptionText}
                  onChangeText={onChangeDescriptionText}
                />

                <View style={styles.dateButton}>
                  <Pressable onPress={toggleCalendar}>
                    <Text style={styles.dateText}>Select Date</Text>
                    <DatePicker
                      visible={isCalendar}
                      onDateSelected={(day) => addDate(day)}
                    />
                  </Pressable>
                </View>
              </View>

              <View style={styles.buttonSection}>
                <AddTaskModalButtons
                  style={{
                    marginRight: 20,
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                  onPress={toggleModal}
                  Text={"Cancel"}
                />
                <AddTaskModalButtons onPress={() => addTodo()} Text={"Done"} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    right: 15,
    elevation: 7,
  },
  modal: {
    height: "auto",
    width: 350,

    backgroundColor: "white",

    alignSelf: "center",
    borderRadius: 10,
  },

  modalHeader: {
    backgroundColor: "#5C71E6",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addTaskTitle: {
    fontSize: 30,
    color: "white",
  },

  buttonSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttons: {
    marginRight: 20,
  },

  dateButton: {
    alignSelf: "flex-start",
    justifyContent: "center",
    height: 40,
    borderRadius: 13,
    paddingHorizontal: 10,
    backgroundColor: "#5C71E6",
    marginTop: 20,
  },

  dateText: {
    color: "white",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  inputSection: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
