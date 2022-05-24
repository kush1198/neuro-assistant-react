import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../assets/colors/colors';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default TimePC = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text,setText] = useState('')

  const onChange = (event, value) => {
      const currDate = value || date
      setShow(true)
      setDate(currDate)
      let tempDate = new Date(currDate)
      let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear()
      let fTime = 'Hours: '+tempDate.getHours()+' | Minutes: '+tempDate.getMinutes()
      setText(fDate+'\n'+fTime)
  };

  const showMode = (currentMode) =>{
      setShow(true);
      setMode(currentMode);
  }

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{text}</Text>
      </View>
      <View style={{display:'flex', flex:1,flexDirection:'row'}}>
        <View style = {{margin:20}}>
            <Button title='Pick a Day' color='white' onPress={()=>showMode('date') }> </Button>
        </View>

        <View style = {{margin:20}}>
            <Button title='Pick a Time' color='white' onPress={()=>showMode('time')}> </Button>
        </View>
      </View>
      {/* The date picker */}
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: colors.NA_text_blue
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: colors.NA_L_blue,
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop:10
  },
});