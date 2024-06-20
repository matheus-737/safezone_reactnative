import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    
    <ImageBackground 
  source={require('../assets/fundoapp.jpg')}


  style={styles.background}
>
   <View style={styles.container}>
    <Feather name="alert-triangle" size={64} color="#eaba72" style={styles.icon} />
      <Text style={styles.title}>SafeZone</Text>
    </View>
</ImageBackground>
   
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'cover', 
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#eaba72',
    marginBottom: 10,
  },
});

