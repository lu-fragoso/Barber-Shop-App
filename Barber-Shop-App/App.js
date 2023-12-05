import Login from './src/views/public/login';

import RegisterBarber from './src/views/admin/RegisterBarber'
import Details from './src/views/admin/Details';
import RecoveryPassword from './src/views/public/RecoveryPassword';
import MyAppointments from './src/views/client/MyAppointments';
import AppointmentDetails from './src/views/client/AppointmentDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="HomeClient" component={HomeClient} options={{ headerShown: false }}/>
      <Stack.Screen name="ProfileClient" component={ProfileClient} options={{ headerShown: false }}/>
      <Stack.Screen name="Scheduling" component={Scheduling} options={{ headerShown: false }}/>
      <Stack.Screen name="MyAppointments" component={MyAppointments} options={{ headerShown: false }}/>
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="SingUpClient" component={SingUpClient} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeBarber" component={HomeBarber} options={{ headerShown: false }}/>
      <Stack.Screen name="UserBarber" component={UserBarber} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeAdmin" component={HomeAdmin} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterBarber" component={RegisterBarber} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
      <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
}
    