/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import { createStackNavigator, createAppContainer, navigation} from "react-navigation";
import Header from '../components/headerNoteAdd'
import styles from '../assets/style'
import dummy from '../assets/dummy'
import { TextInput } from 'react-native-gesture-handler';


// type Props = {};
export default class App extends Component {
  constructor(){
    super();
    console.log(`${Date.now()}. constructor`)
    this.state ={
      refresh: 0,
      title: '',
      note: '',
    },
    setInterval(() => {
      this.setState(previousState => {
        return {
          refresh: previousState.refresh+1
        }
      })
    }, 2000)
    
  }
  componentWillMount(){
    console.log(`${Date.now()}. willMount`)
  }
  componentDidMount(){
    const {navigation} = this.props;
    const title = navigation.getParam('title', 'null')
    const note = navigation.getParam('note', 'null')
    // console.log(`${Math.floor(Date.now())}. didMount`+id)
    this.setState({
      title: title,
      note: note,
    })
    
  }
  componentWillUnmount(){
    const {navigation} = this.props;

  }
  componentWillUpdate(){
    console.log(`${Math.floor(Date.now())}. willUpdate`)
  }
  componentDidUpdate(){
    console.log(`${Math.floor(Date.now())}. didUpdate`)
  }
  render() {
    console.log(`${Math.floor(Date.now())}. render`)
    // let display = `NUmber refresh : ${this.state.refresh}`
    
    return (
      
      <View style={styles.container}>
        <Header titleHeader={"Note Edit"}></Header>
        <TextInput
        style={styles.editSTyle} multiline={true} numberOfLines = {2} placeholder={"ADD TITLE ..."}>{this.state.title}</TextInput>
        <TextInput
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD DESCRIPTION ..."}>{this.state.note}</TextInput>
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


