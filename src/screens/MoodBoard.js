import React, {useState} from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import moodData from "../assets/data/moodOptions";

const MoodBoard = () => {
    const [mCategory,setmCategory] = useState(1)
    return (
        <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
        }]}>
        <View style={{ flex: 1.1, backgroundColor: "red" }} />
        <View style={{ flex: 0.3}}>
            <Image source={moodData[mCategory-1].mInd} style={{width:370,resizeMode:'contain'}}></Image>
        </View>
        <View style={{ flex: 1.6}}>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false} 
            style={{padding:10}}>
                <View style={styles.recoContainer}>
                    {
                        moodData[mCategory-1].images.map((item) => (
                            <Image source={item.img} key={item.id} style={styles.cardImage}></Image>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center'
  },

  recoContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center'
  },
  cardImage: {
    height: 80,
    width: 360,
    resizeMode: 'contain',
  }
});

export default MoodBoard;