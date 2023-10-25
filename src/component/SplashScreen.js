import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Login from './auth/Login';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isVisible) {
    return (
      <View style={styles.container}>
         <Text style={styles.appName}>
         One day, you'll create your day
          </Text> 
        <Image
          source={require('../Images/LOGOVHGB.png')}
          style={styles.logo}
        />
      </View>
    );
  }

  return <Login />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  logo: {
    width: 130,
    height: 150,
    borderRadius: 50,
  },
  appName: {
    fontSize: 15, 
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom:20,
    color: 'white',
    fontFamily: 'Arial', 
  },
});

export default SplashScreen;
