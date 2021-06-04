import React, {useState,Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput,ScrollView} from 'react-native';



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
  
      var R=(N1/N2/N2)*703;
      alert(R);
    }
    
    render(){
        return(
            <ScrollView>
            <View style = {styles.container}>
                <Text>BMI Calculator</Text>
            <TextInput 
            style={styles.input}
            placeholder='Weight in Pounds'
            keyboardType='numeric'
            onChangeText={Num1=> this.setState({Num1})}/>
             <TextInput 
            style={styles.input}
            placeholder='Height in Inches'
            keyboardType='numeric'
            onChangeText={Num2=> this.setState({Num2})}/>
            <Button title="Compute" onPress={this.Sum}/>
            <Text>BMI Categories:</Text>
               <Text> Underweight less than 18.5</Text>
               <Text> Normal weight = 18.5–24.9</Text>
               <Text> Overweight = 25–29.9</Text>
                <Text>Obesity = BMI of 30 or greater</Text>
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                
            </View>
            </ScrollView>
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
        padding:8,
        margin:10,
        width:350,
        
    },
});