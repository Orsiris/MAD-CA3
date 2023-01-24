import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const SettingStackNavigator = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Text style={styles.NotiSubHeader}>Notifications </Text>
      <View style={styles.lineBreak} />
      <View style={styles.subContainer}>
        <Text style={styles.SubheaderText}>{'Mobile Push Notifications'} </Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Text style={styles.subText}>
        {
          'Receive your push notifications on events and deadlines via your mobile app'
        }
      </Text>
      <View style={styles.lineBreakMargin} />
      <Text style={styles.SubheaderText}>Appearance </Text>
      <Text style={styles.subText}>
        {'Customise how To-do List looks on your device'}
      </Text>
      <View style={styles.Picker}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Use System Settings" value="Use System Settings" />
          <Picker.Item label="Dark Mode" value="Dark Mode" />
          <Picker.Item label="Light Mode" value="Light Mode" />
        </Picker>
      </View>
      <View style={styles.lineBreak} />
      <Text style={styles.SubheaderText}>Reset </Text>
      <Text style={styles.subText}>
        {'Remove and clear all tasks application'}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={() => { console.log('reset to-do list') }}>
          <Text style={styles.resetButtonText}>Reset To-do List</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SettingStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SubheaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 30,
    paddingLeft: 10,
    marginBottom: 10,
  },
  NotiSubHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 30,
    paddingLeft: 10,
    marginBottom: 25,
  },
  subText: {
    fontSize: 15,
    padding: 0,
    width: 400,
    paddingHorizontal: 40,
    paddingTop: 0,
  },
  switchContainer: {
    paddingLeft: 0,
    marginTop: 18,
  },
  lineBreak: {
    width: '85%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#5C71E6',
    height: 110,
  },
  lineBreakMargin: {
    width: '85%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 30,
  },
  Picker: {
    paddingHorizontal: 33
  },
  resetButton: {
    backgroundColor: '#f40000',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 40
  },
  resetButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'flex-start',
  },

});
