import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, PermissionsAndroid } from 'react-native';

const AdminProductCreation = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const takePhoto = async () => {
    const hasCameraPermission = await requestCameraPermission();
    if (!hasCameraPermission) {
      console.warn('Camera permission denied');
      return;
    }

    // Simulated photo URL for demonstration
    const photo = 'https://via.placeholder.com/200x200';
    setProductImage(photo);
  };

  const saveProduct = () => {
    // Send the product data to your backend for storage.
    // Include productName, productDescription, productPrice, and productImage.
    // You can use a service like Axios to send a POST request to your server.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={productDescription}
        onChangeText={setProductDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={setProductPrice}
      />
      <Button title="Take Photo" onPress={takePhoto} />
      {productImage !== '' && <Image source={{ uri: productImage }} style={styles.selectedImage} />}
      <View style={styles.buttonContainer}>
        <Button title="Save Product" onPress={saveProduct} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginVertical: 16,
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default AdminProductCreation;
