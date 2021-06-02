import React, {useState,Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';



export default class PostCalculator extends Component{
    constructor(props)
    {
      super(props);
      this.state={Num1:0,Num2:0};
    }
    Sum=()=>
    {
      var N1=parseInt(this.state.Num1);
      var N1=parseInt(this.state.Num2);
  
      var R=N1+N2;
      alert(R);
    }
    
    render(){
        return(
    
            <View>
            <TextInput 
            style={styles.input}
            placeholder='Calorie'
            onChangeText={(val)=> setName(val)}/>
             <TextInput 
            style={styles.input}
            placeholder='Intake'
            onChangeText={(val)=> setName(val)}/>
            <Button title="Total" onPress={this.Sum}/>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
        
    },

    input:{
        borderWidth:1,
        borderColor:'#000000',
        padding:10,
        margin:10,
        width:350,

    },
});