import React, { useState } from "react";
import { StyleSheet, Pressable, } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalScreen from "./Modal";

const AddButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#5C82B8' : '#6E9CDB',
      },
      styles.button,
    ]}
      onPress={toggleModal}
    >
      <MaterialCommunityIcons name="plus" color={'#F8F8F8'} size={25} />

      <ModalScreen title="Add Task" isVisible={isModalVisible} onPress={toggleModal} dateText={"Select Date"} />

    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    elevation: 7
  }
});