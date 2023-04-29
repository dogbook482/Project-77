import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Space from './screens/SpaceCraft';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component() {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name='Spacecraft' Component={Space}/>
         <Stack.Screen name='Star Map' Component={StarMap}/>
         <Stack.Screen name='Daily Picture' Component={DailyPic}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
