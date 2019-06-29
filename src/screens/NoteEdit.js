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
import axios from 'axios'

// type Props = {};
export default class App extends Component {
  constructor(){
    super();
    console.log(`${Date.now()}. constructor`)
    this.state ={
      refresh: 0,
      title: '',
      note: '',
      pickCategory: '',
      category: [],
      id: '',
      id_category: ''
    }
    
  }
  componentWillMount(){
    console.log(`${Date.now()}. willMount`)
  }
  componentDidMount(){
    const {navigation} = this.props;
    const title = navigation.getParam('title', 'null')
    const note = navigation.getParam('note', 'null')
    const id = navigation.getParam('id', 'null')
    const id_category = navigation.getParam('id_category', 'null')
    // console.log(`${Math.floor(Date.now())}. didMount`+id)
    this.setState({
      title: title,
      note: note,
      id_category: id_category,
      id: id
    })

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
    console.log(this.state.id)
    // let display = `NUmber refresh : ${this.state.refresh}`
    
    return (
      
      <View style={styles.container}>
        <Header titleHeader={"Note Edit"} sqlTitle={this.state.title} sqlNote={this.state.note} pickCategory={this.state.pickCategory} id={this.state.id}></Header>
        <TextInput
        onChangeText={(data) => this.setState({ title: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {1} placeholder={"ADD TITLE ..."}>{this.state.title}</TextInput>
        <TextInput
        onChangeText={(data) => this.setState({ note: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD DESCRIPTION ..."}>{this.state.note}</TextInput>
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


