import React, {useState, useContext, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import ToDoTask from '../components/ToDoTask';
import { CredentialsContext } from '../../starter';
import DateTimePicker from '@react-native-community/datetimepicker';
import { v4 as uuidv4 } from "uuid";
import { auth,db } from '../../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, getDocs,query, orderBy , onSnapshot, addDoc,serverTimestamp,deleteDoc } from 'firebase/firestore';
// https://blog.bitsrc.io/build-a-todo-list-application-using-react-and-firebase-5ce2feba9489
const ToDoScreen = () => {
    const [task, setTask] = useState("");
    const [taskItems, setTaskItems] = useState([]);
    const [error, setError] = useState("");
    const creds = useContext(CredentialsContext);
    const q=query(collection(db,'todos of '+creds.username),orderBy('timestamp','desc'));

    // const persist = (newTodos) => {
    //   fetch(`http://192.168.0.13:4000/todos`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Basic ${creds.username}:${creds.password}`,
    //     },
    //     body: JSON.stringify(newTodos)
    //   }).then(() => {});
    // };

    // useEffect(() => {
    //   fetch(`http://192.168.0.13:4000/todos`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Basic ${creds.username}:${creds.password}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((todos) => {
    //       console.warn('in')
    //       setTaskItems(todos);
    //     });
    // }, []);
    // useEffect(() =>{
    //   const fetchData = async () =>{
    //     let allTodos = [];
    //     const querySnapshot = await getDocs(collection(db, 'todos of '+creds.username));
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //       allTodos.append(doc.data().Task)
    //     });
    //   }
    //   if(creds.username=='temp'){
    //     console.warn('please login')
    //   }else{
    //     fetchData().catch(console.error('sad'));
    //   }
    // },[])
    
    useEffect(() => {
      onSnapshot(q,(snapshot)=>{
        setTaskItems(snapshot.docs.map(doc=>({
          id: doc.id,
          item: doc.data().Task
          })))
      })
    },[task]);

    const addTodo = () => {
      Keyboard.dismiss();
      if(creds.username=='temp'){
        console.warn('please login')
      }else{
        addDoc(collection(db,'todos of '+creds.username),{
          Task:task,
          timestamp: serverTimestamp()
        })
        setTask('')
      } 
    }

    // const handleAddTask = () => {
    //   Keyboard.dismiss();
    //   const newTodo = { id: uuidv4(), text: task };
    //   setTaskItems([...taskItems, newTodo])
    //   setTask("");
    //   persist(taskItems);
    // }
  
    // const completeTask = (index) => {
    //   let itemsCopy = taskItems.filter(task => task.id != index);
    //   setTaskItems(itemsCopy)
    //   persist(taskItems);
    // }
  
    return (
      <View style={styles.container}>
        {/* Added this scroll view to enable scrolling when list gets longer than the page */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
  
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks for {creds.username} with password: {creds.password}</Text>
          <View style={styles.items}>
            {
              taskItems.map((todo) => {
                return (
                  <TouchableOpacity key={todo.id}  onPress={() => deleteDoc(doc(db,'todos of '+creds.username,todo.id))}>
                    <ToDoTask key={todo.id} arr={todo} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
          
        </ScrollView>
  
        {/* Write a task */}
        {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => addTodo()}>
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
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
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


export default ToDoScreen;
