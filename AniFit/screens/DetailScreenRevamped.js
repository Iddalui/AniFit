import React, {useState,Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert,FlatList,TouchableOpacity, RecyclerViewBackedScrollView} from 'react-native';
import {createAppContianer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import InformationSheet from '../screens/InfoScreen';



export default class ScreenDetails extends Component{
    
    
    
    constructor(props)
    {
      super(props);
      this.state={Name1:'',Age2:'',Weight3:'',Calorie4:''};
    }
    Info=()=>
    {
      var N1=(this.state.Name1);
      var A2=(this.state.Age2);
      var Wt3=(this.state.Weight3);
      var Cal4=(this.state.Calorie4);
  
      var R=(N1,A2,Wt3,Cal4)
      alert(R);
    }
   render(){
    return(
        
        <View style = {styles.container}>
           
            <Text>Name</Text>
            <TextInput 
            style={styles.input}
            placeholder='Fullname'
            onChangeText={Name1=> this.setState({Name1})}/>
            <Text>Age</Text>
            <TextInput 
            keyboardType='numeric'
            style={styles.input}
            placeholder='Age'
            onChangeText={Age2=> this.setState({Age2})} />
            <Text>Weight</Text>
            <TextInput
            keyboardType='numeric'
            onChangeText={Weight3=> this.setState({Weight3})}
             style={styles.input}
            placeholder='Weight' />
            <Text>Calorie Goal</Text>
            <TextInput 
             onChangeText={Calorie4=> this.setState({Calorie4})}
            keyboardType='numeric'
            style={styles.input}
            placeholder='Goal'/>
            
            
            <Button
            
          title="Confirm" style={styles.button}
          onPress={this.Info}
        />
            <Text>name: {name},age:{age},weight: {weight},calorie: {calorie}</Text>
            
            
                </View>

                
    
    )
    }  
};





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