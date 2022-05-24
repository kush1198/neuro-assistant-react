import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-IpXrJhmiKs7__UiQKPC_fAVwzzBmbz4",
    authDomain: "neuropath-assistant.firebaseapp.com",
    projectId: "neuropath-assistant",
    storageBucket: "neuropath-assistant.appspot.com",
    messagingSenderId: "453430816971",
    appId: "1:453430816971:web:4a98e79ade1423a7a7eb4e",
    measurementId: "G-RNKJYP6GYF"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth,db}