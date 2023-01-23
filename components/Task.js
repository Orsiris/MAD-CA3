import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalScreen from "./Modal";
const Task = (props) => {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.item}>

      <Text style={{ textAlign: 'center' }}>{"26\nDec"}</Text>
      <View style={styles.task}>
        <BouncyCheckbox
          size={28}
          fillColor="#A4AEEA"
          unfillColor="#FFFFFF"
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "sans-serif", color: checkboxState ? "#808486" : "#222B45", fontSize: 17 }}
          isChecked={checkboxState}
          onPress={() => setCheckboxState(!checkboxState)}
          text={props.text}>

        </BouncyCheckbox>
      </View>

      <View style={styles.button}>
        <Pressable onPress={toggleModal}>
          <MaterialCommunityIcons name="pencil" color={'#222B45'} size={25} />

          <ModalScreen title="Edit Task" isVisible={isModalVisible} onPress={toggleModal} dateText={"26 Dec 2022"} />

        </Pressable >
        <Pressable style={styles.secondButton}>
          <MaterialCommunityIcons name="delete" color={'#222B45'} size={25} />
        </Pressable>

      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A4AEEA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
    elevation: 3
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },

  task: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20
  },

  secondButton: {
    marginLeft: 10
  }
});