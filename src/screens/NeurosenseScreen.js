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
  //const renderCategoryItem = ({ item }) => {
  //   return (
  //     <View
  //       style={[
  //         styles.categoryItemWrapper,
  //         {
  //           backgroundColor: item.selected ? colors.primary : colors.white,
  //           marginLeft: item.id == 1 ? 20 : 0,
  //         },
  //       ]}>
  //       <Image source={item.image} style={styles.categoryItemImage} />
  //       <Text style={styles.categoryItemTitle}>{item.title}</Text>
  //       <View
  //         style={[
  //           styles.categorySelectWrapper,
  //           {
  //             backgroundColor: item.selected ? colors.white : colors.secondary,
  //           },
  //         ]}>
  //         <Feather
  //           name="chevron-right"
  //           size={8}
  //           style={styles.categorySelectIcon}
  //           color={item.selected ? colors.black : colors.white}
  //         />
  //       </View>
  //     </View>
  //   );
  // };

  // return (
  //   <View style={styles.container}>
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       showsVerticalScrollIndicator={false}>

  //       {/* Titles */}
  //       <View style={styles.titlesWrapper}>
  //         <Text style={styles.titlesSubtitle}>Food</Text>
  //         <Text style={styles.titlesTitle}>Delivery</Text>
  //       </View>

  //       {/* Search */}
  //       <View style={styles.searchWrapper}>
  //         <Feather name="search" size={16} color={colors.textDark} />
  //         <View style={styles.search}>
  //           <Text style={styles.searchText}>Search</Text>
  //         </View>
  //       </View>

  //       {/* Popular */}
  //       <View style={styles.popularWrapper}>
  //         <Text style={styles.popularTitle}>NeuroSense</Text>
  //         {popularData.map((item) => (
  //           <TouchableOpacity
  //             key={item.id}
  //             onPress={() =>
  //               navigation.navigate('Hands2')
  //             }>
  //             <View
  //               style={[
  //                 styles.popularCardWrapper,
  //                 {
  //                   marginTop: item.id == 1 ? 10 : 20,
  //                 },
  //               ]}>
  //               <View>
  //                 <View>
  //                   <View style={styles.popularTitlesWrapper}>
  //                     <Text style={styles.popularTitlesTitle}>
  //                       {item.title}
  //                     </Text>
  //                     <Text style={styles.popularTitlesWeight}>
  //                       {/* {item.text} */}
  //                     </Text>
  //                   </View>
  //                 </View>
  //               </View>

  //               <View style={styles.popularCardRight}>
  //                 <Image source={item.image} style={styles.popularCardImage} />
  //               </View>
  //             </View>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
  //     </ScrollView>
  //   </View>
  // );
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
                    navigation.navigate('Hands2')
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
  },
  
  // searchWrapper: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  //   marginTop: 30,
  // },
  // search: {
  //   flex: 1,
  //   marginLeft: 10,
  //   borderBottomColor: colors.textLight,
  //   borderBottomWidth: 2,
  // },
  // searchText: {
  //   fontFamily: 'Montserrat-Semibold',
  //   fontSize: 14,
  //   marginBottom: 5,
  //   color: colors.textLight,
  // },
  // popularWrapper: {
  //   paddingHorizontal: 20,
  // },
  // popularTitle: {
  //   fontFamily: 'Montserrat-Bold',
  //   fontSize: 16,
  // },
  // popularCardWrapper: {
  //   backgroundColor: colors.NA_L_blue,
  //   borderRadius: 25,
  //   paddingTop: 20,
  //   paddingLeft: 20,
  //   flexDirection: 'row',
  //   overflow: 'hidden',
  //   shadowColor: colors.black,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.05,
  //   shadowRadius: 10,
  //   elevation: 2,
  // },
  // popularTitlesWrapper: {
  //   marginTop: 20,
  // },
  // popularTitlesTitle: {
  //   fontFamily: 'Montserrat-SemiBold',
  //   fontSize: 14,
  //   color: colors.NA_text_blue,
  // },
  // popularTitlesWeight: {
  //   fontFamily: 'Montserrat-Medium',
  //   fontSize: 12,
  //   color: colors.NA_text_blue,
  //   marginTop: 5,
  // },
  // rating: {
  //   fontFamily: 'Montserrat-SemiBold',
  //   fontSize: 12,
  //   color: colors.textDark,
  //   marginLeft: 5,
  // },
  // popularCardRight: {
  //   marginLeft: 40,
  // },
});