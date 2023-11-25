import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import UserBarber from '../barber/UserBarber';

export default HomeBarber = ({navigation,route}) => {
  const { email } = route.params;
  const [userData, setUserData] = useState(null)

  console.log(email)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, 'barbers'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        } else {
          console.log('Nenhum documento encontrado com o email:', email);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };
  
    fetchUserData();
  }, [email]);


  const navigateToUserBarber = () => {
    navigation.navigate('UserBarber',{displayName: userData.displayName});
  };

  const handleVoltar = () => {
    navigation.goBack(); 
  }; 
  
  return (
    <View style={styles.container}>
      <View style={styles.rectangle7}></View>
      <View style={styles.group11}>
        <Text style={{...styles.welcomeText,top: 10}}>Welcome,</Text>
        <Text style={{...styles.welcomeText,left: 135,fontSize: 32}}>{userData?.displayName||'error'}!</Text>
      </View>
      <Text style={styles.yourScheduledJobs}>Your scheduled jobs</Text>
      <View style={styles.schedule}>
        <View style={styles.rectangle11}></View>
        <View style={styles.rectangle12}></View>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.lucas}>Lucas</Text>
        <Text style={{...styles.h, top:66}}>13 H</Text>
        <Text style={styles.carlos}>Carlos</Text>
        <Text style={{...styles.h, top:113}}>14 H</Text>
        <Text style={styles.scheduleText}>Schedule</Text>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
      </View>
      
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={navigateToUserBarber} style={{...styles.vector3}} >
        <Icon name="user" size={40} color='#F2DDB6' />
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
  rectangle7: {
    width: 360,
    height: 588,
    backgroundColor: '#F2E8DC',
    position: 'absolute',
    top: 212,
    left: 0,
  },
  group11: {
    width: 296,
    height: 55,
    position: 'absolute',
    top: 97,
    left: -9,
  },
  welcomeText: {
    width: 198,
    height: 52,
    color: '#F2DDB6',
    fontSize: 24,
    fontWeight: '400',
    position: 'absolute',
    top: 3,
    left: 0,
    textAlign: 'center',
  },
  barber: {
    width: 148,
    height: 52,
    color: '#F2DDB6',
    fontSize: 32,
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 148,
    textAlign: 'center',
  },
  yourScheduledJobs: {
    width: 251,
    height: 52,
    color: '#3F3939',
    fontSize: 24,
    fontWeight: '700',
    textDecorationLine: 'underline',
    position: 'absolute',
    top: 212,
    left: 55,
    textAlign: 'center',
  },
  schedule: {
    width: 267,
    height: 432,
    position: 'absolute',
    top: 324,
    left: 47,
  },
  rectangle11: {
    width: 267,
    height: 432,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  rectangle12: {
    width: 267,
    height: 48,
    backgroundColor: '#3F3939',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    position: 'absolute',
    top: 9,
    left: 24,
    textAlign: 'center',
  },
  lucas: {
    color: '#3F3939',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    top: 66,
    left: 24,
    textAlign: 'center',
  },
  h: {
    color: '#3F3939',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    left: 174,
    textAlign: 'center',
  },
  carlos: {
    color: '#3F3939',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    top: 113,
    left: 21,
    textAlign: 'center',
  },
  scheduleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    position: 'absolute',
    top: 9,
    left: 136,
    textAlign: 'center',
  },
  line1: {
    width: 267,
    height: 0,
    position: 'absolute',
    top: 102,
    left: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
  line2: {
    width: 267,
    height: 0,
    position: 'absolute',
    top: 147,
    left: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
  vector1: {
    width: 30,
    height: 43.60,
   // backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 306,
  },
  vector2: {
    width: 65,
    height: 75.83,
   // backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 104,
    left: 147,
  },
  vector3: {
    width: 40,
    height: 40,
  //  backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 23,
  },
});


