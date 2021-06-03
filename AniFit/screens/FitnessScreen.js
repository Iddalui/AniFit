import React from 'react';
import {View, Text, Button, StyleSheet,ScrollView} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.head}> Underweight</Text>
<Text style={styles.body}>If underweight a person must eat 300-500 calories a day above their maintenance level for slow weight gain, for fast weight gain a person must eat 700-1000 calories above their maintenance.Strength training can also help by building up your muscles through strenous activity.</Text>
 
<Text style = {styles.head}>Overweight</Text>
<Text style={styles.body}>If overweight a person must reduce the calories taken a day below their maintenance</Text>
                </View>
                </ScrollView>
    )
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    head:{
        fontWeight:'bold'
    },
    body:{
        alignItems:'center'
    }
})