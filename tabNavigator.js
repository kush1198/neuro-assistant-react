import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Icon, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native-web';
import AddMoodButton from './src/components/AnimatedButton';

// read : https://ibjects.medium.com/the-simplest-implementation-of-context-api-in-react-native-94f749187873
// Screens
import Navigator from './route';
import TodoScreen from './src/screens/ToDoScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import colors from './src/assets/colors/colors';

//Screen names
const homeName = "Home";
const todosName = "Todo";
const registerName = "Register";

const Tab = createBottomTabNavigator();

function MainContainer() {

    return (
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === todosName) {
                        iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === registerName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    })}
                    tabBarOptions={{
                    activeTintColor: colors.NA_text_blue,
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70},
                    }}
                    options={{ headerShown: false }}>
                    
                    <Tab.Screen 
                        name={homeName}
                        component={Navigator} 
                    />
                    {/* <Tab.Screen 
                        name = "Button" 
                        component={Navigator} 
                        options={{
                        tabBarButton:()=>
                        <View style={{position:'relative',bottom:35,alignItems:'center', justifyContent:'space-around',height:85}}>
                        <Icon 
                            name="barcode-scan"
                            type = "material-community" 
                            reverse
                            color={'yellow'}
                            reverseColor='black'
                            containerStyle={{padding:0,margin:0,elevation:5}}
                            onPress={()=>console.log('Hi')}
                            size={30}/>
                        <Text>Scan</Text>
                        </View>
                    }}/> */}
                    <Tab.Screen name={todosName} component={TodoScreen} />

                    <Tab.Screen 
                        name={registerName}
                        component={RegisterScreen}
                    />

                </Tab.Navigator>
    );
}

export default MainContainer;