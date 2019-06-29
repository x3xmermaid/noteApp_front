/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Picker, ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from '../components/headerNoteAdd'
import styles from '../assets/style'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'

// type Props = {};
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      category: [],
      pickCategory: '',
      note: ''
    }

  }
  componentDidMount(){
    axios.get(`http://192.168.6.119:3001/category`).then(
      res => {
        const data = res.data
        this.setState({
          category: data.data
        })
      }
    ).catch(function(err){
      console.log(err)
      throw err
    })
  }

  render() {
    console.log(this.state.category)
    return (
      <View style={styles.container}>
        <Header titleHeader={"Note Add"} sqlTitle={this.state.title} sqlNote={this.state.note} pickCategory={this.state.pickCategory} ></Header>
        <TextInput
        onChangeText={(data) => this.setState({ title: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {1} placeholder={"ADD TITLE ..."}>{}</TextInput>
        <TextInput
        onChangeText={(data) => this.setState({ note: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD DESCRIPTION ..."}>{}</TextInput>
        <Text style={styles.textCategory}>{"CATEGORY"}</Text>
        <View style={styles.pickerShadow}>
          <Picker
            selectedValue={this.state.pickCategory}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({pickCategory: itemValue})}>
            {this.state.category.map((item, index) => {
                    return (
                        <Picker.Item label={item.category} value={item.no}/>
                    )
            })}
          </Picker>
        </View>
      </View>
    );
  }
}


