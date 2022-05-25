import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ToDoScreen from './src/screens/ToDoScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import NeurosenseScreen from './src/screens/NeurosenseScreen';
import HandsScreen2 from './src/screens/neuroScreens/hands1';
import HandsScreen3 from './src/screens/neuroScreens/hands3';
import TimePC from './src/screens/TimePicker';
import MoodBoard from './src/screens/MoodBoard';
const Stack = createStackNavigator();

export default function Navigator() {
    return (
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            cardStyle: { backgroundColor: '#fff' }
          }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Screen' component={ComponentsScreen} />
            <Stack.Screen name='List' component={ListScreen} />
            <Stack.Screen name='Image' component={ImageScreen} />
            <Stack.Screen name='Counter' component={CounterScreen} />
            <Stack.Screen name='Color' component={ColorScreen} />
            <Stack.Screen name='ToDo' component={ToDoScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Neurosense' component={NeurosenseScreen} />
            <Stack.Screen name='Hands2' component={HandsScreen2} />
            <Stack.Screen name='Hands3' component={HandsScreen3} />
            <Stack.Screen name='timePick' component={TimePC} />
            <Stack.Screen name='moodBoard' component={MoodBoard} />
          </Stack.Navigator>
    );
  }