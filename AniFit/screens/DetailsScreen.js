import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import FlatButton from '../screens/button';


const FindScreen = ({navigation}) => {
    const[name, setName]= useState('');
    const[age, setAge]= useState('');
    const[weight, setWeight]= useState('');
    const[calorie, setCalories]= useState('');
    return(
        
        <View style = {styles.container}>
            <Text>Name</Text>
            <TextInput 
            style={styles.input}
            placeholder='Fullname'
            onChangeText={(val)=> setName(val)}/>
            <Text>Birthday</Text>
            <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='Age'
            onChangeText={(val)=> setAge(val)} />
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
            
            <Button
          title="Confirm" style={styles.button}
          onPress={() => Alert.alert('Submission Confirmed')}
        />
            <Text>name: {name},age:{age},weight: {weight},calorie: {calorie}</Text>
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

    },
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:80,
        backgroundColor: '#0000FF',
        
    }
})