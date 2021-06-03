import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  var cars = ["Saab", "Volvo", "BMW"];
  
const HomeScreen = ({navigation}) => {
    return(
  <ScrollView>
      
        <View style = {styles.container}>
                <Text> Welcome to AniFit</Text>

                <View style={styles.ContainerText}>
                <Text style={styles.boldText}>  Your Current Calories Chart:</Text>
                </View>
  <LineChart
    data={{
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", " Day 5", "Day 6"],
      datasets: [
        {
          data: [
            Math.random() * 1200,
            Math.random() * 1200,
            Math.random() * 1200,
            Math.random() * 1200,
            Math.random() * 1200,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 10
    }}
  />

<Text>{"\n"}</Text>
<View style={styles.ContainerText}>
  <Text style={styles.boldText}>                    TABLE OF CONTENT                </Text>
  </View>   

  <View style={styles.ContainerText}>
   <Text style={styles.boldText}>Details</Text>
   <Text style={styles.ListText}>Input Information for tracking</Text>

   <Text>{"\n"}</Text>

   

   <Text style={styles.boldText}>Calculator</Text>
   <Text style={styles.ListText}>Calculate total calorie intake</Text>

   <Text>{"\n"}</Text>

   

   <Text style={styles.boldText}>Info</Text>
   <Text style={styles.ListText}>Display inputted information in the details</Text>

   <Text>{"\n"}</Text>
   

    <Text style={styles.boldText}>Timer</Text>
   <Text style={styles.ListText}>Personal minute timer</Text>

   
   <Text>{"\n"}</Text>

   <Text style={styles.boldText}>Fitness</Text>
   <Text style={styles.ListText}>Recommendations for fitness</Text>
      </View> 
    
      <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
          </View>   
                </ScrollView>
       
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',

    },
    ListText:{
 
    },
    
    boldText:{
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      backgroundColor:'#ffa726',
    }
,
    ContainerText:{
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:50,
      paddingRight:50,
      //borderRadius:10,
      //borderWidth: 1,
      backgroundColor:'#68a0cf',
    }
})

