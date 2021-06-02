import React, {useState,Component} from 'react';

import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import SearchingDropDown from '../screens/SearchDropDown';
import PostCalculator from '../screens/Calcu';


const PostScreen  = ({navigation}) => {
    const [dataSource] = useState(['apple', 'banana', 'mango', 'egg', 'yogurt', 'orange', 'soda', 'cereal'])
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",
  ])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  const pressHandler=()=>{
    navigation.navigate('Calcu');
  }
 
  
  return (
    
    <View style={styles.container}>

    <TextInput
      style={styles.input}
      placeholder="Search"
      placeholderTextColor='black'
      onChangeText={onSearch}

    />
    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, }}> List of foods</Text>
      <View style={{
        flexWrap: 'wrap', flexDirection: 'row',
        justifyContent: 'center'

      }}>
        {
          dataSource.map((item, index) => {
            return (
              <View style={{
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 80, width: 80, backgroundColor: randomColor()
              }}>
                <Text style={{ fontSize: 15, }}>
                  {item}
                </Text>
              </View>
            )
          })
        }
      </View>
      
    </View>

    
    {
      searching &&
      <SearchingDropDown
        onPress={() => setSearching(false)}
        dataSource={filtered} />
    }

<Button title="Total" onPress={()=>navigation.navigate(pressHandler)}/>
     
  </View>
);
  }


export default PostScreen;

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