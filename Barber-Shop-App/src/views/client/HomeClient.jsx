import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default HomeClient = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.rectangle}/>
      <View style={styles.group}>
        <View style={styles.rectangle2}/>
        <Text style={styles.scheduleText}>Schedule your appointment !</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.client}>Client!</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.ellipse}/>
        <Image style={styles.image} source={require('../images/Bigode.png')} />
        <Text style={styles.beard}>Beard</Text>
        <Text style={styles.shaving}>Shaving</Text>
      </View>
      <View style={styles.group}>
        <Image style={styles.image2} source={require('../images/Tesoura.png')} />
        <View style={styles.ellipse}/>
        <Text style={styles.hair}>Hair</Text>
        <Text style={styles.cutting}>Cutting</Text>
      </View>
      <View style={styles.group}>
        <Image style={styles.image3} source={require('../images/Xampu.png')} />
        <View style={styles.ellipse}/>
        <Text style={styles.hair}>Hair</Text>
        <Text style={styles.treatment}>Treatment</Text>
      </View>
      <Text style={styles.allServices}>All services</Text>
      <View style={styles.vector1}/>
      <View style={styles.vector2}/>
    
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
    height: 418,
    backgroundColor: '#F2E8DC',
    borderRadius: 10,
    position: 'absolute',
    top: 212,
  },
  group: {
    width: 219,
    height: 70,
    position: 'absolute',
  },
  rectangle2: {
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
  welcome: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 3,
    left: 0,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  client: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 111,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  ellipse: {
    width: 105,
    height: 105,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#3F3939',
    position: 'absolute',
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 13,
    left: 13,
  },
  beard: {
    position: 'absolute',
    top: 110,
    left: 24,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  shaving: {
    position: 'absolute',
    top: 134,
    left: 15,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  image2: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 16,
    left: 12,
  },
  image3: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 13,
    left: 13,
  },
  hair: {
    position: 'absolute',
    top: 110,
    left: 28,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  cutting: {
    position: 'absolute',
    top: 134,
    left: 12,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  treatment: {
    position: 'absolute',
    top: 134,
    left: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  allServices: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 212,
    textAlign: 'center',
    color: '#3F3939',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
    textDecorationLine: 'underline',
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
