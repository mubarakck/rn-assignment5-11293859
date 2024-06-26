import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import Homepage from '../screens/Homepage';
import MyCards from '../screens/MyCards';
import Statistics from '../screens/Statistics';
import Settings from '../screens/Settings';
import { ThemeContext } from '../screens/ThemeContext';

const Tab = createBottomTabNavigator();


  export default function TabNavigator() {
    const { isDarkTheme } = useContext(ThemeContext);
  

  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: isDarkTheme ? '#0b82e3' : '#0b82e3',
          tabBarInactiveTintColor: isDarkTheme ? '#888' : '#888',
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#000' : '#fff',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={require('../assets/home.png')} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MyCards"
          component={MyCards}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={require('../assets/myCards.png')} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={require('../assets/statistics.png')} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={require('../assets/settings.png')} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}