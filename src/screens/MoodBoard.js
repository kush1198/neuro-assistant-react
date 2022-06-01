import React, {useState, useContext, useEffect} from "react";
import { StyleSheet, Text, View, Image,RefreshControl, ScrollView } from "react-native";
import moodData from "../assets/data/moodOptions";
import CalendarComponent from "../components/CalendarComponent";
import { query, collection, where, getDocs, setDoc } from "firebase/firestore";
import { auth,db } from '../../Firebase/firebase';
import { CredentialsContext } from '../../starter';

const MoodBoard = () => {
  const creds = useContext(CredentialsContext);
  const [mCategory,setmCategory] = useState(2);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getAvgMoood();
  }, []);
  const onRefresh = () =>{
    getAvgMoood();

  }
  const getAvgMoood = async () => {
    const userRef = query(collection(db, 'users'),where("Email","==",creds.username));
    const userDocs = await getDocs(userRef);
    let ans = 0
    userDocs.forEach((doc)=>{
      console.log(doc)
        ans = doc.data().averageMood;
    })
    setmCategory(Math.floor(ans))
  }
    
    return (
        <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
        }]}>
        <CalendarComponent></CalendarComponent>
        <View style={{ flex: 0.3, paddingLeft: 15, paddingBottom:10, marginBottom:10}}>
            <Image source={moodData[mCategory-1].mInd} style={{width:370,resizeMode:'contain'}}></Image>
        </View>
        <View style={{ flex: 1.6}}>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false} 
            style={{padding:10}}
            refreshControl={
              <RefreshControl refreshing={refreshing} 
                onRefresh={onRefresh} />}>
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
    justifyContent:'center'
  },

  recoContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    padding: 10
  },
  cardImage: {
    height: 80,
    width: 360,
    resizeMode: 'contain',
  }
});

export default MoodBoard;