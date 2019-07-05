import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, Button} from 'react-native'
import {withNavigation} from 'react-navigation'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Sidebar from '../components/sideBar'
import HeaderItem from '../components/headerItem'
import HeaderImage from '../components/headerImage'
import axios from 'axios'
import { connect } from 'react-redux';
import {fetchCategory} from '../redux/actions/category'
import {fetchNotes, addNotes, editNotes} from '../redux/actions/notes'

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
        this.props.dispatch({type:"SET_ID", payload: null})
        const { navigation } = this.props;
        navigation.navigate('Home')
    }
      componentDidMount(){

      }
      componentWillReceiveProps(props){
        // console.log("hahaha"+props.sqlID)
        this.setState({
                sqlNote: props.sqlNote,
                sqlTitle: props.sqlTitle,
                pickCategory: props.pickCategory,
                sqlID: props.sqlID
            })
      }
      _handler = () =>{
          console.log(this.state.sqlID)
        //   let search = null
        if(this.state.sqlID === undefined){
            this.props.dispatch(addNotes(this.state.sqlTitle, this.state.sqlNote, this.state.pickCategory))
            // this.props.notes.notes
        }else{
            this.props.dispatch(editNotes(this.state.sqlID, this.state.sqlTitle, this.state.sqlNote, this.state.pickCategory))
            if(this.props.notes.search !== ''){
                // search = this.props.notes.search
                console.log("data")
                this.props.dispatch(getSearch(this.props.notes.search,this.props.notes.sort ,this.props.notes.idCategory, this.props.notes.pageLimit))
            }else{
                console.log("data2")
                this.props.dispatch(fetchNotes(this.props.notes.search,this.props.notes.sort ,this.props.notes.idCategory, this.props.notes.pageLimit))
            }
        }
        // 
        const { navigation } = this.props;
        // this
        // this.props.dispatch(fetchNotes(null, null, null, null))
        navigation.navigate('Home')
      }
    render(){
        console.log(this.props.notes.idNotes)
        return (
            <View >
                {/* {this.state.Pop == true && <Pop _postNote={this._postNote}/>} */}
                {this.state.SideBar == true && <Sidebar _onPressButtonSideBar={this._onPressButtonSideBar}/>}
                {/* <Pop></Pop> */}
                <View style={styles.header}>
                    <HeaderImage imageSource={this.state.imageSource2} _onPressButton={this._onPressButtonBack} headerStyle={this.state.style2}></HeaderImage>
                    <HeaderItem headerText={this.props.titleHeader}></HeaderItem>
                    <HeaderImage imageSource={this.state.imageSource} _onPressButton={this._handler} headerStyle={this.state.style1}></HeaderImage>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      notes: state.home,
      category: state.category
    }
}
// export default withNavigation(Header)
export default connect(mapStateToProps)(withNavigation(Header))