import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1:any, lon1:any, lat2:any, lon2:any) => {
  const R = 6371e3; // Radius of the Earth in meters
  const valOne = (lat1 * Math.PI) / 180;
  const valTwo = (lat2 * Math.PI) / 180;
  const valThree = ((lat2 - lat1) * Math.PI) / 180;
  const valFour = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(valThree / 2) * Math.sin(valThree / 2) +
    Math.cos(valOne) * Math.cos(valTwo) * Math.sin(valFour / 2) * Math.sin(valFour / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // in meters
  return distance;
};


// Mock API call function
const unlockHomeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or error response
      Math.random() > 0.2 ? resolve('Home unlocked successfully!') : reject('Failed to unlock the home.');
    }, 2000); // Simulate 2 seconds network delay
  });
};
const DetailScreen = ({route}:any) => {
  const [unlockVisible, setUnlockVisible] = useState(false);
  const [loading, setLoading] = useState(false);
const {propertyLocation} =route.params.property
  // Mock data for user location and property location
  const userLocation = { latitude: 28.7041, longitude: 77.1025 }; // Static user location (New Delhi, India)

  useEffect(() => {
    // Calculate distance between user and property
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      propertyLocation.latitude,
      propertyLocation.longitude
    );

    // Check if distance is within 30 meters
    if (distance <= 30) {
      setUnlockVisible(true);
    }
  }, []);
  const handleUnlock = async () => {
    setLoading(true);
    try {
      const response:any = await unlockHomeApi();
      Alert.alert('Success', response);
    } catch (error:any) {
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
     
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.name}>Beautiful Home</Text>
      <Text style={styles.description}>A beautiful home with 3 bedrooms and 2 bathrooms.</Text>

        <Button disabled={!unlockVisible} title="Unlock" onPress={handleUnlock} />
        {loading &&
        <ActivityIndicator size="large" color="#3498db"  />
        }
    </View>
  );
};


export default DetailScreen;
