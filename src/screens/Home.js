/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal, TouchableHighlight,Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView,  Image, ImageBackground, FlatList, Alert} from 'react-native';
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
import lodash from 'lodash'
let styles = require('../assets/style')
import {connect} from 'react-redux'
import {fetchNotes, deleteNotes, getSearch} from '../redux/actions/notes'
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
            isSearch: ''
            // modalVisible: true
        }
        // console.log("mermaid 4 you")
    }
    _onPress= (value, value2, value3, value4) => {
        const {navigation} = this.props
        navigation.navigate('NoteEdit', {
          title: value,
          note: value2,
          id: value3,
          id_category: value4
        })
        console.log(this.props.notes.notes)
    }
    componentDidMount(){

      this.getData();
     
    }
    getData = () => {
      this.props.dispatch(fetchNotes(null, this.props.notes.sort, this.props.notes.idCategory, null))
      
    }
    getSearch = (value) => {
      // this.setState({
      //   isSearch: value
      // })
      // this.props.dispatch({type:"SET"})
      // console.log("bler2"+value)
      if(value == undefined){
        this.props.dispatch(getSearch(this.props.notes.search, this.props.notes.sort, this.props.notes.idCategory, null))
      }else{
        this.props.dispatch({type:"SET_SEARCH", payload: value})
        this.props.dispatch({type:"SET_LIMIT", payload: 6})
        this.props.dispatch(getSearch(value, this.props.notes.sort, this.props.notes.idCategory, null))
      }
      // this.props.dispatch(fetchNotes(value,null ,null, null))
    }
    _onLongPress = (id, index) => {
      Alert.alert(
        'Delete', 'Are you sure delete this notes ?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => 
              this.props.dispatch(deleteNotes(id, index))
              // this.props.dispatch({type:"DELETE", index:index})
              // console.log("blerbler")
          },
        ],
        {cancelable: true}
      )
    }
    handleLoadMore = () => {
      let search = null
      this.props.dispatch({type:"SET_LIMIT", payload: this.props.notes.pageLimit + 3})
      if(this.props.notes.nextPage !== 0){
        if(this.props.notes.search !== ''){  
          search = this.props.notes.search
          this.props.dispatch(getSearch(search,this.props.notes.sort ,this.props.notes.idCategory, this.props.notes.pageLimit))
        }else{
          this.props.dispatch(fetchNotes(search,this.props.notes.sort ,this.props.notes.idCategory, this.props.notes.pageLimit))
        }
      }
          console.log("hia"+search);
    }
    renderItem = ({item, index}) => {
      if(item.color == null){
        item.color = 'aqua'  
      }
      if(item.category == null){
        item.category = 'default'
      }
      return    (
          <TouchableOpacity 
          onLongPress={() => this._onLongPress(item.id, index)} 
          delayLongPress={1500}
          onPress={() =>  this._onPress(item.title, item.note, item.id, item.id_category)}>
              <View style={[styles.box, {backgroundColor:item.color}] } >  
                  <Text style={styles.textDateList}>{moment(item.time).format("DD MMM YYYY").toString()}</Text>
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
      // console.log('render'+this.props.notes.isRefresh)
       if(this.props.notes.notes === 'empty'){
        
        this.props.dispatch({type: 'SET_NOTES', payload: []})
      }
    return (
        <View style={styles.container}>
            {this.state.Pop == 1 && <Pop/>}
            <Head />
            <View style={styles.body}>
            <TextInput
            onChangeText={lodash.debounce(this.getSearch, 1000)}
             style={styles.searchBody} placeholder={`SearchBar...`}>{}</TextInput>
            <View style={{height:410}}>
            <FlatList
            data={(this.props.notes.search !== '') ? this.props.notes.searchNotes : this.props.notes.notes}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            numColumns={2}
            refreshing={this.props.notes.fetching}
            onRefresh={(this.props.notes.search !== '') ? this.getSearch : this.getData }
            onEndReachedThreshold={0.1}
            onEndReached={this.handleLoadMore}
            // extraData={this.props.notes.notes}
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