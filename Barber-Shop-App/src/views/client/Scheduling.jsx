import React, { useEffect, useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';


import HomeClient from './HomeClient';

export default Scheduling = () => {

  const [selected, setSelected] = useState([]);

  const handleCheckboxPress = (item) => {
    if (selected === item.key) {
      setSelected(null);
    } else {
      setSelected(item.key);
    }
  };
  
  //function toggle(id){
  //  
  //  let index = selected.findIndex(i => i === id);
  //  let arrSelecteds = [...selected];
  //  if (index !== -1){
  //    arrSelecteds.splice(index, 1);
  //  }else{
  //    multiple? arrSelecteds.push(id): (arrSelecteds = [id]);
  //  }
  //  setSelected(arrSelecteds);
  //}
  
  const navigation = useNavigation();
  
  const navigateToHomeClient = () => {
    navigation.navigate('HomeClient');
  };
  
  const handleVoltar = () => {
    navigation.goBack(); 
  };
  
  const profissionais = [
    {key:'1', value:'Profissional 1'},
    {key:'2', value:'Profissional 2'},
    {key:'3', value:'Profissional 3'},
  ]   

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVoltar} style={{...styles.vector1}} >
        <Icon name="chevron-right" size={40} color='#F2DDB6'  />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToHomeClient} style={{...styles.vector2}} >
        <Icon name="home" size={40} color='#F2DDB6' />
      </TouchableOpacity>
      <Text style={styles.scheduling}>Scheduling</Text>
      

     <View style={styles.options}>
        <FlatList 
          data={profissionais} 
          keyExtractor={item=> item.value} 
          renderItem={({item}) =>  
          <BouncyCheckbox
            size={25}
            fillColor="#D98236"
            unfillColor="#FFFFFF"
            text={item.value}
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={styles.optionBarber}
            onPress={() => handleCheckboxPress(item)} 
              />
          } />     
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
    top: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options2: {
    width: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  group: {
    top:300,  
    width: 219,
    height: 70,
    position: 'absolute',
  },
  optionBarber: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    textDecorationLine: "none"
  },
  optext: {
    marginLeft: 12,
    color: '#555',
    fontSize: 20,
    fontWeight: '600',
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