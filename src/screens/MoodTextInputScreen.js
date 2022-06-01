import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet,ScrollView, Image, Animated , TextInput, Modal, Pressable} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth,db } from '../../Firebase/firebase';
import { CredentialsContext } from '../../starter';
import { v4 as uuidv4 } from "uuid";
import { collection, exists,doc, setDoc, getDocs,query, orderBy ,where, onSnapshot, addDoc,serverTimestamp,deleteDoc } from 'firebase/firestore';


const MoodTextInputScreen = ({navigation}) => {
    const [text, onChangeText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const now = new Date();
    const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const creds = useContext(CredentialsContext);
    const q= query(collection(db,'moods of '+creds.username), where("date", "==", todayUTC.toISOString().slice(0,10)));

    async function onSubmit(e) {
        // e.preventDefault();
        if(creds.username=='temp'){
          console.warn('please login')
        }else{
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
            querySnapshot.forEach((doc) => {

                setDoc(doc.ref,{moodText: text},{merge:true})
            })
        }
        navigation.navigate('Home')
        }
    }


    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'
            ><SafeAreaView style={[styles.background,{flex: 1}]}>
            <Text style={styles.question}>Could you provide more information about how you feel?</Text>
            
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Write about your emotions, feelings. It is quite normal to feel multiple emotions!"
                    keyboardType="default"
                    multiline={true}
                    placeholderTextColor='#2588b2'
                    maxLength={150}
                />
            
            <Text style={styles.wordcount} >{text.length}/150 characters</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>We use this data to provide textual and detailed information about your mood to give individualized recommendations to assist you!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.modalTextInside}>Hide</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <View style={{flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
                    <View style={[styles.info, {flexDirection:"row", alignItems: "center", justifyContent: "center"}]}><Text style={[styles.i]}>i</Text></View>
                    <Text style={[styles.textStyle,{flex:7}]}>What Do We Use This Information For?</Text>
                </View>
            </Pressable>

            <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
                <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
    ); 
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  i: {
    flex:1, 
    textAlign: "center", 
    color:'white', 
    fontWeight: "bold",
    fontSize: 25
  },
  info: {
    backgroundColor: '#2588b2',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  background: {
    backgroundColor: 'white'
  },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.75,
    shadowRadius: 40,
    elevation: 5
  },  
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "#2588b2",
  },
  textStyle: {
    color: "#2588b2",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 21,
    paddingLeft: 15
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20
  },
  modalTextInside: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20
  },
  wordcount: {
    color: '#2588b2',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 20,
    // paddingBottom: 50
  },
  question: {
    color: '#2588b2',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    paddingBottom: 0,
    margin: 20
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    // height: 90,
    paddingHorizontal: 5,
    backgroundColor: '#2588b2',
    margin: 20
  },
  input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    textAlign: "left",
    fontSize: 20,
    margin: 20,
  },
  buttonText: {
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
  }
});

export default MoodTextInputScreen;