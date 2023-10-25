import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: 'Restaurant A',
      cuisine: 'Italian',
      image: require('../../Images/item1.jpg'), // Replace with your image
    },
    {
      id: 2,
      name: 'Restaurant B',
      cuisine: 'Chinese',
      image: require('../../Images/item2.jpg'), 
    },
    {
      id: 3,
      name: 'Restaurant C',
      cuisine: 'Chinese',
      image: require('../../Images/item1.jpg'), 
    },
    {
      id: 4,
      name: 'Restaurant D',
      cuisine: 'Chinese',
      image: require('../../Images/item2.jpg'), 
    },
    {
      id: 5,
      name: 'Restaurant E',
      cuisine: 'Chinese',
      image: require('../../Images/item1.jpg'), 
    },
    // Add more restaurant objects here
  ];

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <View style={styles.container}>
      {isNavbarOpen && (
        <View style={styles.navbar}>
          <Text style={styles.navbarItem}>Home</Text>
          <Text style={styles.navbarItem}>Browse</Text>
          <Text style={styles.navbarItem}>Favorites</Text>
          <Text style={styles.navbarItem}>Profile</Text>
        </View>
      )}
      <TouchableOpacity onPress={toggleNavbar} style={styles.navbarButton}>
        <Text style={styles.navbarButtonText}>
          {isNavbarOpen ? 'VHGB' : 'VHGB'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.restaurantCard}>
            <Image source={item.image} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{item.name}</Text>
            <Text style={styles.cuisine}>{item.cuisine}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={<Text style={styles.title}>Discover Restaurants</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navbar: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    zIndex:10
  },
  navbarButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    zIndex:11
  },
  navbarButtonText: {
    fontSize: 18,
  },
  navbarItem: {
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  restaurantCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cuisine: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Home;
