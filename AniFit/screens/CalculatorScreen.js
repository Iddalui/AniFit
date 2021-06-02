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
      var N2=parseInt(this.state.Num2);
  
      var R=N1+N2;
      alert(R);
    }
    
    render(){
        return(
    
            <View style = {styles.container}>
            <TextInput 
            style={styles.input}
            placeholder='Calorie'
            onChangeText={Num1=> this.setState({Num1})}/>
             <TextInput 
            style={styles.input}
            placeholder='Intake'
            onChangeText={Num2=> this.setState({Num2})}/>
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
        backgroundColor: '#8fcbbc'
        
    },
    input:{
        borderWidth:1,
        borderColor:'#000000',
        padding:8,
        margin:10,
        width:350,

    },
});