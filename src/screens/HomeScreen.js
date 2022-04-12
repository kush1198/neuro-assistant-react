import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
export const CredentialsContext = React.createContext([{}, function(){}]);

const HomeScreen = ({ navigation }) => {
  const credentialsState = useState({username: "yolo", password:null});
  return (
    <View>
      <CredentialsContext.Provider value={credentialsState}>
        <Text style={styles.text}>Hi there!</Text>
        <Button
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"
        />
        <Button
          onPress={() => navigation.navigate('Counter')}
          title="Go to Counter"
        />
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
        <Button
          title="Go to Color Screen"
          onPress={() => navigation.navigate('Color')}
        />
        <Button
          title="Go to ToDo Screen"
          onPress={() => navigation.navigate('ToDo')}
        />
        <Button
          title="Go to Login Screen"
          onPress={() => navigation.navigate('Login')}
        />
      </CredentialsContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
