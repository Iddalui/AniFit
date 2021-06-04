import React from 'react';
import {View, Text, Button, StyleSheet,ScrollView} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return(
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {styles.head}> Underweight</Text>
<Text style={styles.body}>If underweight a person must eat 300-500 calories a day above their maintenance level for slow weight gain, for fast weight gain a person must eat 700-1000 calories above their maintenance.Strength training can also help by building up your muscles through strenous activity.</Text>
 <Text style={styles.header}>1.Lunges(25 each leg)</Text>
 <Text style={styles.body}>Stand up straight, flexing your abdominal muscles.
Extend one leg like you’re taking a step, then lean forward like you’re kneeling until your knees are at 90-degree angles.
Push back on your heel to lift yourself back up to your initial position.</Text>
<Text style={styles.header}>2.Squats(25 reps 4 sets)</Text>
<Text style={styles.body}>Stand up straight so that your feet are hips-width distance apart.
Put your hands on your hips and flex your abdominal muscles.
Begin lowering yourself down using only your legs, as if you’re about to sit down, and get into a seated position until your thighs are parallel to the ground. Keep your upper body as still as possible.
Raise yourself back up to your original position</Text>
<Text style={styles.header}>3.Pushups(10 reps 5 sets)</Text>
<Text style={styles.body}>Lie face down on the ground.
Put your hands on the ground, palms flat, with your arms out at your sides and your hands shoulder-width apart.
Slowly push your body up until your arms are fully extended. Keep your back and legs straight so that your body makes a straight line.
Slowly lower yourself back down until your nose nearly touches the floor.</Text>
<Text style={styles.header}>4.Planking (1 minute 3 sets)</Text>
<Text style={styles.body}>Lay on the floor with your elbows under your shoulders, hands flat on the floor and core engaged. Keeping your forearms and knees on the floor slowly raise yourself upwards until your body is in a straight line from your knees to your head. Hold the position for as long as you can.</Text>
<Text style={styles.header}>Diet</Text>
<Text style={styles.body}>Eating at least 5 portions of a variety of fruit and vegetables every day.
Basing meals on potatoes, bread, rice, pasta or other starchy carbohydrates. Choose wholegrain where possible.
Having some dairy or dairy alternatives (such as soya drinks and yoghurts). Have whole (full-fat) milk until you build your weight back up.
Eating some beans, pulses, fish, eggs, meat and other protein. Aim for 2 portions of fish every week – 1 of which should be oily, such as salmon or mackerel.
Choosing unsaturated oils and spreads, such as sunflower or rapeseed, and eating them in small amounts.
Drinking plenty of fluids. The government recommends 6 to 8 glasses a day. But try not to have drinks just before meals to avoid feeling too full to eat.</Text>
<Text style = {styles.head}>Overweight</Text>
<Text style={styles.body}>If overweight a person must reduce the calories taken a day below their maintenance</Text>
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
    },
    header:{
        fontWeight:'bold',
        textAlign: 'left',
        flexDirection:'row'
    }
})