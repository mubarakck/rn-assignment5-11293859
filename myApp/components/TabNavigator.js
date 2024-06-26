import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Homepage from '../screens/Homepage';
import  MyCards from '../screens/MyCards';
import  Statistics from '../screens/Statistics';
import  Settings from '../screens/Settings';


const Tab = createBottomTabNavigator();


export default function TabNavigator() {
    return (
<NavigationContainer>

    <Tab.Navigator>
                <Tab.Screen name= "Home" component={Homepage} 
                options={{headerShown:false, tabBarIcon: ({focused})=>{
                    return (
                    <View>
                        <Image source={require('../assets/home.png')}/>
                    </View>
                    )
                }
                
                }}  
                />


                <Tab.Screen name= "MyCards" component={MyCards} 
                options={{headerShown:false, tabBarIcon: ({focused})=>{
                    return (
                    <View>
                        <Image source={require('../assets/myCards.png')}/>
                    </View>
                    )
                }
                
                }}  
                
                
                
                />
                <Tab.Screen name= "Statistics" component={Statistics}
                options={{headerShown:false, tabBarIcon: ({focused})=>{
                return (
                    <View>
                    <Image source={require('../assets/statistics.png')}/>
                    </View>
                )
                }
            
            }}  
                
                
                
                
                
                />
                <Tab.Screen name= "Settings" component={Settings}
                options={{headerShown:false, tabBarIcon: ({focused})=>{
                    return (
                    <View>
                        <Image source={require('../assets/settings.png')}/>
                    </View>
                    )
                }
                
                }}  
                
                
                
                
                />


    </Tab.Navigator>
 </NavigationContainer>

)};