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
import { SearchBar } from 'react-native-elements';
import moment from 'moment'
let styles = require('../assets/style')
import {connect} from 'react-redux'
import {fetchNotes} from '../redux/actions/notes'
// import 'react-native-navigation'
// import redux

// type Props = {
class App extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            Title: 'Mermaid',
            Pop: 0,
            isLoading: false,
            Note: []
            // modalVisible: true
        }
    }
    _onPress= (value, value2, value3, value4) => {
        const {navigation} = this.props
        navigation.navigate('NoteEdit', {
          title: value,
          note: value2,
          id: value3,
          id_category: value4
        })
    }
    componentDidMount(){
      // axios.get(`http://192.168.6.119:3001/notes?join=category+id_category+no`).then(
      //   res => {
      //     const data = res.data
      //     this.setState({
      //       Note: data.data
      //     })
      //     // return data.data;
      //   }
      //   )
      //   .catch(function(error) {
      //     console.log(error);
      //     // ADD THIS THROW error
      //     throw error;
      //   });
        // console.log(this.state.Note)
      this.getData();
    }
    componentWillUpdate(){
      
    }
    getData = () => {
      this.props.dispatch(fetchNotes())
    }
    renderItem = ({item, index}) => {
      let color= ''
      if(item.id_category == 1){
        color = '#2FC2DF'  
      }if (item.id_category == 2){
        color = '#FAD06C'
      }
      if (item.id_category == 3){
        color = 'red'
      }
      if (item.id_category == 4){
        color = '#FF92A9'
      }
      return    (
          <TouchableOpacity  onPress={() =>  this._onPress(item.title, item.note, item.id, item.id_category)}>
              <View style={[styles.box, {backgroundColor:color}] } >
                  <Text style={styles.textDateList}>{moment(item.time).format("YYYY-MM-DD")}</Text>
                  <Text numberOfLines={1} style={styles.textTitle}>{item.title}</Text>
                  <Text numberOfLines={1} style={styles.textCategory2}>{item.category}</Text>
                  <Text numberOfLines={4} style={styles.textDetail}>{item.note}</Text>
              </View>
          </TouchableOpacity>
        )
      }
    _keyExtractor = (item, index) => item.id
    render() {
      let tgl = moment(new Date()).format("YYYY-MM-DD")
      console.log(this.props.notes)
    return (
        <View style={styles.container}>
            {this.state.Pop == 1 && <Pop/>}
            <Head />
            <View style={styles.body}>
                {/* <Head/> */}
                {/* <View style={styles.space}></View> */}
            {/* <ScrollView contentContainerStyle={styles.body}> */}
            <TextInput style={styles.searchBody} placeholder={`SearchBar...`}>{}</TextInput>
            <View style={{height:410}}>
            {/* <FlatList
                data={this.state.Note}
                numColumns={2}
                
                renderItem={({item}) => {
                        let color = ''
                        if(item.id_category == 1){
                          color = '#2FC2DF'  
                        }if (item.id_category == 2){
                          color = '#FAD06C'
                        }
                        if (item.id_category == 3){
                          color = 'red'
                        }
                        if (item.id_category == 4){
                          color = '#FF92A9'
                        }
                        return (
                            <TouchableOpacity  onPress={() =>  this._onPress(item.title, item.note, item.id, item.id_category)}>
                                <View style={[styles.box, {backgroundColor:color}] } >
                                    <Text style={styles.textDateList}>{moment(item.time).format("YYYY-MM-DD")}</Text>
                                    <Text numberOfLines={1} style={styles.textTitle}>{item.title}</Text>
                                    <Text numberOfLines={1} style={styles.textCategory2}>{item.category}</Text>
                                    <Text numberOfLines={4} style={styles.textDetail}>{item.note}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            /> */}
            <FlatList
            data={this.props.notes.notes}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            numColumns={2}
            refreshing={this.props.notes.fetching}
            onRefresh={this.getData}
            />
            </View>

            </View>
                <Fab/>
            
            <View >

            </View>        
        </View>
        
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.home
  }
}

export default connect(mapStateToProps)(App)