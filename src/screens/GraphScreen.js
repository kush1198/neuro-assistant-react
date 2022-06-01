import React, {useState, useContext, useEffect, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView  } from 'react-native';
import {
  LineChart
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native';
import { db } from '../../Firebase/firebase';
import { collection, doc, setDoc, getDocs,query, orderBy , onSnapshot, addDoc,serverTimestamp,deleteDoc, querySnapshot } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const GraphScreen = ({navigation}) => { 
   const [graphItems, setgraphItems] = useState([]);
   const [dateItems, setdateItems] = useState([]);
   const [level, setLevel] = useState("");
  const q=query(collection(db,"bloodsugar"),orderBy("timestamp","asc"));

onSnapshot(q, (querySnapshot) => {
 let lvlArray = [];
  let dateArray = [];
    querySnapshot.docs.map((doc) => {
        lvlArray.push(+doc.data().bloodsug);
        var time = doc.data().timestamp.toDate();
        var hour = time.getHours();
        var suffix = hour >= 12 ? "PM":"AM";
        var hours = ((hour + 11) % 12 + 1) + suffix
        if(querySnapshot.createdAt) {
        dateArray.push(hours);
        }
    });

  setdateItems([...dateArray]);
  
    setgraphItems([...lvlArray]);
       

});

const addLevel = () => {
Keyboard.dismiss();
addDoc(collection(db, "bloodsugar"),{
  bloodsug: Number(level),
  timestamp: serverTimestamp()
})
setLevel('')
}

if (graphItems.length === 0) {
  return (
    <View style={styles.screen}>
      <Text>No chart data to display!</Text>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text>Blood Sugar Levels</Text>
      <StatusBar style="auto" />
      <LineChart
    data={
      {labels: dateItems.map((item) => {
        return item;
     }),
        datasets: [
          {
            data: graphItems.map((item) => {
               return item;
            })
            // data: [1,2,3,4,5,6],
          },
        ],
      }
    }
    width={Dimensions.get('window').width} // from react-native
    height={300}
    yAxisLabel={''}
    yAxisSuffix={'mm/L'}
    chartConfig={{
      backgroundColor: '#E8EAED',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(85, 188, 246, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

<KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={styles.writeWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a level'} value={level} onChangeText={text => setLevel(text)} />
          <TouchableOpacity onPress={() => addLevel()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );

};
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      alignItems: 'center',
      justifyContent: 'center',
    },
    writeWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });

export default GraphScreen; 