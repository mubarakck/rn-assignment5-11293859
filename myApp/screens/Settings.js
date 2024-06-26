import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Settings() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const styles = isDarkTheme ? darkStyles : lightStyles;


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Language</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>My Profile</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Contact Us</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.themeContainer}>
        <Text style={styles.themeText}>Theme</Text>
        <Switch
          trackColor={{ false: "lightgreen", true: "lightgreen" }}
          thumbColor={isDarkTheme ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>




    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  themeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },
  arrow: {
    fontSize: 18,
    color: '#bbb',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  themeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});