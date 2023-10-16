import firebase from "firebase" 
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCMNPgsWABAngmmVfKffEvJ4uSeLoqbWNI",
    authDomain: "barber-shop-c5921.firebaseapp.com",
    projectId: "barber-shop-c5921",
    storageBucket: "barber-shop-c5921.appspot.com",
    messagingSenderId: "161681950511",
    appId: "1:161681950511:web:34d7715aa90dc53bd603da"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase