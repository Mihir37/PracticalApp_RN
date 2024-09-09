import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import DeviceDetailsScreen from './src/screens/DeviceDetailsScreen';
import AccountScreen from './src/screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#6a0dad',
          tabBarInactiveTintColor: '#808080',
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Device Details') {
              iconName = 'mobile';
            } else if (route.name === 'Account') {
              iconName = 'user';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Device Details"
          component={DeviceDetailsScreen} // Replace with your DeviceDetailsScreen component
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen} // Replace with your AccountScreen component
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
