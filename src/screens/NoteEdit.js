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
import {connect} from 'react-redux'
import {fetchNotes} from '../redux/actions/notes' 
import {fetchCategory} from '../redux/actions/category' 

// type Props = {};
class App extends Component {
  constructor(){
    super();
    // console.log(`${Date.now()}. constructor`)
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
    // this.props.dispatch({type: "SET_ID", payload: id})
    this.getData();
  }
  componentWillUnmount(){
    const {navigation} = this.props;

  }
  getData = () =>{
    this.props.dispatch(fetchCategory());
  }
  render() {
    // console.log(this.state.id_category)
    // console.log(this.props.category)
    // let display = `NUmber refresh : ${this.state.refresh}`
    
    console.log(this.state.id)
    return (
      <View style={styles.container}>
        <Header titleHeader={"Note Edit"}  sqlNote={this.state.note} sqlTitle={this.state.title} pickCategory={this.state.id_category} sqlID={this.state.id}></Header>
        <TextInput
        onChangeText={(data) => this.setState({title: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {1} placeholder={"ADD TITLE ..."}>{this.state.title}</TextInput>
        <TextInput
        onChangeText={(data) => this.this.setState({note: data })}
        style={styles.editSTyle} multiline={true} numberOfLines = {4} placeholder={"ADD DESCRIPTION ..."}>{this.state.note}</TextInput>
        <Text style={styles.textCategory}>{"CATEGORY"}</Text>
        <View style={styles.pickerShadow}>
          <Picker
            selectedValue={this.state.id_category}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({id_category: itemValue })}>
            {this.props.category.category.map((item, index) => {
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

const mapStateToProps = (state) => {
  return {
    notes: state.home,
    category: state.category
  }
}
// export default withNavigation(Header)
export default connect(mapStateToProps)(App)

