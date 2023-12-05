import React, { useEffect, useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SelectList } from 'react-native-dropdown-select-list'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

export default Scheduling = ({navigation, route}) => {
  const { uid } = route.params;
  const [userData, setUserData] = useState(null);  
  const [barbes, setBarbers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        } else {
          console.log('No documents found with uid:', uid);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [uid]);

  useEffect(()=>{
    async function getBarbers(){
      try {
        const q = query(collection(db, 'barbers'), where('isActive', '==', true));
        const usersDocs = await getDocs(q);
        const barbersData = [];
        usersDocs.forEach((doc) => {
          barbersData.push(doc.data().displayName); 
        });
        setBarbers(barbersData);
      } catch (error) {
        alert('Error when searching for Barbers ' + error.message);
      }
    }
    getBarbers();

  }, [])



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
        setSelectedTime(currentDate);
      }
    } else {
      setDate(currentDate);
    }
  };

  const showMode = (currentMode) => {
    if (currentMode === 'time') {
      Alert.alert(
        "Appointment hours",
        "Please select a time between 8:00 am and 7:00 pm.",
        [
          { text: "OK", onPress: () => setShow(true) }
        ],
        { cancelable: false }
      );
    } else {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const scheduleAppointment = async () => {

    if (!selected || selected == '' ) {
      Alert.alert('Please select a barber.');
      return;
    }

    if (!date || date == '' ) {
      Alert.alert('Please select a day.');
      return;
    }
    
    if (!selectedTime || selectedTime == '' ) {
      Alert.alert('Please select a time.');
      return;
    }

    console.log('Selected date:', date.toLocaleDateString());
    console.log('Selected time:', selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    console.log('User:', userData.uid);
    //console.log(barberUid)
    
    try {
      // Verifica se o horário já está agendado
      const barberQuery = query(
        collection(db, 'barbers'),
        where("displayName", "==", selected)
      );
      const barberSnapshot = await getDocs(barberQuery);

      if (barberSnapshot.empty) {
        Alert.alert('Barber not found:', `No barber found with the name ${selected}.`);
        return;
      }

      const barberDoc = barberSnapshot.docs[0];
      const barberData = barberDoc.data();
      const barberUid = barberData.uid;

      console.log(barberUid)

      const q = query(
        collection(db, 'appointment'),
        where("date", "==", date.toLocaleDateString()),
        where("time", "==", selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })),
        where("barber", "==", barberData.uid)
      );
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        Alert.alert('This time is already scheduled.', `This time has already been scheduled with ${selected}. Please choose another time.  `);
        return;
      }


  
      const appointmentData = {
        date: date.toLocaleDateString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
        barber: barberUid,
        user: userData.uid,
      };

      await addDoc(collection(db, 'appointment'), appointmentData)
  
      Alert.alert('Scheduling completed');
      
      setDate(null)
      setSelectedTime(null)
      setSelected(null)

    } catch (error) {
      Alert.alert('Error scheduling appointment:', error);
    }
  
  };

  const handleVoltar = () => {
    setDate(null)
    setSelectedTime(null)
     setSelected(null)
    navigation.goBack(); 
  };
  const handleGoHome = () => {
    setDate(null)
    setSelectedTime(null)
     setSelected(null)
    navigation.navigate("HomeClient",{uid: uid}); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoHome} style={{...styles.vector2}} >
        <Icon name="home" size={40} color='#F2DDB6' />
      </TouchableOpacity>
      <Text style={styles.scheduling}>Scheduling</Text>
      

     <View style={styles.options}>
        <Text style={styles.Texting}> Select your barber</Text>
          <View style={{top: 15}}>
            <SelectList 
            key={selected}
            setSelected={(val) => setSelected(val)} 
            data={barbes} 
            placeholder='Selecte your Barber'
            defaultValue='Selecte your Barber'
            boxStyles={{backgroundColor:'#3F3939', fontSize:16, color: 'white'}}
            dropdownStyles={{backgroundColor:'#3F3939'}}
            dropdownItemStyles={{marginHorizontal:10}}
            dropdownTextStyles={{color:'white', fontWeight:'bold'}}
            maxHeight={100}
            notFoundText='Barber not found!'
            inputStyles={{fontWeight:'bold',color:'white'}}
            />
          </View> 

          <Text style={[styles.Texting,{ marginTop: 30 }]}>Selected date: {date ? date.toLocaleDateString() : 'MM/DD/YYYY'}</Text>
          <Text style={[styles.Texting,{ marginTop: 10 }]}>Selected time: {selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '--:--'}</Text>

          <View style={{top: 15}}>
          
            <View style={{top: 15, marginBottom: 10}}> 
              <Button onPress={showDatepicker} title="Choose a day!" color={'#D9A78B'} />
            </View>

            <View style={{top: 15, marginBottom: 10}}>  
              <Button onPress={showTimepicker} title="Choose a time!" color={'#D9A78B'}/>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date || new Date()}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
                minimumDate={new Date()}
              />
            )}

            <View style={{top: 15, marginBottom: 10}}>
              <Button title="Schedule" onPress={scheduleAppointment} color={'#D98236'} />
            </View>
          
          </View> 
      
      </View>
     
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
  options: {
    width:'100%',
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  group: {
    top:300,  
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
    //fontFamily: 'Inter',
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
    //fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  Texting: {
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    fontWeight: '400',
    textDecorationLine: 'underline',
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
});