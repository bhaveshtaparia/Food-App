import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfilePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../Images/user.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Bhavesh Taparia</Text>
      <Text style={styles.email}>UditJoshi@gmail.com</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Order History Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Order History</Text>
        {/* Render order history items here */}
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Delivery Addresses</Text>
        {/* Render user's addresses here */}
      </View>

      {/* Payment Methods Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Payment Methods</Text>
        {/* Render user's saved payment methods here */}
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Settings</Text>
        {/* Add buttons or options for various settings */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 5,
    fontSize: 16,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfilePage;
