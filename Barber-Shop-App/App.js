import Login from './src/views/public/login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="HomeClient" component={HomeClient} options={{ headerShown: false }}/>
      <Stack.Screen name="ProfileClient" component={ProfileClient} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeBarber" component={HomeBarber} options={{ headerShown: false }}/>

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

//<Stack.Screen 
//        name="NavigatorClient" 
//        component={NavigatorClient}
//      />
//      <Stack.Screen 
//        name="NavigatorBarber" 
//        component={NavigatorBarber}
//     />
    