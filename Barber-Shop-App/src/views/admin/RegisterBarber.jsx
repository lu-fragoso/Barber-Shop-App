import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app, db } from './../../../firebaseConfig'
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';

const auth = getAuth(app);

export default RegisterBarber = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const navigation = useNavigation();

    const navigateToSignIn = () => {
      navigation.navigate('HomeAdmin'); 
    };
    const handleVoltar = () => {
        navigation.goBack(); 
    };

    const authSignUp = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          const uid = user.uid; 
          const docRef = await addDoc(collection(db, 'barbers'), {
            email: email,
            displayName: displayName,
            uid: uid, 
          });
          console.log('Document written with ID: ', docRef.id);
          Alert.alert('User ' + displayName + ' registered successfully!');
          navigateToSignIn();
        } catch (error) {
          console.error('SignUp error:', error);
        }
      };




  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.tela}>
        <View style={styles.container}>
          
          <Image style={styles.logo} source={require('../images/logo.png')} />
          <Text style={styles.barberShop}>Barber Shop</Text>
          <Text style={styles.client}>Barber </Text>
         
          <View style={styles.group3}>
            <TextInput
            style = {styles.rectangle8}
            type = 'text'
            onChangeText={(text)=>setDisplayName(text)}
            value={displayName}
            />
            <Text style={styles.fullName}>Full Name</Text>
          </View>
         
          <View style={styles.group6}>
          <TextInput
            style = {styles.rectangle8}
            type = 'text'
            onChangeText={(text)=>setEmail(text)}
            value={email}
            keyboardType="email-address"
            />
            <Text style={styles.user}>E-mail</Text>
          </View>

          <View style={styles.group9}>
          <TextInput
            style = {styles.rectangle8}
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
            value={password}
            />
            <Text style={styles.password}>Password</Text>
          </View>
         
          <View style={styles.group4}>
            <TouchableOpacity
              style={styles.rectangle9}
              onPress={authSignUp}
              >
              <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
          </View>
         
          <View style={styles.group11}>
            <TouchableOpacity
              style={styles.rectangle9}
              onPress={handleVoltar}
              > 
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        
        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#262626',
  },
  group3: {
    width: 312,
    height: 72,
    left: 24,
    top: 257,
    position: 'absolute',
  },
  rectangle8: {
    marginTop:10,
    width: 312,
    height: 47,
    left: 0,
    top: 25,
    position: 'absolute',
    paddingLeft:15,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  fullName: {
    width: 118,
    height: 25,
    left: 7,
    top: 0,
    position: 'absolute',
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  group4: {
    width: 104,
    height: 45,
    left: 232,
    top: 718,
    position: 'absolute',
  },
  rectangle9: {
    width: 104,
    height: 45,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#D98236',
    borderRadius: 10,
  },
  register: {
    left: 13,
    top: 10,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  group11: {
    width: 104,
    height: 45,
    left: 31,
    top: 718,
    position: 'absolute',
  },
  cancel: {
    left: 19,
    top: 10,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  group6: {
    width: 312,
    height: 79,
    left: 24,
    top: 354,
    position: 'absolute',
  },
  user: {
    width: 70,
    height: 37,
    left: 13,
    top: 0,
    position: 'absolute',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  group9: {
    width: 312,
    height: 79,
    left: 24,
    top: 458,
    position: 'absolute',
  },
  password: {
    width: 263,
    height: 37,
    left: 13,
    top: 0,
    position: 'absolute',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  logo: {
    width: 123,
    height: 41,
    left: 24,
    top: 59,
    position: 'absolute',
  },
  barberShop: {
    width: 198,
    height: 52,
    left: 147,
    top: 53,
    position: 'absolute',
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 32,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  client: {
    width: 198,
    height: 52,
    left: 15,
    top: 152,
    position: 'absolute',
    color: '#D9D9D9',
    fontSize: 26,
    //fontFamily: 'Inter',
    fontWeight: '700',
    //wordWrap: 'break-word',
  },
});