import { collection, setDoc, getDocs,query, addDoc ,where, orderBy, limit} from 'firebase/firestore';
import { db } from './Firebase/firebase';
import { useState, useEffect } from 'react';

export const useFireStore = (mycollection) => {
    const [data, setData] = useState([])
    function EMACalc(mArray) {
        const mRange = mArray.length
        var k = 2/(mRange + 1);
        // first item is just the same as the first item in the input
        let emaArray = [mArray[0]];
        // for the rest of the items, they are computed with the previous one
        for (var i = 1; i < mArray.length; i++) {
        emaArray.push(mArray[i] * k + emaArray[i - 1] * (1 - k));
        }
        return emaArray;
    }

    const mappings = {
        'angry':0,
        'sad':1,
        'anxious':2,
        'normal':3,
        'good':4,
        'great':5
    }
    useEffect(() => {
        const readData = async () => {
            const q = query(collection(db, "moods of "+creds.username), orderBy("date","desc"), limit(7));
            const querySnapshot = await getDocs(q);
            let temp = []
            querySnapshot.forEach((doc) => {
                temp.push(mappings[doc.data().mood])
            });
            console.log(temp)
            setData(temp)
        }
        return ()=>readData()
    },[mycollection])
    return {data}
    //console.log(data)
}