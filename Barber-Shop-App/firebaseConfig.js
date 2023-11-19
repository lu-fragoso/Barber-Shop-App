import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCMNPgsWABAngmmVfKffEvJ4uSeLoqbWNI",
    authDomain: "barber-shop-c5921.firebaseapp.com",
    projectId: "barber-shop-c5921",
    storageBucket: "barber-shop-c5921.appspot.com",
    messagingSenderId: "161681950511",
    appId: "1:161681950511:web:34d7715aa90dc53bd603da"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  const storage = getStorage(app);
  
  
  export { db, auth };
  