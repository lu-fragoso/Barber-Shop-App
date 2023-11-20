import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

export default Details = () => {
  
  const navigation = useNavigation();
  
  const handleVoltar = () => {
    navigation.goBack(); 
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
      <View style={styles.group}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={styles.lucasGarciaFragoso}>Lucas Garcia Fragoso</Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.user}>User</Text>
        <Text style={styles.lucasFragoso}>lucas.fragoso</Text>
      </View>
      <View style={styles.group3}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.passwordValue}>**********</Text>
      </View>
      <View style={styles.group4}>
        <View style={styles.rectangle9}/>
        <Text style={styles.changePassword}>Change Password</Text>
      </View>
      
      <Icon name="user" size={80} color='#F2DDB6' style={{...styles.vector2}}/>
      
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: 360,
    height: 588,
    backgroundColor: '#F2E8DC',
    position: 'absolute',
    top: 212,
    left: 0,
  },
  group: {
    width: 312,
    height: 81,
    position: 'absolute',
    top: 297,
    left: 23,
  },
  rectangle8: {
    width: 312,
    height: 47,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    position: 'absolute',
    top: 34,
    left: 0,
  },
  fullName: {
    width: 118,
    height: 25,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 83,
    textAlign: 'center',
  },
  lucasGarciaFragoso: {
    width: 280,
    height: 25,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 45,
    left: 17,
  },
  group2: {
    width: 312,
    height: 84,
    position: 'absolute',
    top: 400,
    left: 24,
  },
  user: {
    width: 59,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 112,
  },
  lucasFragoso: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group3: {
    width: 312,
    height: 84,
    position: 'absolute',
    top: 506,
    left: 25,
  },
  password: {
    width: 113,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 84,
  },
  passwordValue: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group4: {
    width: 197,
    height: 58,
    position: 'absolute',
    top: 707,
    left: 80,
  },
  rectangle9: {
    width: 197,
    height: 58,
    backgroundColor: '#D98236',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  changePassword: {
    width: 178,
    height: 28,
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    top: 15,
    left: 9,
  },
  vector1: {
    position: 'absolute',
    top: 22,
    right: 23,
  },
  vector2: {
    position: 'absolute',
    justifyContent:'center',
    top: 115,
    //left: 147,
  },
  vector3: {
    position: 'absolute',
    top: 22,
    left: 23,
  },
});
