import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title="Add a color" onPress = { () => {
          setColors([...colors,RandomRGB()])
      } } />
      <FlatList
        keyExtractor={(item)=>item}
        data = {colors}
        renderItem = {( {item} )=>{ 
            return <View style = {{ height:100, width:100, backgroundColor: item }}></View>
         }}
      />
    </View>
  );
};

const RandomRGB = () =>{
    let red = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    return `rgb(${red},${blue},${green})`
}

const styles = StyleSheet.create({});

export default ColorScreen;
