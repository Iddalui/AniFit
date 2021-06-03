import React from 'react';
import {View, Text, Button, StyleSheet,ScrollView} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.head}> HIIT</Text>
<Text style={styles.body}>While “hard work, short rests” is the essence of HIIT, there are five main variables that can change the nature of your HIIT workout massively. The first two are your work and rest durations. Working for 40 seconds and resting for 20 is significantly different to resting for 40 and working for 20, with longer work periods generally being better for improving endurance and shorter ones better for power.

Then there’s the intensity of the work periods. With HIIT you need to be pushing hard to get the most benefit from it, and it’s also important to try and maintain a consistent level of effort across the work periods. That means it’s not just about going all-out, because you won’t be able to sustain it across the workout. </Text>
<Text style = {styles.head}>Strength training</Text>
<Text style={styles.body}>physical activity designed to improve muscular fitness by exercising a specific muscle or muscle group against external resistance, including free-weights, weight machines, or your own body weight, according to the American Heart Association.</Text>
<Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
<Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
<Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
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