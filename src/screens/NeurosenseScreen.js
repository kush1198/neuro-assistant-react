import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import rect_hands from '../assets/images/Hand_test.png';
import rect_feet from '../assets/images/Feet_test.png';
import rect_tens from '../assets/images/TENS_Test.png';
import rect_prev from '../assets/images/Previous_result.png';
import rect_text from '../assets/images/neuroSense_text.png';
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default NeurosenseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
        <Image source={rect_text} style={[styles.popularCardText,{marginTop:20, marginLeft: 30}]}></Image>
        <TouchableOpacity
                    key={1}
                    onPress={() =>
                    navigation.navigate('')
        }>
          <Image source={rect_prev} style={[styles.popularCardImage,{width:380, marginLeft:15}]}></Image>
        </TouchableOpacity>

        <TouchableOpacity
                    key={1}
                    onPress={() =>
                    navigation.navigate('Hands1')
        }>
          <Image source={rect_hands} style={styles.popularCardImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity
                    key={2}
                    style = {[{marginTop:20}]}
                    onPress={() =>
                    navigation.navigate('Legs1')
        }>
          <Image source={rect_feet} style={styles.popularCardImage}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity
                    key={2}
                    style = {[{marginTop:20}]}
                    onPress={() =>
                    navigation.navigate('')
        }>
          <Image source={rect_tens} style={styles.popularCardImage}></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%',
  },
  popularCardImage: {
    width: 414,
    height: 135,
    resizeMode: 'contain',
  },
  popularCardText: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
  }
});