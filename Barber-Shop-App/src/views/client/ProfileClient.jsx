import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default ProfileClient = ({navigation, route}) => {
  const { uid } = route.params;
  const [userData, setUserData] = useState(null)
  const [newDisplayName, setNewDisplayName] = useState('');

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

  useEffect(() => {
    if (userData && userData.displayName) {
      setNewDisplayName(userData.displayName);
    }
  }, [userData]);


  const handleUpdateData = async () => {
    if (typeof newDisplayName === 'string') {
      const q = query(collection(db, 'users'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const newUserData = {
          displayName: newDisplayName
        };
  
        try {
          await updateDoc(userDoc.ref, newUserData);
          Alert.alert('User document updated successfully');
        } catch (error) {
          console.error('Error updating user document:', error);
        }
      } else {
        console.log('No documents found to update');
      }
    } else {
      console.error('newDisplayName must be a string');
    }
  };
  
  const handleVoltar = () => {
    navigation.goBack(); 
  };
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.rectangle}></View>
        <View style={styles.group}>
          <Text style={styles.title}>Full Name</Text>
          <TextInput
            style={styles.rectangle8}
            onChangeText={setNewDisplayName}
            value={newDisplayName}
          />
        </View>
        <View style={styles.group2}>
          <View style={styles.rectangle8}></View>
          <Text style={styles.user}>E-mail</Text>
          <Text style={styles.email}>{userData?.email||'error'}</Text>
      </View>
      
      <View style={{position: 'absolute', bottom: 30, width: '50%'}}> 
        <Button title="Update" onPress={handleUpdateData} color={'#D98236'}/>
      </View> 
   
      <Icon name="user" size={80} color='#F2DDB6' style={{...styles.vector2}}/>
      
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=> navigation.navigate('HomeClient', {uid: uid})} style={{...styles.vector3}} >
        <Icon name="home" size={40} color='#F2DDB6' />
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#262626',
    flexDirection:"row"
  },
  button: {
    backgroundColor: '#F2DDB6',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
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
    fontSize: 20,
    paddingLeft:15,
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
