import React, { useEffect, useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SelectList } from 'react-native-dropdown-select-list'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default Scheduling = ({navigation, route}) => {
  const { displayName } = route.params;
  const [userData, setUserData] = useState(null);  
  const [barbes, setBarbers] = useState([]);
  const [selected, setSelected] = useState([]);

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

  const handleVoltar = () => {
    navigation.goBack(); 
  };

  const handleAgendar = () => {
    console.log('Agendamento concluido')
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






//{options.map((op, index)=>(
//  <View style = {styles.optionBarber}>
//    <TouchableOpacity 
//    style={styles.options}
//    onPress={()=> toggle(op?.id)}>
//      
//      {selected.findIndex(i => i === id) !== -1 ? (<Icon name='check-bold' color={'#3EBD93'} size={20} />) : null}
//    
//    </TouchableOpacity>
//    <Text style={styles.optext}>{op?.text}</Text>
//  
//  </View>
//   ))}



//<View style={styles.group}>
//        <View style={styles.rectangle}></View>
//        <Text style={styles.scheduleText}>Schedule your appointment !</Text>
//      </View>