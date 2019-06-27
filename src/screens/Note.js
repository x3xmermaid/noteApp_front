/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     // counter: 0
  //   }
  // }
  // handlerCounter = () => {
  //   let count = this.state.counter;
  //   this.setState({
  //     counter: count+1
  //   })
  // }
  // componentDidMount = () => {
  //   setInterval() => {
  //     let count = this.state.counter;
  //     this.setState({
  //       counter: count+1
  //     })
  //   }, 1000
  // }
  // componentWillUnmount = () => {
    
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Note Native</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {/* <TouchableOpacity onPress={this.handlerCounter}></TouchableOpacity> */}
        {/* <text>Home Screen</text> */}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
