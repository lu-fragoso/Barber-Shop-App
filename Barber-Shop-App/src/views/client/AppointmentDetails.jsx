import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default AppointmentDetails = ({navigation, route }) => {
  const { appointment } = route.params;
  const [barberName, setBarberName] = useState('');

  useEffect(() => {
    const fetchBarberName = async () => {
      const q = query(collection(db, 'barbers'), where('uid', '==', appointment.barber));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
        setBarberName(userData.displayName);
      } else {
        console.log('Nenhum barbeiro encontrado com o uid:', appointment.barber);
      }
    };

    fetchBarberName();
  }, [appointment.barber]);

  const handleVoltar = () => {
    navigation.goBack(); 
  };
  const handleGoHome = () => {
    navigation.navigate('HomeClient', {uid: appointment.user})
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
            <Icon name="chevron-right" size={40} color='#F2DDB6'  />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoHome} style={{...styles.vector2}} >
            <Icon name="home" size={40} color='#F2DDB6' />
        </TouchableOpacity>  

        <Icon name="paper" size={80} color='#F2DDB6' style={{...styles.vector3}}/>

      <Text>Detalhes do Agendamento</Text>
      <Text>Data: {appointment.date}</Text>
      <Text>Horário: {appointment.time}</Text>
      <Text>Barbeiro: {barberName}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vector1: {
        position: 'absolute',
        top: 30,
        right: 23,
      },
      vector2: {
        position: 'absolute',
        top: 30,
        left: 23,
      },
      vector3: {
        position: 'absolute',
        justifyContent:'center',
        top: 115,
      },
});