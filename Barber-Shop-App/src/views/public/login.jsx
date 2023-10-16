import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import HomeClient from '../client/HomeClient';
import HomeBarber from '../barber/HomeBarber';

export default Login = () => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const loginFirebase = () =>{

  }

  const navigation = useNavigation();

  const navigateToClient = () => {
      navigation.navigate('HomeClient'); 
  };
  const navigateToBarber = () => {
      navigation.navigate('HomeBarber'); 
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
          value={Email}
        />

        <TextInput
          placeholder='Enter your Password'
          placeholderTextColor="black"
          style={{...styles.rectangle, left: 24, top: 469 }}
          onChangeText={Password => setPassword(Password)}
          value={Password}
        />
      


        <View style={{ ...styles.button, width: 233, height: 57,left: 64, top: 540 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToClient}
            > 
            <Text style={{ ...styles.loginText, left: 68, top: 5.12, fontSize: 36, }}>Login</Text>
          </TouchableOpacity> 
        </View>

        <View style={{ ...styles.button, width: 104, height: 45, left: 232, top: 647 }}>
          <TouchableOpacity
            style={{ ...styles.button, width: 104, height: 45}}
            onPress={navigateToBarber}
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

