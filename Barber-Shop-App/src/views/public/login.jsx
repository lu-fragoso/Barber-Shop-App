import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import HomeClient from '../client/HomeClient';
import HomeBarber from '../barber/HomeBarber'

export default Login = () => {
 
  const navigation = useNavigation();

  const navigateToClient = () => {
      navigation.navigate('HomeClient'); 
  };
  const navigateToBarber = () => {
      navigation.navigate('HomeBarber'); 
  }; 
 
  return (
  
    <View style={styles.tela}>
      <View style={styles.div}>
        <Image
          style={{ ...styles.image, top: 60, left:53 }}
          source={require('../images/logo.png')}      
        />

        <Text style={{ ...styles.title, left: 85, top: 182 }}>Barber</Text>
        <Text style={{ ...styles.title, left: 100, top: 254 }}>Shop</Text>

        <View style={{ ...styles.group, left: 24, top: 469 }}>
          <View style={styles.rectangle} />
          <Text style={{ ...styles.text, left: 11, top: 11 }}>Password</Text>
        </View>

        <View style={{ ...styles.group, left: 24, top: 398 }}>
          <View style={styles.rectangle} />
          <Text style={{ ...styles.text, left: 13, top: 11 }}>User</Text>
        </View>

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
      
      </View>
      
    </View>
   
  );
};


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
    backgroundColor: '#262626',
  },
  div: {
    backgroundColor: "#262626",
    height: 800,
    overflow: "hidden",
    position: "relative",
    width: 360,
   },
  image: {
    width: 255,
    height: 119,
    position: 'absolute',
    alignItems:'center'
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
    group: {
      width: 312,
      height: 47,
      position: 'absolute',
      borderRadius: 10,
    },
    rectangle: {
      width: 312,
      height: 47,
      position: 'absolute',
      borderRadius: 10,
      backgroundColor: '#D9D9D9',
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

