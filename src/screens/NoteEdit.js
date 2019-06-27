/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from '../components/headerNoteAdd'
import styles from '../assets/style'
import { TextInput } from 'react-native-gesture-handler';


// type Props = {};
export default class App extends Component {
  constructor(){
    super();
    this.state={
      
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Header titleHeader={"Note Add"}></Header>
        <TextInput
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD TITLE ..."}>{}</TextInput>
        <TextInput
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD DESCRIPTION ..."}>{}</TextInput>
        <Text style={{color:'black', marginLeft:50}}>{"CATEGORY"}</Text>
        <View style={styles.pickerShadow}>
          <Picker
            selectedValue={this.state.category}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({category: itemValue})
            }>
            <Picker.Item label="Programming" value="java" />
            <Picker.Item label="Psikology" value="js" />
            <Picker.Item label="Biology" value="js" />
          </Picker>
        </View>
      </View>
    );
  }
}


