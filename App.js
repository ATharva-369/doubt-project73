// import libraries and screens
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Image, View } from 'react-native';
import ReadScreen from './screens/ReadStoryScreen';
import WriteScreen from './screens/WriteStoryScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

// make default class
export default class App extends React.Component {
  render() {
    return (

  <A/>

    );
  }

}
// making the bottom-navigator
const T = createBottomTabNavigator({
  Write: { screen: WriteScreen },
  Read: { screen: ReadScreen }

},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const route=navigation.state.routeName
    if(route==="Write"){
      return <Image source={require('./assets/write.png')} style={{height:30,width:30}}/>
    }
    else if(route==="Read"){
      return <Image source={require('./assets/read.png')} style={{height:30,width:30}}/>
    }
  }
})}
)
// making the app-navigator
const A = createAppContainer(T)

// stylesheet container that has styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
