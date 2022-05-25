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
import categoriesData from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';
import colors from '../../assets/colors/colors';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Tendon-Gliding.gif'
export default HandsScreen3 = (navigation) => {
  return (<NeuroSenseComp
    title = '3. Tendon Gliding'
    nextScreen= 'Hands4'
    gif= {gif}
    repeat= '2 sets of 6 reps, 3 times a day'
    text = {['1. Fan out (stretch) your fingers as much as you can. Stretch your palm a little. This is the starting position.',
            '2. Bend all your fingers except your thumb and touch the bottom of your palm.',
            '3. Extend your fingers slowly, one section at a time, to return to the straight starting position.',
            '4. Again, bend all your fingers except your thumb and touch the middle of your palm.',
            '5. Bring your fingers back to the starting position.',
            '6. Touch all your fingertips with the tip of your thumb.',
            '7. Again, spread your fingers out and stretch them as much as you can.',
            '8. Finally, touch the base of each finger with your thumb.']
          }
          >

            </NeuroSenseComp>)
};

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.NA_L_blue,
    borderRadius: 25,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTitlesWrapper: {
    marginLeft: 15,
    marginTop: 10,
  },
  ImageWrapper:{
    marginTop: 20
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.NA_text_blue,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.NA_text_blue,
    marginTop: 5,
  },
  popularCardImage: {
    width: 414,
    height: 266,
    resizeMode: 'contain',
  },
  Instrcutions: {
    letterSpacing: 0,
    marginLeft: 15,
    marginTop: 15,
    minHeight: 25,
    width: 342,
  },
  InstructionsText:{
    color: colors.dark_blue,
    fontFamily: "Montserrat",
    fontWeight: "800"
  },
  flexRowTimer :{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 13,
    marginTop: 5,
    minWidth: 273
  },
  clockIcon :{
    height: 30,
    width: 30
  },
  address:{
    letterSpacing: 0,
    marginLeft: 8,
    marginTop: 2,
    minHeight: 20,
    width: 235,
    fontWeight: "700",
    color: colors.dark_blue,
  },
  bodyHands:{
    alignSelf: 'center',
    letterSpacing: 0,
    marginTop: 12,
    minHeight: 200,
    width: 400,
  },
  bodyText :{
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    color:'white'
  },
  bullet : {
    width : 10
  },
  marginT : {
    marginTop:5,
    color:colors.NA_text_blue,
    fontWeight: "600"
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: colors.NA_text_blue,
},
});
