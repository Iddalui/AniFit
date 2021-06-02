import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
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
        <React.Fragment>
        <View style = {styles.container}>
                <Text style>Calories Chart</Text>
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
  
                </View>

        
        </React.Fragment>       
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})