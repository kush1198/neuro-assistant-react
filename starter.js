import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/LoginScreen";
import MainContainer from "./tabNavigator";
import { createStackNavigator } from '@react-navigation/stack'

const RootStack = createStackNavigator();
export const CredentialsContext = React.createContext();

const Starter = () => {
    const [user, setUser] = useState('temp');
    const [pass, setPass] = useState('temp');
    const users = {'username': user, 'setterU': setUser, 'password':pass,'setterP':setPass}
    return (
        <CredentialsContext.Provider value={users}>
            <NavigationContainer>
                <RootStack.Navigator
                screenOptions={{ headerShown: false }}
                >
                {user!='temp' ? (
                    <RootStack.Screen
                    name="RootTab"
                    component={MainContainer}
                    />
                ) : (
                    <RootStack.Screen name="Login" component={LoginScreen} />
                )}
                </RootStack.Navigator>
            </NavigationContainer>
        </CredentialsContext.Provider>
      );
};

export default Starter;
