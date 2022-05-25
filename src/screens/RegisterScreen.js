import React, { useEffect, useState, useContext } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CredentialsContext } from '../../tabNavigator';
import { MonthDateYearField } from 'react-native-datefield';
 import { auth,db } from '../../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { collection, doc, setDoc } from 'firebase/firestore';

export const handleErrors = async (response) => {
    if (!response.ok) {
      const { message } = await response.json();
      throw Error(message);
    }
    return response.json();
  };

const RegisterScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState("");
    const creds = useContext(CredentialsContext);

    const handleLogin = () => {
        console.log(username)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email, password).then((cred)=>{
            setDoc(doc(db, "users", cred.user.uid), {
                Name: username,
                Email: email,
                Password: password
            }).then(()=>{
                setUsername('');
                setEmail('');
                setPassword('');
                setError('');
                navigation.navigate('Login')
            })
          .catch((err) => {
            setError(err.message);
            console.log(Error)
          }).catch(err=>setError(err.message));
        });
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
        <View style={styles.inputContainer}>
            {error!=="" && <Text style={{ color: "red" }}>{error}</Text>}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Name"
                value={username}
                onChangeText={text => setUsername(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            <MonthDateYearField
                labelDate='Enter date'
                labelMonth='Enter month'
                labelYear='Enter year'
                containerStyle={styles.containerStyle}
                onSubmit={(value) => console.log('MonthDateYearField', value)}
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
};

export default RegisterScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
inputContainer: {
    width: '80%'
},
input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
},
buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
},containerStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
})