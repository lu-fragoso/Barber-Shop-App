import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, getDocs, query, where, orderBy, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

export default MyAppointments =({ navigation, route }) => {
  const { uid } = route.params;
  const [userData, setUserData] = useState(null)
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);  

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

  //console.log(selectedDate.toLocaleDateString())

  const fetchAppointments = async () => {
    let q;
    if (selectedDate) {
      q = query(collection(db, 'appointment'), where('user', '==', uid), where('date', '==', selectedDate.toLocaleDateString()));
    } else {
      q = query(collection(db, 'appointment'), where('user', '==', uid));
    }
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const appointmentsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
      setAppointments(appointmentsData);
    } else {
      console.log('No schedules found for the user:', uid);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchAppointments);
    fetchAppointments();
    return unsubscribe;
  }, [uid, selectedDate, navigation]);

  const AppointmentItem = ({ item, onPress}) => {
    const [barberName, setBarberName] = useState('');
  
    useEffect(() => {
      const fetchBarberName = async () => {
        const q = query(collection(db, 'barbers'), where('uid', '==', item.barber));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
          setBarberName(userData.displayName);
        } else {
          console.log('Nenhum barbeiro encontrado com o id:', item.barber);
        }
      };
  
      fetchBarberName();
    }, [item.barber]);
  
    return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.viewuser}>
        <Text style={styles.users}>
          {barberName} - {item.time} - {item.date}
        </Text>
    </View>
    </TouchableOpacity>
    );
  };

  const handleVoltar = () => {
    navigation.goBack(); 
  };
  const handleGoHome = () => {
    navigation.navigate('HomeClient', {uid: uid})
  }

  return (
    <View style={styles.container}>

        <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
         <Icon name="chevron-right" size={40} color='#F2DDB6'  />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoHome} style={{...styles.vector2}} >
         <Icon name="home" size={40} color='#F2DDB6' />
        </TouchableOpacity>

        <Text style={styles.myAppointments}>My Appointments</Text>

        <View style={styles.rectangle}/>

        <View style={styles.appointment}>
            <View style={styles.rectangle3}>
              <Text style = {styles.selectDate }>{selectedDate ? selectedDate.toLocaleDateString() : 'All appointments'}</Text>
            </View>
            <View style={styles.rectangle2}>
                <FlatList
                  data={appointments}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <AppointmentItem item={item} onPress={() => navigation.navigate('AppointmentDetails', { appointment: item })} />}
                />
            </View>
        </View>

        <View style={{position: 'absolute', bottom: 30, width: '40%', right: 24}}> 
        <Button 
          title={"Clear Filter"}
          onPress={() => {
            setSelectedDate(null);
          }}
          color={'#D98236'}
        />
      </View>

      <View style={{position: 'absolute', bottom: 30, width: '40%', left: 24}}> 
        <Button
          title="Select day"
          onPress={() => {
            setDatePickerVisible(true);
          }}
          color={'#D98236'}
        />

        {datePickerVisible && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode={'date'}
            display="default"
            onChange={(event, selectedDate) => {
              setDatePickerVisible(false);
              if (selectedDate) {
                setSelectedDate(selectedDate);
              }
            }}
          />
        )}
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
  appointmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  appointmentText: {
    fontSize: 10,
  },
  rectangle: {
    width: "100%",
    height: 588,
    backgroundColor: '#F2E8DC',
    position: 'absolute',
    top: 212,
    left: 0,
  },
  rectangle2: {
    width: 267,
    height: 350,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  rectangle3: {
    width: 267,
    height: 48,
    backgroundColor: '#3F3939',
    position: 'absolute',
    top: -48,
    left: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectDate: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
  },
  appointment: {
    width: 267,
    height: 432,
    position: 'absolute',
    top: 324,
    left: 47,
  },
  myAppointments: {
    width: "100%",
    height: 52,
    position: 'absolute',
    top: 97,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 32,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  users: {
    width: '90%',
    alignContent: 'center',
    backgroundColor:'#f5f5f5cf',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5,
    margin: 10,
    color: '#3F3939',
    textAlign: 'auto',
    fontWeight: 'bold',
  },
  viewuser: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
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

