import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { query, collection, getDocs, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

export default AppointmentDetails = ({navigation, route }) => {
  const { appointment } = route.params;
  const [barberName, setBarberName] = useState('');
  const [date, setDate] = useState(new Date(appointment.date));
  const [time, setTime] = useState(new Date(appointment.time));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  //console.log(appointment.date)

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? new Date(selectedDate) : date;
    setShow(Platform.OS === 'ios');
  
    // Verifica se o modo atual é 'time'
    if (mode === 'time') {
      // Extrai as horas e minutos da data selecionada
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
  
      // Verifica se o tempo selecionado está dentro do intervalo permitido
      if (hours < 8 || (hours === 19 && minutes > 0) || hours > 19) {
        // Se o tempo selecionado não está dentro do intervalo permitido,
        // não atualiza o estado selectedTime
        Alert.alert("Invalid time", "Please select a time between 8:00 am and 7:00 pm.");
      } else if (minutes !== 0 && minutes !== 30) {
        // Se os minutos não são 0 ou 30, não atualiza o estado selectedTime
        Alert.alert("Invalid time", "Please select a time every 30 minutes.");
      } else {
        // Se o tempo selecionado está dentro do intervalo permitido,
        // atualiza o estado selectedTime
        setTime(currentDate);
      }
    } else {
      setDate(currentDate);
    }
  };
  
  console.log(date.toLocaleDateString())
  console.log(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
  
  const showTimepicker = () => {
    showMode('time');
  };

  const updateAppointment = () => {
    Alert.alert(
      "Update Appointment",
      "Are you sure you want to update this appointment?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => updateAppointmentConfirmed() }
      ]
    );
  };

  const updateAppointmentConfirmed = async () => {
    try {
      console.log(appointment.barber)

      let q = null
      
      if (date && !isNaN(date)) {
         q = query(
          collection(db, 'appointment'),
          where("date", "==", date.toLocaleDateString()),
          where("time", "==", time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })),
          where("barber", "==", appointment.barber)
          );
      } else {
        q = query(
          collection(db, 'appointment'),
          where("date", "==", appointment.date),
          where("time", "==", time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })),
          where("barber", "==", appointment.barber)
          );

      }
      
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        
        if (!querySnapshot.empty) {
          Alert.alert('This time is already scheduled.', `This time has already been scheduled with ${barberName}. Please choose another time.  `);
          return;
        } else {
        const appointmentRef = doc(db, 'appointment', appointment.id);
        const appointmentData = {}
        
        if(time && !isNaN(time) && date && isNaN(date) ){
           appointmentData.time = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
           console.log('hora')
        }else if(date && !isNaN(date) && time && isNaN(time)){
          appointmentData.date = date.toLocaleDateString()
          console.log('data')
        }else if (date && !isNaN(date) && time && !isNaN(time)) {
          appointmentData.time = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
          appointmentData.date = date.toLocaleDateString()
          console.log('data e hora')
        }else{
          Alert.alert('Please select a date and/or time to update your appointment.');
          return;
        }

        await updateDoc(appointmentRef, appointmentData);
        console.log('foi')
      }

      } catch (error) {
      Alert.alert('Error updating appointment:', error);
    }
  };

  const deleteAppointment = () => {
    Alert.alert(
      "Delete Appointment",
      "Are you sure you want to delete this appointment?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteAppointmentConfirmed() }
      ]
    );
  };

  const deleteAppointmentConfirmed = async() =>{
    const appointmentRef = doc(db, 'appointment', appointment.id);

    try {
      await deleteDoc(appointmentRef);
      console.log("Appointment successfully deleted!");
      navigation.goBack();       
    } catch (e) {
      console.error("Error removing appointment: ", e);
    }

  }

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
      
      <Icon name="calendar" size={80} color='#F2DDB6' style={{...styles.vector3}}/>

      <View style={styles.rectangle}>
        <Text style={styles.title}>Scheduling Details</Text>
        
        <Text style={{...styles.subTitle, top:100}}>Barber: {barberName}</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', top: 150 }}>
          <Text style={{...styles.subTitle,  position: 'relative'}}>Date: {date && !isNaN(date) ? date.toLocaleDateString() : appointment.date}</Text>
          <TouchableOpacity onPress={showDatepicker} style={{ top:-13 }}>
            <Icon name="pencil" size={30} color="#3F3939" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', top: 110 }}>
          <Text style={{...styles.subTitle,  position: 'relative'}}>Time: {time && !isNaN(time) ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : appointment.time}</Text>
          <TouchableOpacity onPress={showTimepicker} style={{ top:-13 }}>
            <Icon name="pencil" size={30} color="#3F3939" />
          </TouchableOpacity>
        </View>
        
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

      <View style={{position: 'absolute', bottom: 30, width: '40%', right: 24}}> 
        <Button 
          title="Delete Appointment" 
          onPress={deleteAppointment}
          color={'red'} 
        />
      </View>

      <View style={{position: 'absolute', bottom: 30, width: '40%', left: 24}}> 
        <Button
          title={"Update Appointment"}
          onPress={updateAppointment}
          color={'#D98236'}
        />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
    },
    rectangle: {
      width: "100%",
      height: 588,
      backgroundColor: '#F2E8DC',
      position: 'absolute',
      top: 212,
      left: 0,
      alignItems: 'center',      
    },
    title: {
      width: "auto",
      height: 52,
      position: 'absolute',
      textAlign: 'center',
      color: '#3F3939',
      fontSize: 24,
      margin:20,
      fontWeight: '700',
      textDecorationLine: 'underline',
    },
    subTitle: {
      width: "auto",
      height: 52,
      position: 'absolute',
      textAlign: 'center',
      color: '#3F3939',
      fontSize: 20,
      margin:20,
      fontWeight: '700',
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