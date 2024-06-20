import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import axios from 'axios';

const AddScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [matricula, setMatricula] = useState('');
  const [setor, setSetor] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handleSave = async () => {
    const data = {
      name,
      matricula,
      setor,
      observacoes,
      image,
      latitude: location?.latitude,
      longitude: location?.longitude,
    };

    try {
      const response = await axios.post('http://192.168.0.109:5000/api/data/add', data);
      console.log('Dados salvos:', response.data);
      navigation.navigate('Map', { location: data }); // Passando a localização para a tela de Map
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Nº Matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="Nº Matrícula"
        placeholderTextColor="#ccc"
        value={matricula}
        onChangeText={text => setMatricula(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Setor</Text>
      <TextInput
        style={styles.input}
        placeholder="Setor"
        placeholderTextColor="#ccc"
        value={setor}
        onChangeText={text => setSetor(text)}
      />

      <Text style={styles.label}>Observações</Text>
      <TextInput
        style={styles.input}
        placeholder="Observações"
        placeholderTextColor="#ccc"
        value={observacoes}
        onChangeText={text => setObservacoes(text)}
      />

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Escolher Imagem</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity onPress={getLocation} style={styles.button}>
        <Text style={styles.buttonText}>Capturar Localização</Text>
      </TouchableOpacity>
      {location && (
        <Text style={styles.locationText}>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      )}

      <TouchableOpacity onPress={handleSave} style={[styles.button, styles.saveButton]}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#eaba72',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveButton: {
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  locationText: {
    color: '#fff',
    marginBottom: 20,
  },
});

export default AddScreen;


