import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';


const FindScreen = ({navigation}) => {
    const[name, setName]= useState('Matt');
    const[birthday, setBirthday]= useState('22');
    const[weight, setWeight]= useState('183');
    const[calorie, setCalories]= useState('1500');
    return(
        
        <View style = {styles.container}>
            <Text>Name</Text>
            <TextInput 
            style={styles.input}
            placeholder='Fullname'
            onChangeText={(val)=> setName(val)}/>
            <Text>Birthday</Text>
            <TextInput 
            style={styles.input}
            placeholder='Birthday'
            onChangeText={(val)=> setBirthday(val)} />
            <Text>Weight</Text>
            <TextInput
            keyboardType='numeric'
            onChangeText={(val)=> setWeight(val)}
             style={styles.input}
            placeholder='Weight' />
            <Text>Calorie Goal</Text>
            <TextInput 
            onChangeText={(val)=> setCalories(val)}
            keyboardType='numeric'
            style={styles.input}
            placeholder='Goal'/>
            
            <Text>name: {name},birthday:{birthday},weight: {weight},calorie: {calorie}</Text>
                </View>
    
    )
};

export default FindScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
        
    },
    input:{
        borderWidth:1,
        borderColor:'#000000',
        padding:8,
        margin:10,
        width:350,

    }
})