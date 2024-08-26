import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }:any) => {
  const [properties, setProperties] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // Mock API function
  const fetchProperties = async () => {
    // Simulate a network request with a timeout
    setTimeout(() => {
      const mockData = [
        {
          id: '1',
          name: 'Ocean View Apartment',
          description: 'A beautiful apartment with an ocean view.',
          image: 'https://via.placeholder.com/150',
          propertyLocation : { latitude: 28.7041, longitude: 77.1026 }
        },
        {
          id: '2',
          name: 'Mountain Cabin',
          description: 'A cozy cabin in the mountains.',
          image: 'https://via.placeholder.com/150',
          propertyLocation : { latitude: 128.7041, longitude: 77.1026 }

        },
        {
          id: '3',
          name: 'City Loft',
          description: 'A modern loft in the heart of the city.',
          image: 'https://via.placeholder.com/150',
          propertyLocation : { latitude: 228.7041, longitude: 77.1026 }

        },
        {
          id: '4',
          name: 'Country House',
          description: 'A spacious house in the countryside.',
          image: 'https://via.placeholder.com/150',
          propertyLocation : { latitude: 38.7041, longitude: 77.1026 }

        },
        // Add more mock properties here
      ];
      setProperties(mockData);
      setLoading(false);
    }, 2000); // Simulate a 2-second delay
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const renderProperty = ({ item }:any) => (
    <TouchableOpacity 
      style={styles.tile}
      onPress={() => navigation.navigate('Detail', { property: item })}
    >
      <Image source={{ uri: item.image }} style={styles.propertyImage} />
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <Text style={styles.propertyDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Property Listings</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
      ) : (
        <FlatList
          data={properties}
          renderItem={renderProperty}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.propertyList}
        />
      )}
    </View>
  );
};


export default HomeScreen;
