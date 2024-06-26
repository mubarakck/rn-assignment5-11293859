import { View, ScrollView, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
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
          <Text style={styles.userName}>Mubarak Wumpini</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actionButtons}>

        <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/send.png')} style={styles.searchImage}/>
        </TouchableOpacity>
        <Text style={styles.actionButtonText}>Send</Text>
        </View>


        <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/recieve.png')} style={styles.searchImage} />
        </TouchableOpacity>
        <Text style={styles.actionButtonText}>Receive</Text>
        </View>


        <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/loan.png')} style={styles.searchImage} />
        </TouchableOpacity>
        <Text style={styles.actionButtonText}>Loan</Text>
        </View>

        <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/topUp.png')} style={styles.searchImage}/>
        </TouchableOpacity>
        <Text style={styles.actionButtonText}>topUp</Text>
        </View>
        
      </View>

      <View style={styles.transactionSection}>
        <View style={styles.transactionAndSeeAll}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.sellAllText}>Sell All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/apple.png')} style={styles.transactionIcon}  />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionCategory}>Apple Store</Text>
            <Text style={styles.transactionCategory}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/spotify.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionCategory}>Spotify</Text>
            <Text style={styles.transactionCategory}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12,99</Text>
        </View>
        <View style={styles.transactionItem}>
          <Image source={require('../assets/moneyTransfer.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionCategory}>Money Transfer</Text>
            <Text style={styles.transactionCategory}>Transaction</Text>
          </View>
          <TouchableOpacity>
          <Text style={styles.sellAllText}>$300</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.transactionItem}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionCategory}>Grocery</Text>
            <Text style={styles.transactionCategory}>FoodStuff</Text>
          </View>
          <Text style={styles.transactionAmount}>$8,88</Text>
        </View>


        <View style={styles.transactionItem}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionCategory}>Grocery</Text>
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
    backgroundColor: '#FFF',
  },
  homeTop: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
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
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    height: 55,
    width: 55,
  },
  searchImage: {
    width: 27,
    height: 30,
    margin: 'auto',
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
  actionButtonContainer: {
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
  },
  actionButtonText: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
  },
  transactionSection: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  transactionAndSeeAll:{
flexDirection: 'row',
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAllText: {
    color: '#007bff',
    textAlign: 'right',
    marginLeft: 190,
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
      backgroundColor: '#000', 
    },
    homeTop: {
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      marginTop: 50,
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
      color: '#bbb', 
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff', 
    },
    searchIcon: {
      marginLeft: 'auto',
      marginLeft: 'auto',
      backgroundColor: '#545c56',
      borderRadius: 30,
      height: 55,
      width: 55,
    },
    searchImage: {
      width: 24,
      height: 24,
      tintColor: '#fff', 
      margin: 'auto',
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
      marginBottom: 50,
    },
    actionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#333', // Darker background color
    },
    actionButtonText: {
      marginTop: 5,
      fontSize: 14,
      color: '#fff',
    },
    transactionSection: {
      paddingHorizontal: 20,
    },
    transactionAndSeeAll:{
      flexDirection: 'row',
    },
    transactionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff', // White color for text
    },
    sellAllText: {
      color: '#007bff', // Same color as light theme for consistency
      textAlign: 'right',
      marginLeft: 190,
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    transactionIcon: {
      marginRight: 20,
      tintColor: '#fff',
    },
    transactionDetails: {
      flex: 1,
      marginLeft: 10,
    },
    transactionCategory: {
      color: 'white', 
      
    },
    transactionAmount: {
      fontWeight: 'bold',
      color: '#fff', 
    },
  });