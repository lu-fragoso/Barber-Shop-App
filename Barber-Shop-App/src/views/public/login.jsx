import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert ,Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from './../../../firebaseConfig'

import HomeClient from '../client/HomeClient';
import HomeBarber from '../barber/HomeBarber';
import SingUpClient from '../client/SingUpClient';


export default Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app); 
  
  const navigation = useNavigation();

  async function handleLogin(user){
    try{
      if (user.email === "admin@barber.br") {
        navigation.navigate('HomeBarber');
      } else {
        navigation.navigate('HomeClient');
      }
    } catch (error){
      alert("Erro ao fazer login: "+ error.message)
    }
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredencial)=>{
      const user = userCredencial.user
      Alert.alert('Login realizado com sucesso')
      handleLogin(user)
    })
    .catch(error => {
      console.error('Login não efetuado', error)
    })
  }



  const navigateToClient = () => {
      navigation.navigate('HomeClient'); 
  };
  const navigateToSingUpClient = () => {
      navigation.navigate('SingUpClient'); 
  }; 
 
  return (
  
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.tela}>
      
        <Image
          style={{ ...styles.image, top: 60, left:53 }}
          source={require('../images/logo.png')}      
        />

        <Text style={{ ...styles.title, left: 85, top: 182 }}>Barber</Text>
        <Text style={{ ...styles.title, left: 105, top: 254 }}>Shop</Text>

       
        <TextInput
          style={{...styles.rectangle, top:398, left:24}}
          placeholder='Enter your E-mail'
          placeholderTextColor="black"
          type = "text"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={{...styles.rectangle, left: 24, top: 469 }}
          placeholder='Enter your Password'
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={Password => setPassword(Password)}
          value={password}
        />
      


        <View style={{ ...styles.button, width: 233, height: 57,left: 64, top: 540 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={signIn}
            > 
            <Text style={{ ...styles.loginText, left: 68, top: 5.12, fontSize: 36, }}>Login</Text>
          </TouchableOpacity> 
        </View>

        <View style={{ ...styles.button, width: 104, height: 45, left: 232, top: 647 }}>
          <TouchableOpacity
            style={{ ...styles.button, width: 104, height: 45}}
            onPress={navigateToSingUpClient}
            >  
            <Text style={{ ...styles.loginText, left: 13, top: 10, fontSize: 20, }}>Register</Text>
          </TouchableOpacity>
        </View>
      
     
      
    </KeyboardAvoidingView>
   
  );
};


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#262626',
    flexDirection:"row"
  },
  div: {
    height: "100%",
    width: "100%",
   },
  image: {
    width: 255,
    height: 119,
    position: 'absolute',
   },
  title: {
    width: 211,
    height: 97,
    position: 'absolute',
    fontSize: 64,
    //fontFamily: 'Inter',
    fontWeight: '400',
    color: '#F2DDB6',
   },
    rectangle: {
      width: 312,
      height: 47,
      position: 'absolute',
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: '#D9D9D9',
      paddingLeft:15,
      fontSize: 20,
    },
    text: {
      position: 'absolute',
      fontSize: 20,
      //fontFamily: 'Inter',
      fontWeight: '400',
      color: 'black',
    },
    button: {
      width: 233,
      height: 57,
      position: 'absolute',
      borderRadius: 10,
      backgroundColor: '#D98236',
      shadowOpacity: 1,
      borderWidth: 1,
      borderColor: 'black',
    },
    loginText: {
      position: 'absolute',
      
      alignItems:'center',
      left: 132,
      //fontFamily: 'Inter',
      fontWeight: '400',
      color: 'white',
    },
  });

