import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { db } from '../../../firebaseConfig';
import { collection,getDocs } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

export default HomeAdmin = ({navigation}) => {
  const [users,setUsers] = useState([])
  
  const fetchUsers = async () => {
    const usersCollection = collection(db, 'barbers');
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    setUsers(usersList);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchUsers);
    fetchUsers();
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.rectangle7}></View>
      <View style={styles.group11}>
        <Text style={{...styles.welcomeText,top: 10}}>Welcome,</Text>
        <Text style={{...styles.welcomeText, left: 120,fontSize: 32}}>Admin!</Text>
      </View>
      <Text style={styles.titleText}>Barber Users</Text>
      <View style={styles.schedule}>
        <Text style={styles.user}>Users</Text>

        <View style={styles.rectangle11}>
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.viewuser}>
                <Text 
                  style={styles.users}
                  onPress={() => {
                    navigation.navigate('Details', {
                      uid: item.uid,
                      displayName: item.displayName
                    });
                  }}
                >
                  {item.displayName}
                </Text>
              </View>
            )}
          />
        </View>
     
      </View>
      
      <TouchableOpacity
      style={{...styles.button, right: 20,bottom: 30}}
      onPress={()=>navigation.navigate('RegisterBarber')}>
       
        <View style={{...styles.button, backgroundColor: '#3F3939',}}/>
        <Text style={styles.addBarber}>Add Barber</Text>

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
  addBarber:{
    color: '#FFFFFF',
    fontSize: 20, 
    textAlign: 'center', 
    padding: 10, 
    fontWeight: 'bold',
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
  titleText: {
    width: 251,
    height: 52,
    color: '#3F3939',
    fontSize: 28,
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
    top: 290,
    left: 47,
  },
  rectangle11: {
    width: 267,
    height: 380,
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
  button: {
    width: 150,
    height: 50,
    position: 'absolute',
  
  },
  user: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    position: 'relative',
    top: 9,
    textAlign: 'center',
    justifyContent: 'center'
  },
  users: {
    width: '90%',
    alignContent: 'center',
    backgroundColor:'#f5f5f5cf',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5,
    margin: 15,
    color: '#3F3939',
    textAlign: 'auto',
    fontWeight: 'bold',
  },
  viewuser: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
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
});


