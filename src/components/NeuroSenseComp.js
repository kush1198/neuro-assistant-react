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
import { useNavigation } from '@react-navigation/native';


export default NeuroScreenComp = ({title, nextScreen,gif,repeat,text}) => {
    const navigation = useNavigation();
    return (
        <View>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
                <View style={styles.popularWrapper}>
                    <View
                        style={[
                        styles.popularCardWrapper,
                        {
                            marginTop: 20,
                        },
                        ]}>
                        <View>
                        <View>
                            <View style={styles.popularTitlesWrapper}>
                                <View style={[styles.flexRowTimer,{justifyContent: 'space-between'}]}> 
                                    <Text style={styles.popularTitlesTitle}>
                                    {title}
                                    </Text>
                                    <View style={[{borderWidth: 1, borderColor:colors.NA_L_blue, padding:7, backgroundColor:colors.NA_text_blue,  borderRadius: 13, overflow: "hidden",marginRight:15}]}>
                                    <TouchableOpacity style={[{ alignSelf: 'center', backgroundColor:colors.NA_text_blue}]}
                                        onPress={() => navigation.navigate({nextScreen})}>
                                        <Text style={[{color:'white', fontWeight:'700'}]}>NEXT</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </View>
                        <View style={styles.ImageWrapper}>
                        <Image source={gif}
                        style={styles.popularCardImage} />
                        </View>
                        <View style={styles.Instrcutions}>
                        <Text style={styles.InstructionsText}>Instructions</Text>
                        </View>
                        <View style={styles.flexRowTimer}>
                        <Image style={styles.clockIcon} source={{uri: 'https://anima-uploads.s3.amazonaws.com/projects/627c157c907eaa9be5ced8ad/releases/627c1bd9e49b95ffdb08a159/img/2824441-clock-stopwatch-time-timer-icon-1-14@2x.png'}}></Image>
                        <Text style={styles.address}>{repeat}</Text>
                        </View>
                        <View style={styles.bodyHands}>
                        <View style={styles.bodyText}>
                            <View style={ styles.bullet }>
                            <Text>{'\u2022' + " "}</Text>
                            </View>
                            <View style={[{ flex : 1, marginLeft: 25, paddingRight: 20 }]}>
                                {
                                    text.map((item) => (
                                        <Text style = {styles.marginT}>{item}</Text>
                                    ))
                                }
                                {/* <Text style = {styles.marginT}>1. Place your palm flat on a table.</Text>
                                <Text style = {styles.marginT}>2. Lift your fingers (as far as possible) one by one. Keep your fingers straight and palm flat on the table.</Text> */}
                            </View>
                        </View>
                        </View>
                </View>
            </View>
            </ScrollView>
        </View>
    );
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
