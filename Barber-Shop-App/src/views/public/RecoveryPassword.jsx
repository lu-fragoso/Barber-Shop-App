import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default RecoveryPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const auth = getAuth(); 

  const handleVoltar = () => {
    navigation.goBack(); 
    setEmail('')
};
const sendEmail = () => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert('Password reset email sent!');
      setEmail('')
      setTimeout(() => {
        navigation.navigate('Login');
      }, 500)
    })
    .catch((error) => {
      Alert.alert('Error sending password reset email:', error);
    });
};

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.tela}>
      
      <View style={styles.vector2}>
        <Icon name="lock" size={80} color='#F2DDB6' />
      </View>
      
      <View style={styles.rectangle}>
        <Text style={styles.titleText}>Enter your email to recover your password</Text>

        <TextInput
            style={{...styles.rectangle8, top:100, left:24}}
            placeholder='Enter your E-mail'
            placeholderTextColor="black"
            type = "text"
            onChangeText={text => setEmail(text)}
            value={email}
          />

      
      </View>
      <View style={styles.group4}>
        <TouchableOpacity
          style={{...styles.rectangle9}}
          onPress={sendEmail}
          >
          <Text style={styles.sendEmail}>Send E-mail</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.group11}>
        <TouchableOpacity
          style={{...styles.rectangle9}}
          onPress={handleVoltar}
          > 
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#262626',
    flexDirection:"row"
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
    height: 84,
    position: 'absolute',
    top: 300,
    left: 24,
  },
  rectangle8: {
    width: 312,
    height: 47,
    position: 'absolute',
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    paddingLeft:15,
    fontSize: 20,
  },
  email: {
    justifyContent:'center',

    color: '#262626',
    fontSize: 24,
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
  titleText: {
    top:15,
    width: 251,
    height: 52,
    color: '#3F3939',
    fontSize: 20,
    fontWeight: '700',
    position: 'absolute',
    left: 55,
    textAlign: 'center',
  },
  group2: {
    width: 312,
    height: 89,
    position: 'absolute',
    top: 363,
    left: 25,
  },
  confirmPassword: {
    width: 213,
    height: 37,
    color: '#262626',
    fontSize: 24,
    //fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 0,
    left: 48,
  },
  group3: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 714,
    left: 215,
  },
  changePassword: {
    width: 110.23,
    height: 25.10,
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    top: 13.45,
    left: 5.57,
  },
  group4: {
    width: 122,
    height: 52,
    position: 'absolute',
    top: 714,
    left: 16,
  },
  cancel: {
    left: 28,
    top: 14,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
  },
  vector1: {
    width: 30,
    height: 43.60,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 306,
  },
  vector2: {
    position: 'absolute',
    top: 104,
    justifyContent:'center',
  },
  vector3: {
    width: 40,
    height: 40,
    backgroundColor: '#F2DDB6',
    position: 'absolute',
    top: 22,
    left: 23,
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
    ////fontFamily: 'Inter',
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
    ////fontFamily: 'Inter',
    fontWeight: '400',
    position: 'absolute',
    top: 45,
    left: 17,
  },
  rectangle9: {
    width: 130,
    height: 45,
    position: 'absolute',
    backgroundColor: '#D98236',
    borderRadius: 10,
  },
  group11: {
    width: 130,
    height: 45,
    left: 24,
    top: 718,
    position: 'absolute',
  },
  cancel: {
    left: 19,
    top: 10,
    position: 'absolute',
    textAlign: 'center',
    justifyContent:'center',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  sendEmail: {
    left: 13,
    top: 10,
    position: 'absolute',
    textAlign: 'center',
    justifyContent:'center',
    color: 'white',
    fontSize: 20,
    //fontFamily: 'Inter',
    fontWeight: '400',
    //wordWrap: 'break-word',
  },
  group4: {
    width: 130,
    height: 45,
    right: 24,
    top: 718,
    position: 'absolute',
  },
});
