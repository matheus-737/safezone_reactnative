import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import MapScreen from './screens/MapScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Add') {
              iconName = 'add';
            } else if (route.name === 'Map') {
              iconName = 'map';
            }
            return <Ionicons name={iconName} size={40} color={color} />;
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#333',
            borderBottomWidth: 1,
            borderBottomColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'SAFEZONE' }} />
        <Tab.Screen name="Add" component={AddScreen} options={{ title: 'Adicionar Registro' }} />
        <Tab.Screen name="Map" component={MapScreen} options={{ title: 'Mapa' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
