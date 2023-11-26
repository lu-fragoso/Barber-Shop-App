import React, { useEffect, useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SelectList } from 'react-native-dropdown-select-list'
import { collection, getDocs, query, where, addDoc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

export default Scheduling = ({navigation, route}) => {
  const { displayName } = route.params;
  const [userData, setUserData] = useState(null);  
  const [barbes, setBarbers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, 'users'), where('displayName', '==', displayName));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        } else {
          console.log('No documents found with displayName:', displayName);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [displayName]);

  useEffect(()=>{
    async function getBarbers(){
      try {
        const q = query(collection(db, 'barbers'));
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

    console.log('Selected date:', date.toLocaleDateString());
    console.log('Selected time:', selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    console.log('User:', userData.displayName);
    console.log(selected)
    
    try {
      // Verifica se o horário já está agendado
      const q = query(
        collection(db, 'appointment'),
        where("date", "==", date.toLocaleDateString()),
        where("time", "==", selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })),
        where("barber", "==", selected)
      );
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        Alert.alert('This time is already scheduled.', `This time has already been scheduled with ${selected}. Please choose another time.  `);
        return;
      }
  
      const appointmentData = {
        date: date.toLocaleDateString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
        barber: selected,
        user: userData.displayName,
      };
      await addDoc(collection(db, 'appointment'), appointmentData)
  
      Alert.alert('Scheduling completed');
      setSelectedTime(new Date())
      setSelected('')
    } catch (error) {
      Alert.alert('Error scheduling appointment:', error);
    }
  
  };

  const handleVoltar = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector2}} >
        <Icon name="home" size={40} color='#F2DDB6' />
      </TouchableOpacity>
      <Text style={styles.scheduling}>Scheduling</Text>
      

     <View style={styles.options}>
        <Text style={styles.Texting}> Select your barber</Text>
          <View style={{top: 15}}>
            <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={barbes} 
            placeholder='Selecte your Barber'
            boxStyles={{backgroundColor:'#3F3939', fontSize:16, color: 'white'}}
            dropdownStyles={{backgroundColor:'#3F3939'}}
            dropdownItemStyles={{marginHorizontal:10}}
            dropdownTextStyles={{color:'white', fontWeight:'bold'}}
            maxHeight={100}
            notFoundText='Barber not found!'
            inputStyles={{fontWeight:'bold',color:'white'}}
            />
          </View> 

          <Text style={[styles.Texting,{ marginTop: 30 }]}>Selected date: {date.toLocaleDateString()}</Text>
          <Text style={[styles.Texting,{ marginTop: 10 }]}>Selected time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>

          <View style={{top: 15}}>
          
            <View style={{top: 15, marginBottom: 10}}> 
              <Button onPress={showDatepicker} title="Show date picker!" />
            </View>

            <View style={{top: 15, marginBottom: 10}}>  
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
                minimumDate={new Date()}
              />
            )}

            <View style={{top: 15, marginBottom: 10}}>
              <Button title="Schedule" onPress={scheduleAppointment} />
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