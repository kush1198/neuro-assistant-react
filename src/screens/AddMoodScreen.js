import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CredentialsContext } from "../../starter";
import { auth,db } from '../../Firebase/firebase';
import { collection, setDoc, getDocs,query, addDoc ,where,orderBy, limit} from 'firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
import { useFireStore } from "../../Helper";
const AddMoodScreen = ({ navigation }) => {
    const [moodValue, setMoodValue] = useState(""); 
    const now = new Date();
    const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const todayParsed = todayUTC.toISOString().slice(0,10);
    const [date, setDate] = useState(todayParsed);
    const [error, setError] = useState("");
    const creds = useContext(CredentialsContext);
    const q= query(collection(db,'moods of '+creds.username), where("date", "==", todayUTC.toISOString().slice(0,10)));
    let moodAverage = 0
    const mappings = {
        'angry':0,
        'sad':1,
        'anxious':2,
        'normal':3,
        'good':4,
        'great':5
    }
    async function calcValue(){
        if(creds.username=='temp'){
            console.warn('please login')
          }else{
            const q = query(collection(db, "moods of "+creds.username), orderBy("date","asc"), limit(6));
            const querySnapshot = await getDocs(q);
            let temp = []
            let i=0
            let curr = 0.2
            let out = 0;
            querySnapshot.forEach((doc) => {
                if(i==2||i==3) curr = 0.1
                if(i==4||i==5) curr = 0.05 
                out += curr*mappings[doc.data().mood]
            });
            return out*(3/5)
          }
    }
    async function onSubmit(e) {
      if(creds.username=='temp'){
        console.warn('please login')
      }else{
        setMoodValue(e);
        const querySnapshot = await getDocs(q);
        if(querySnapshot.empty){
            addDoc(collection(db, 'moods of '+creds.username),{
                date:todayParsed,
                mood:e
            })
        }else{
            querySnapshot.forEach((doc) => {
                setDoc(doc.ref,{
                    date: todayParsed,
                    mood:e
                })
            })
        }
        moodAverage = 0.3*mappings[e] + await calcValue()
        console.log(moodAverage)
        navigation.navigate('MoodRegister2')
        const userRef = query(collection(db, 'users'),where("Email","==",creds.username));
        const userDocs = await getDocs(userRef);
        userDocs.forEach((doc)=>{
            setDoc(doc.ref, { averageMood: moodAverage }, { merge: true });
        })
        }
    }

     return (
        <SafeAreaView style={[styles.background,{flex: 1}]}>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
                <View style={styles.background}>

                    <Text style={styles.question}>How are you feeling today?</Text>
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("angry");
                        //console.log(dataM)
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/SadMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:27}]}>Angry/Frustrated/Irritated</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("sad");
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/WorriedMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:27}]}>Worried/sad</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("anxious");
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/AnxiousMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:16}]}>Anxious/Confused/Feeling Guilty</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("normal");
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/NormalMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:27}]}>Apathetic</Text>
                    </View>
                    
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("good");
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/GoodMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:27}]}>Happy/Calm</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => {
                        onSubmit("great");
                    }}>
                    <View style={[styles.button, {flexDirection:'row'}]}>
                        <Image style={[styles.image,{flex:2}]} resizeMode='contain' source={require("../../assets/GreatMood.png")}/>
                        <Text style={[styles.buttonText,{flex:7}, {paddingTop:27}]}>Energetic/Enthusiastic</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    ); 
    
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  background: {
    backgroundColor: 'white'
  },    
  image: {
    alignItems: "center",
    width: 15
  },
  question: {
    color: '#2588b2',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 30
  },
  button: {
    borderRadius: 8,
    paddingVertical: 0,
    // height: 90,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    margin: 10
  },
  space: {
      width:10,
      height: 10
  },
  buttonText: {
    color:'#2588b2',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
  },
  menu: {
      backgroundColor: "#F02A4B"
  },
  secondary: {
      width: 48,
      height: 48,
      borderRadius: 48/2,
      // backgroundColor: "#FFF"
  }
});

export default AddMoodScreen;