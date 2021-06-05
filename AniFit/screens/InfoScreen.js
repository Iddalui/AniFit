import React, {useState,Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import {NavigationContianer} from 'react-navigation/native';
import{createStackNavigator} from 'react-navigation/stack';
import FindScreen from './DetailScreen';



const InfoScreen=({navigation})=> {

return(
    <View style = {styles.container}>
<Text>Name: {name},Age:{age},Weight: {weight},Calorie: {calorie}</Text>
</View>
)

};

export default InfoScreen;




const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
        
    }
})