import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'

function Input(props) {
  const [name, setName] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const handleReset = () => {
    setName('');
    setMessage('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputName}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name (optional)"
      />

      <TextInput
        style={styles.inputMsg}
        onChangeText={(text) => setMessage(text)}
        value={message}
        placeholder="Message..."
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>RESET</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpace} />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => console.log('submit button pressed')}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const FeedbackStackNavigator = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Input />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default FeedbackStackNavigator

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
  },

  header: {
    backgroundColor: '#5C71E6',
    height: 110
  },

  inputName: {
    height: 50,
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: '#777',
    width: 350,
    borderRadius: 7,
  },

  inputMsg: {
    height: 250,
    margin: 50,
    borderWidth: 2,
    padding: 10,
    borderColor: '#777',
    width: 350,
    borderRadius: 7,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '83%',
    marginRight:24,
  },

  submitButton: {
    backgroundColor: '#5c71e6',
    paddingVertical: 10,
    paddingHorizontal: 18,
    height: 40,
    borderRadius: 7,
    marginLeft: 10,
  },

  resetButton: {
    backgroundColor: '#5c71e6',
    paddingVertical: 10,
    paddingHorizontal: 18,
    height: 40,
    borderRadius: 7,
    marginRight: 10,
  },

  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

})