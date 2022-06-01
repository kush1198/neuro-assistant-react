import React, {useEffect, useState, memo, useContext} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { getCalendarDateString, getDefaultLocale } from 'react-native-calendars/src/services';
import { collection, getDocs,query, orderBy } from 'firebase/firestore';
import { CredentialsContext } from '../../starter';
import { auth,db } from '../../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import moodData from '../assets/data/moodOptions';


const RANGE = undefined;
const initialDate = Date();

const CalendarComponent = () => {

  const [selected, setSelected] = useState(initialDate);
  // const [mood, setMood] = useState("");
  const [markedDates, setMarkedDates] = useState({[selected]: {
    selected: true,
    disableTouchEvent: false,
    selectedTextColor: 'white',
    // selectedColor: '#5390D9'
  }}); 
  const [items, setItems] = useState<{[key: string]: string}>({"":""});
  const creds = useContext(CredentialsContext);
  const now = new Date();
  const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const todayParsed = todayUTC.toISOString().slice(0,10);
  const q=query(collection(db,'moods of '+creds.username),orderBy('date','desc'));


  const getData = async () => {
      const querySnapshot = await getDocs(q);
      
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      
      const newMarkedDate = (key, value) => {
        const moodColor = {
          "angry" : '#FF5C5C',
          "sad" : '#FF975C',
          "anxious": '#C7ACFF',
          "normal": '#FFE55C',
          "good": '#B7FF5C',
          "great": '#68ED5D'
        }
        const tempNewMarkedDate = {
          [key]: {customStyles: {
                  container: {
                    backgroundColor: moodColor[value],
                  },
                  text: {
                    color: 'black',
                  }
                  }
                }
        }
        return tempNewMarkedDate;
    }
    console.log("------------ ITEMS ------------");
    console.log(items);
    querySnapshot.forEach((doc) => {

      if (!(doc.data().date in markedDates)) {
        Object.assign(markedDates, newMarkedDate(doc.data().date,doc.data().mood));
      }
      
    })
    console.log("-----------MARKED DATES-----------");
    console.log(markedDates);
    console.log("------------------ DONE LOADING ----------------\n\n");
  };
  
  useEffect(() => {
    getData();
    
  }, []);

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  // getData();

  return (
    <CalendarList
      markingType={'custom'}
      horizontal={true}
      pagingEnabled={true}
      hideArrows={false}
      current={initialDate}
      pastScrollRange={RANGE}
      futureScrollRange={RANGE}
      onDayPress={onDayPress}
      markedDates={markedDates}
      // displayLoadingIndicator={true}
      // onVisibleMonthsChange={month => {
      //   getData(); // THIS DOESNT UTILIZE USEEFFECTS, SO THATS PROBWHY ONLY MOUNTING COMPONENT CHANGES IT
      // }}
    />
  );
};


const theme = {
  'stylesheet.calendar.header': {
    dayHeader: {
      fontWeight: '600',
      color: '#48BFE3'
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.8
    },
    todayText: {
      color: '#5390D9',
      fontWeight: '800'
    }
  }
};



export default CalendarComponent;


