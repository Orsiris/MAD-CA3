
// Wong Wei Jun Daniel
// P2243564
// DIT/1B/02

import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import Task from './Task';
moment().format();

function CalendarPicker(props) {
  const initDate = '2022-12-26';
  const [selected, setSelected] = useState(initDate);
  const marked = useMemo(() => ({
    '2022-12-26': { marked: true, dotColor: '#5C71E6' },
    [selected]: {
      selected: true,
      selectedColor: '#5C71E6',
      selectedTextColor: 'white',

    },
  }), [selected,]);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected="2022-12-01"
        items={{
          '2022-12-26': [{ name: 'Cycling' }],

        }}
        renderItem={() => (
          <View style={styles.item}>
            <Task text={"Do Homework"} />
            <Task text={"Go to School"} />
            <Task text={"Meet with your mom"} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}


export default CalendarPicker
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {

    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});
