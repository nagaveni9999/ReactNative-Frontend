

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handlePlaceOrder = () => {
    if (!name || !phoneNumber || !email || !address) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    // You can add more specific validations for phone number, email, etc.

    // Implement your order placement logic here
    // You can send the user details to your server or perform any other necessary actions
    console.log('Order placed:', { name, phoneNumber, email, address });
    navigation.navigate('OrderSuccess');
  };

  const handleGoBack = () => {
    // Navigate back to the Cart page
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../assets/hero1.jpg")} // Replace with the actual path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        {/* Place Order Button */}
        <Button title="Place Order" onPress={handlePlaceOrder} style={styles.button} />

        {/* Green Back Button */}
        <View style={styles.backButtonContainer}>
          <Button title="Back " onPress={handleGoBack} color="green" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    padding: 15,
    position: 'relative',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white', // Set label text color
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
    padding: 10,
    backgroundColor: 'white', // Set input background color
    opacity: 1.0, // Set input opacity
  },
  button: {
    marginTop: 10, // Adjust the spacing as needed
  },
  // backButtonContainer: {
  //   position: 'down',
  //   bottom: 0.1,
    
  //   right: 10,
  // },
  backButtonContainer: {
    position: 'absolute',
    bottom: 10, // Adjust the bottom position as needed
    right: 10,
    width: 80, // Set the width of the button
    height: 10, // Set the height of the button
  },
});

export default CheckoutScreen;
