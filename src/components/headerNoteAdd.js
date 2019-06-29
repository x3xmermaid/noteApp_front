import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, Button} from 'react-native'
import {withNavigation} from 'react-navigation'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Sidebar from '../components/sideBar'
import HeaderItem from '../components/headerItem'
import HeaderImage from '../components/headerImage'
import axios from 'axios'

class Header extends Component {
    constructor(props){
        super(props);
        this._onPressButtonPop= this._onPressButtonPop.bind(this)
        this._onPressButtonSideBar= this._onPressButtonSideBar.bind(this)
        console.log(this.props.sqlTitle)
        this.state = {
            Pop: false,
            SideBar: false,
            sqlTitle: '',
            sqlNote: '',
            pickCategory: '',
            imageSource: require('../assets/img/check.png'),
            imageSource2: require('../assets/img/back.png'),
            style1: styles.iconHeader,
            style2: styles.imgHeader,
            sqlID: ''
        }
        
        
    }
    _onPressButtonPop = (value) => {
        this.setState({
            Pop:  value,
        })
    }
    _onPressButtonSideBar = (value) => {
        this.setState({
            SideBar:  value,
        })
    }
    _onPressButtonBack = () => {
        const { navigation } = this.props;
        navigation.navigate('Home')
    }
    _postNote= () =>{
        // console.log(this.state.sqlTitle)
        axios({
            method: 'post',
            url: 'http://192.168.6.119:3001/notes',
            data: {
                title: this.state.sqlTitle,
                note: this.state.sqlNote,
                time: 'now()',
                id_category: this.state.pickCategory,
            }           
          }).then(function (res){
            console.log(res)
          }).catch(function (err){
            console.log(err)
          })
        // console.log('hihay')
      }
      _postPatch= () =>{
        // console.log(this.state.sqlTitle)
        let url = 'http://192.168.6.119:3001/notes?where=id+'+this.state.sqlID
        console.log(url)
        axios({
            method: 'patch',
            url: url,
            data: {
                title: this.state.sqlTitle,
                note: this.state.sqlNote,
                id_category: this.state.pickCategory,
            }           
          }).then(function (res){
            console.log(res)
          }).catch(function (err){
            console.log(err)
          })
        // console.log('hihay')
      }
      componentDidMount(){

      }
      componentWillReceiveProps(props){
        this.setState({
                sqlNote: props.sqlNote,
                sqlTitle: props.sqlTitle,
                pickCategory: props.pickCategory,
                sqlID: props.id
            })
      }
      _handler = () =>{
        if(this.state.sqlID == undefined){
            this._postNote();
        }else{
            this._postPatch();
        }
      }
    render(){
        // console.log(this.props.titleHeader)
        return (
            <View >
                {/* {this.state.Pop == true && <Pop _postNote={this._postNote}/>} */}
                {this.state.SideBar == true && <Sidebar _onPressButtonSideBar={this._onPressButtonSideBar}/>}
                {/* <Pop></Pop> */}
                <View style={styles.header}>
                    <HeaderImage imageSource={this.state.imageSource2} _onPressButton={this._onPressButtonBack} headerStyle={this.state.style2}></HeaderImage>
                    <HeaderItem headerText={this.props.titleHeader}></HeaderItem>
                    {/* <Button onPress={this._handler} title="submit" style={styles.popBox}></Button> */}
                    <HeaderImage imageSource={this.state.imageSource} _onPressButton={this._handler} headerStyle={this.state.style1}></HeaderImage>
                    {/* <HeaderImage imageSource={this.state.imageSource} onPressButton={this._postNote} headerStyle={this.state.style1}></HeaderImage> */}
                    {/* <HeaderImage imageSource={this.state.imageSource}></HeaderImage> */}
                    {/* <TouchableWithoutFeedback onPress={() => this._onPressButtonSideBar(true)} >
                        <ImageBackground source={require('../assets/img/img.png')} style={styles.itemHeader} ></ImageBackground>
                    </TouchableWithoutFeedback> */}
                        {/* <Text style={styles.textHeader}>{"Mermaid"}</Text>
                    <TouchableWithoutFeedback onPress={() => this._onPressButtonPop(true)} >
                        <ImageBackground source={require('../assets/img/sort-512.png')} style={styles.iconHeader} ></ImageBackground>
                    </TouchableWithoutFeedback> */}
                </View>
            </View>
        )
    }
}

export default withNavigation(Header)