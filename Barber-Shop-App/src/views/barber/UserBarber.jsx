import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default UserBarber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle7}></View>
      <View style={styles.group13}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={styles.alanFaria}>Alan Faria</Text>
      </View>
      <View style={styles.group14}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.user}>User</Text>
        <Text style={styles.alan}>alan</Text>
      </View>
      <View style={styles.group18}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.passwordMask}>**********</Text>
      </View>
      <View style={styles.group4}>
        <View style={styles.rectangle9}></View>
        <Text style={styles.changePassword}>Change Password</Text>
      </View>
      <View style={styles.group19}>
        <View style={styles.rectangle9}></View>
        <Text style={styles.addBarber}>Add Barber</Text>
      </View>
      <View style={styles.vector1}></View>
      <View style={styles.vector2}></View>
      <View style={styles.vector3}></View>
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
  rectangle7: {
    width: 360,
    height: 588,
    backgroundColor: '#F2E8DC',
    position: 'absolute',
    top: 212,
    left: 0,
  },
  group13: {
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
    position: 'absolute',
    top: 34,
    left: 0,
    borderRadius: 10,
  },
  fullName: {
    width: 118,
    height: 25,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 83,
    textAlign: 'center',
  },
  alanFaria: {
    width: 280,
    height: 25,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 45,
    left: 17,
  },
  group14: {
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
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 112,
    textAlign: 'center',
  },
  alan: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group18: {
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
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 84,
    textAlign: 'center',
  },
  passwordMask: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group4: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 718,
    left: 215,
  },
  rectangle9: {
    width: 122,
    height: 52,
    backgroundColor: '#D98236',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
  },
  changePassword: {
    width: 110.23,
    height: 25.10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 13.45,
    left: 5.57,
    textAlign: 'center',
  },
  group19: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 718,
    left: 25,
  },
  addBarber: {
    width: 110.23,
    height: 25.10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 13.45,
    left: 5.57,
    textAlign: 'center',
  },
  vector1: {
    width: 30,
    height: 43.60,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 305,
  },
  vector2: {
    width: 65,
    height: 65,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 115,
    left: 147,
  },
  vector3: {
    width: 40,
    height: 40,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 23,
  },
});