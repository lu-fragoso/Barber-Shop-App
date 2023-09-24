import Login from './src/views/public/login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeClient" component={HomeClient}/>
      <Stack.Screen name="HomeBarber" component={HomeBarber}/>

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
    