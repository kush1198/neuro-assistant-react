import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import ToDoScreen from './src/screens/ToDoScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import NeurosenseScreen from './src/screens/NeurosenseScreen';
import HandsScreen2 from './src/screens/neuroScreens/hands2';
import HandsScreen3 from './src/screens/neuroScreens/hands3';
import TimePC from './src/screens/TimePicker';
import MoodBoard from './src/screens/MoodBoard';
import AddMoodScreen from './src/screens/AddMoodScreen';
import MoodTextInputScreen from './src/screens/MoodTextInputScreen';
import HandsScreen1 from './src/screens/neuroScreens/hands1';
import HandsScreen4 from './src/screens/neuroScreens/hands4';
import HandsScreen5 from './src/screens/neuroScreens/hands5';
import GraphScreen from './src/screens/GraphScreen';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            cardStyle: { backgroundColor: '#fff' }
          }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='ToDo' component={ToDoScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Neurosense' component={NeurosenseScreen} />
            <Stack.Screen name='Hands2' component={HandsScreen2} />
            <Stack.Screen name='Hands3' component={HandsScreen3} />
            <Stack.Screen name='timePick' component={TimePC} />
            <Stack.Screen name='moodBoard' component={MoodBoard} />
            <Stack.Screen name='MoodRegister1' component={AddMoodScreen}/>
            <Stack.Screen name='MoodRegister2' component={MoodTextInputScreen}/>
            <Stack.Screen name='Hands1' component={HandsScreen1}/>
            <Stack.Screen name='Hands4' component={HandsScreen4}/>
            <Stack.Screen name='Hands5' component={HandsScreen5}/>
            <Stack.Screen name='GraphScreen' component={GraphScreen}/>
          </Stack.Navigator>
    );
  }