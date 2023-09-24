import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default Scheduling = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rectangle}></View>
        <Text style={styles.scheduleText}>Schedule your appointment !</Text>
      </View>
      <Text style={styles.scheduling}>Scheduling</Text>
      <View style={styles.group2}>
        <Text style={styles.day}>Day</Text>
        <View style={styles.dayTable}>
          <View style={styles.rectangle12}></View>
          <Text style={styles.dayTableText}>09</Text>
          <Text style={styles.october}>October</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <Text style={styles.hour}>Hour</Text>
        <View style={styles.hourTable}>
          <View style={styles.rectangle12}></View>
          <Text style={styles.hourTableText}>15</Text>
          <Text style={styles.hourTableText}>00</Text>
        </View>
      </View>
      <View style={styles.group4}>
        <Text style={styles.chooseYourBarber}>Choose your Barber</Text>
        <View style={styles.hourTable}>
          <View style={styles.rectangle12}></View>
          <Text style={styles.barber}>Alan Faria</Text>
          <Text style={styles.barber}>Adão</Text>
          <View style={styles.rectangle13}></View>
          <View style={styles.rectangle14}></View>
        </View>
      </View>
      <View style={styles.vector1}></View>
      <View style={styles.vector2}></View>
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
  group: {
    width: 219,
    height: 70,
    position: 'absolute',
  },
  rectangle: {
    width: 219,
    height: 70,
    backgroundColor: '#D98236',
    borderRadius: 10,
    position: 'absolute',
  },
  scheduleText: {
    width: 184.42,
    height: 56.95,
    position: 'absolute',
    top: 7.12,
    left: 17.29,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  scheduling: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 97,
    left: 81,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  group2: {
    height: 107,
    position: 'absolute',
    top: 181,
  },
  day: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 41,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  dayTable: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 70,
  },
  rectangle12: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3F3939',
  },
  dayTableText: {
    width: 71.06,
    height: 22.35,
    position: 'absolute',
    top: 6.94,
    left: 25.08,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  october: {
    width: 145,
    height: 22,
    position: 'absolute',
    top: 7,
    left: 113,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  group3: {
    height: 107,
    position: 'absolute',
    top: 323,
  },
  hour: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 41,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  hourTable: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 70,
  },
  hourTableText: {
    width: 71.06,
    height: 22.35,
    position: 'absolute',
    top: 7,
    left: 48,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  group4: {
    height: 183,
    position: 'absolute',
    top: 462,
  },
  chooseYourBarber: {
    width: 238,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 21,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  barber: {
    width: 208,
    height: 22,
    position: 'absolute',
    top: 13,
    left: 61,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  rectangle13: {
    width: 21,
    height: 21,
    position: 'absolute',
    top: 16,
    left: 27,
    border: '2px #D9D9D9 solid',
  },
  rectangle14: {
    width: 21,
    height: 21,
    position: 'absolute',
    top: 58,
    left: 27,
    border: '2px #D9D9D9 solid',
  },
  vector1: {
    width: 30,
    height: 43.60,
    position: 'absolute',
    top: 22,
    left: 307,
    backgroundColor: '#F2DDB6',
  },
  vector2: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 22,
    left: 23,
    backgroundColor: '#F2DDB6',
  },
});

