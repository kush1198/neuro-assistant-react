import { NavigationContainer } from '@react-navigation/native'
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
const Stack = createStackNavigator();

export default function Navigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Screen' component={ComponentsScreen} />
          <Stack.Screen name='List' component={ListScreen} />
          <Stack.Screen name='Image' component={ImageScreen} />
          <Stack.Screen name='Counter' component={CounterScreen} />
          <Stack.Screen name='Color' component={ColorScreen} />
          <Stack.Screen name='ToDo' component={ToDoScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }