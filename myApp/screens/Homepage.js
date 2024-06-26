import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Homepage() {
  const { isDarkTheme } = useContext(ThemeContext);
  
  const styles = isDarkTheme ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeTop}>
        <View>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        </View>
        <View style={styles.homeTopText}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/send.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/recieve.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/loan.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/topUp.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.transactionSection}>
        <View>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.sellAllText}>Sell All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/apple.png')} />
          <View style={styles.transactionDetails}>
            <Text>Apple Store</Text>
            <Text style={styles.transactionCategory}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/spotify.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text>Spotify</Text>
            <Text style={styles.transactionCategory}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/moneyTransfer.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text>Money Transfer</Text>
            <Text style={styles.transactionCategory}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>


        <View style={styles.transactionItem}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text>Grocery</Text>
            <Text style={styles.transactionCategory}>FoodStuff</Text>
          </View>
          <Text style={styles.transactionAmount}>$8,88</Text>
        </View>


        <View style={styles.transactionItem}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text>Grocery</Text>
            <Text style={styles.transactionCategory}>FoodStuff</Text>
          </View>
          <Text style={styles.transactionAmount}>$8,88</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#FFF',
  },
  homeTop: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  homeTopText: {
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: '#888',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  searchImage: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardImage: {
    width: 380,
    height: 235,
    borderRadius: 30,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  transactionSection: {
    paddingHorizontal: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAllText: {
    color: '#007bff',
    textAlign: 'right',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionIcon: {
    marginRight: 20,
    
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    color: '#888',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  });


  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: '#000', // Dark background color
    },
    homeTop: {
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    homeTopText: {
      marginLeft: 20,
    },
    welcomeText: {
      fontSize: 16,
      color: '#bbb', // Lighter color for text
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff', // White color for text
    },
    searchIcon: {
      marginLeft: 'auto',
    },
    searchImage: {
      width: 24,
      height: 24,
      tintColor: '#fff', // White color for icon
    },
    cardContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    cardImage: {
      width: 380,
      height: 235,
      borderRadius: 30,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    actionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#333', // Darker background color
    },
    transactionSection: {
      paddingHorizontal: 20,
    },
    transactionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff', // White color for text
    },
    sellAllText: {
      color: '#007bff', // Same color as light theme for consistency
      textAlign: 'right',
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    transactionIcon: {
      marginRight: 20,
    },
    transactionDetails: {
      flex: 1,
      marginLeft: 10,
    },
    transactionCategory: {
      color: '#bbb', // Lighter color for text
    },
    transactionAmount: {
      fontWeight: 'bold',
      color: '#fff', // White color for text
    },
  });