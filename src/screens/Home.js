/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal, TouchableHighlight,Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView,  Image, ImageBackground, FlatList} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
// import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
// import {Content} from 'native-base'
import Counter from '../components/counter'
import Head from '../components/headerHome'
import Fab from '../components/fab'
import Sidebar from '../components/sideBar'
import DummyData from '../assets/dummy'
import Pop from '../components/popBox'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
let styles = require('../assets/style')


// type Props = {

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            Title: 'Mermaid',
            Pop: 0,
            // modalVisible: true
        }
    }
    _onPress= (value, value2) => {
        const {navigation} = this.props
        navigation.navigate('NoteEdit', {
          title: value,
          note: value2
        })
    }
    componentDidMount(){
      axios.get(`http://192.168.6.119:3001/notes`).then(
        res => {
          const data1 = res.data
          console.log(data1)
        }
      )
      .catch(function(error) {
        console.log(error);
         // ADD THIS THROW error
          throw error;
        });
    }
      
    render() {
    return (
        <View style={styles.container}>
            {this.state.Pop == 1 && <Pop/>}
            <Head />
            <View style={styles.body}>
                {/* <Head/> */}
                {/* <View style={styles.space}></View> */}
            {/* <ScrollView contentContainerStyle={styles.body}> */}
            <TextInput style={styles.searchBody}>{"Search ..."}</TextInput>
            <FlatList
                data={DummyData}
                numColumns={2}
                renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() =>  this._onPress(item.Title, item.Note)} >
                                <View style={styles.box} >
                                    <Text style={styles.textDateList}>{item.date}</Text>
                                    <Text numberOfLines={1} style={styles.textTitle}>{item.Title}</Text>
                                    <Text numberOfLines={1} style={styles.textCategory}>{item.Category}</Text>
                                    <Text numberOfLines={4} style={styles.textDetail}>{item.Note}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />

                {/* <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View> */}
            {/* </ScrollView> */}
            </View>
                <Fab/>
            
            <View >

            </View>        
        </View>
        
      
    );
  }
}


