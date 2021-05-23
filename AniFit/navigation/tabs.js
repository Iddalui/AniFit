import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen.js';
import DetailsScreen from '../screens/DetailsScreen.js';
import SleepScreen from '../screens/SleepScreen.js';
import PostScreen from '../screens/PostScreen.js';
import FitnessScreen from '../screens/FitnessScreen.js';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style= {{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#e32f45'
    }}>
      {children}
    </View>
  </TouchableOpacity>
)


const Tabs = () => {
  return(
    <Tab.Navigator tabBarOptions = {{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        ... styles.shadow
      }
    }}
>
<Tab.Screen name="Home" component={HomeScreen} 
  options={{
  tabBarIcon: ({focused}) => (
<View style={{alignItems:'center',justifyContent:'center', top:10}}>
<Image source={require('../assets/home.png')} resizeMode="contain" style={{ width: 25, height: 25,tintColor: focused ? '#e32f45' : '#748c94'}} />
  <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    HOME
    </Text>
</View>
  )}}/>
  
  <Tab.Screen name="Details" component={DetailsScreen} 
  options={{
  tabBarIcon: ({focused}) => (
<View style={{alignItems:'center',justifyContent:'center', top:10}}>
<Image source={require('../assets/details.png')} resizeMode="contain" style={{ width: 25, height: 25,tintColor: focused ? '#e32f45' : '#748c94'}} />
  <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    DETAILS
    </Text>
</View>
  )}}/>
  <Tab.Screen name="Post" component={PostScreen}
  options= {{
    tabBarIcon: ({focused}) => (
      <Image
      source={require('../assets/add.png')}
      resizeMode="contain"
      style={{
        width:30,
        height:30,
        tintColor: '#fff'
      }}
      />
    ),
    tabBarButton: (props) => (
      <CustomTabBarButton {...props} />
    )
  }}
/>




  <Tab.Screen name="Sleep" component={SleepScreen} 
  options={{
  tabBarIcon: ({focused}) => (
<View style={{alignItems:'center',justifyContent:'center', top:10}}>
<Image source={require('../assets/sleep.png')} resizeMode="contain" style={{ width: 25, height: 25,tintColor: focused ? '#e32f45' : '#748c94'}} />
  <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    SLEEP
    </Text>
</View>
  )}}/>
    <Tab.Screen name="Fitness" component={FitnessScreen} 
  options={{
  tabBarIcon: ({focused}) => (
<View style={{alignItems:'center',justifyContent:'center', top:10}}>
<Image source={require('../assets/fitness.png')} resizeMode="contain" style={{ width: 25, height: 25,tintColor: focused ? '#e32f45' : '#748c94'}} />
  <Text style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
    FITNESS
    </Text>
</View>
  )}}/>
</Tab.Navigator>  
  );
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  }
})

export default Tabs;


