import React, { useEffect, useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';


import HomeClient from './HomeClient';

export default Scheduling = () => {

  const [selected, setSelected] = useState(false);
  
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
      
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={() => setSelected(!selected)}     
      
      
      
      />


     
      
    
          
          
      <View style={styles.group}>
        <View style={styles.rectangle}></View>
        <Text style={styles.scheduleText}>Schedule your appointment !</Text>
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
    width: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  optionBarber: {
    flexDirection: 'row',
    alignItems: 'center',
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
  group2: {
    height: 107,
    position: 'absolute',
    top: 181,
  },
  day: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  dayTable: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 70,
  },
  rectangle12: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3F3939',
  },
  dayTableText: {
    width: 71.06,
    height: 22.35,
    position: 'absolute',
    top: 6.94,
    left: 25.08,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '700',
  },
  october: {
    width: 145,
    height: 22,
    position: 'absolute',
    top: 7,
    left: 113,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '700',
  },
  group3: {
    height: 107,
    position: 'absolute',
    top: 323,
  },
  hour: {
    width: 198,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 41,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  hourTable: {
    width: 279,
    height: 37,
    position: 'absolute',
    top: 70,
  },
  hourTableText: {
    width: 71.06,
    height: 22.35,
    position: 'absolute',
    top: 7,
    left: 48,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '700',
  },
  group4: {
    height: 183,
    position: 'absolute',
    top: 462,
  },
  chooseYourBarber: {
    width: 238,
    height: 52,
    position: 'absolute',
    top: 0,
    left: 21,
    textAlign: 'center',
    color: '#F2DDB6',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  barber: {
    width: 208,
    height: 22,
    position: 'absolute',
    top: 13,
    left: 61,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '700',
  },
  rectangle13: {
    width: 21,
    height: 21,
    position: 'absolute',
    top: 16,
    left: 27,
    border: '2px #D9D9D9 solid',
  },
  rectangle14: {
    width: 21,
    height: 21,
    position: 'absolute',
    top: 58,
    left: 27,
    border: '2px #D9D9D9 solid',
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