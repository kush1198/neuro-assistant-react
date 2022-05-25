import React, {useRender, useState} from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const reducer = (state, action) =>{
    return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {
  const [state, dispatch] = useRender(reducer, {counter: 0})
  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button title="Increase" onPress = { dispatch({ payload:1 }) } />
      <Button title="Decrease" onPress = { dispatch({ payload:1 }) }  />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
