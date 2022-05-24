import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { app } from '../../Firebase/firebase';
import AddMoodButton from '../components/AnimatedButton';

const HomeScreen = ({ navigation }) => {
  
  const renderCategoryItem = ({ item }) => {
    return (
      <View style = {{minHeight: 112, alignItems:'center'}}>
        <TouchableOpacity key={item.id}  onPress={() => navigation.navigate(item.comp)}>
          <Image source={item.image} style={styles.categoryItemImage} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        <Text style={styles.text}>Hi there!</Text>
        <Button
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"
        />
        <Button
          onPress={() => navigation.navigate('Counter')}
          title="Go to Counter"
        />
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
        <Button
          title="Go to Color Screen"
          onPress={() => navigation.navigate('Color')}
        />
        <Button
          title="Go to ToDo Screen"
          onPress={() => navigation.navigate('ToDo')}
        />
        <Button
          title="Go to Login Screen"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Go to NeuroSense Screen"
          onPress={() => navigation.navigate('Neurosense')}
        />
        <Button
          title="Go to TimePicker Screen"
          onPress={() => navigation.navigate('timePick')}
        />
        <Button
          title="Go to MoodBoard Screen"
          onPress={() => navigation.navigate('moodBoard')}
        />
        <View style={{flex:1,alignItems:'center'}}>
              <AddMoodButton style={{bottom:100}}></AddMoodButton>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },  
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderColor: colors.NA_text_blue,
    borderWidth:2
  },  
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    height: 93,
    width: 80,
    alignSelf: 'center',
    marginHorizontal: 12,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
});

export default HomeScreen;