
import React from 'react';
import SplashScreen from './component/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/auth/Login';
import Signup from './component/auth/Signup';
import Home from './component/Home/Home';
import ProfilePage from './component/ProfilePage';
import AdminProductCreation from './component/AdminProductCreation';

const Stack = createStackNavigator();
function App(): JSX.Element {

  return (
    <>
      {/* <SplashScreen /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Create" component={AdminProductCreation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default App;
