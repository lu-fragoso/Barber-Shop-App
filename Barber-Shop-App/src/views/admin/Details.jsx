import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, getDocs, query, where, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default Details = ({navigation, route}) => {
  const { uid, displayName } = route.params;
  const [userData, setUserData] = useState(null);
  const [isBarberActive, setIsBarberActive] = useState(false);

  console.log(uid)
  console.log(displayName)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, 'barbers'), where('displayName', '==', displayName));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setIsBarberActive(userData.isActive);
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


  const deleteBarber = async () => {
    Alert.alert(
      "Delete Barber",
      `Are you sure you want to delete barber ${displayName}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: async () => {
            try {
              const q = query(collection(db, 'barbers'), where('displayName', '==', displayName));
              const querySnapshot = await getDocs(q);
              if (!querySnapshot.empty) {
                const barberDoc = querySnapshot.docs[0];
      
                // Delete the barber document
                await deleteDoc(barberDoc.ref);
                navigation.navigate('HomeAdmin');
                console.log('Barber deleted successfully');
              } else {
                console.log('No documents found with displayName:', displayName);
              }
            } catch (error) {
              console.error('Error deleting barber:', error);
            }
          }
        }
      ]
    );
  };
  
  const toggleBarberActiveStatus = async () => {
    try {
      const q = query(collection(db, 'barbers'), where('displayName', '==', displayName));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const barberDoc = querySnapshot.docs[0];
        const currentStatus = barberDoc.data().isActive;
        await updateDoc(barberDoc.ref, { isActive: !currentStatus });
        setIsBarberActive(!currentStatus);
        
        if (!currentStatus) {
          Alert.alert("Success", `${displayName} has been activated.`);
        } else {
          Alert.alert("Success", `${displayName} has been deactivated.`);
        }

        console.log('Barber active status toggled successfully');
      } else {
        console.log('No documents found with displayName:', displayName);
      }
    } catch (error) {
      console.error('Error toggling barber active status:', error);
    }
  };




  const handleVoltar = () => {
    navigation.goBack(); 
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
      <View style={styles.group}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.title}>Full Name</Text>
        <Text style={styles.fullName}>{userData?.displayName||'error'}</Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.rectangle8}></View>
        <Text style={styles.user}>E-mail</Text>
        <Text style={styles.email}>{userData?.email||'error'}</Text>
      </View>
      
      <Icon name="user" size={80} color='#F2DDB6' style={{...styles.vector2}}/>
      
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>

      <View style={{position: 'absolute', bottom: 30, width: '40%', right: 24}}> 
        <Button 
          title="Delete Barber" 
          onPress={async () => {
            await deleteBarber();
          }}
          color={'red'} 
        />
      </View>

      <View style={{position: 'absolute', bottom: 30, width: '40%', left: 24}}> 
        <Button
          title={isBarberActive ? "Desative Barber" : "Active Barber"}
          onPress={toggleBarberActiveStatus}
          color={'#D98236'}
        />
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
    height: 81,
    position: 'absolute',
    top: 297,
    left: 23,
  },
  rectangle8: {
    width: 312,
    height: 47,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    position: 'absolute',
    top: 34,
    left: 0,
  },
  title: {
    width: 118,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 83,
    textAlign: 'center',
  },
  fullName: {
    width: 280,
    height: 25,
    color: '#262626',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 45,
    left: 17,
  },
  group2: {
    width: 312,
    height: 84,
    position: 'absolute',
    top: 400,
    left: 24,
  },
  user: {
    width: 80,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 112,
  },
  email: {
    width: 280,
    height: 37,
    color: '#262626',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group3: {
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
    //fontFamily: 'Inter',
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
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 42,
    left: 17,
  },
  group4: {
    width: 197,
    height: 58,
    position: 'absolute',
    top: 707,
    left: 80,
  },
  rectangle9: {
    width: 197,
    height: 58,
    backgroundColor: '#D98236',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  changePassword: {
    width: 178,
    height: 28,
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    top: 15,
    left: 9,
  },
  vector1: {
    position: 'absolute',
    top: 22,
    right: 23,
  },
  vector2: {
    position: 'absolute',
    justifyContent:'center',
    top: 115,
    //left: 147,
  },
  vector3: {
    position: 'absolute',
    top: 22,
    left: 23,
  },
});
