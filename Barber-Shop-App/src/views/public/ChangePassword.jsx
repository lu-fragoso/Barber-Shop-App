import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
      <View style={styles.group}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.passwordValue}>**********</Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.confirmPassword}>Confirm Password</Text>
        <Text style={styles.confirmPasswordValue}>**********</Text>
      </View>
      <View style={styles.group3}>
        <View style={styles.rectangle9}></View>
        <Text style={styles.changePassword}>Change Password</Text>
      </View>
      <View style={styles.group4}>
        <View style={styles.rectangle9}></View>
        <Text style={styles.cancel}>Cancel</Text>
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
    height: 84,
    position: 'absolute',
    top: 257,
    left: 24,
  },
  rectangle8: {
    width: 312,
    height: 47,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    position: 'absolute',
    top: 37,
    left: 0,
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
  },
  passwordValue: {
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
  group2: {
    width: 312,
    height: 89,
    position: 'absolute',
    top: 363,
    left: 25,
  },
  confirmPassword: {
    width: 213,
    height: 37,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 48,
  },
  confirmPasswordValue: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 47,
    left: 17,
  },
  group3: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 714,
    left: 215,
  },
  changePassword: {
    width: 110.23,
    height: 25.10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    top: 13.45,
    left: 5.57,
  },
  group4: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 714,
    left: 16,
  },
  cancel: {
    left: 28,
    top: 14,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  vector1: {
    width: 30,
    height: 43.60,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 306,
  },
  vector2: {
    width: 65,
    height: 75.83,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 104,
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
