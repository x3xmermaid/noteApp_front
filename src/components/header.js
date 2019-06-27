import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, TouchableWithoutFeedback} from 'react-native'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Sidebar from '../components/sideBar'
import HeaderItem from '../components/headerItem'
import HeaderImage from '../components/headerImage'

class Header extends Component {
    constructor(props){
        super(props);
        this._onPressButtonPop= this._onPressButtonPop.bind(this)
        this._onPressButtonSideBar= this._onPressButtonSideBar.bind(this)
        this.state.Title = this.props.titleHeader
        this.state = {
            Pop: false,
            SideBar: false,
            Title: '',
            imageSource: require('../assets/img/sort-512.png')
        },
        
        _onPressButtonOut = () => {
            this.setState({
                Pop:  false
            })
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
    render(){
        return (
            <View >
                {this.state.Pop == true && <Pop _onPressButtonPop={this._onPressButtonPop}/>}
                {this.state.SideBar == true && <Sidebar _onPressButtonSideBar={this._onPressButtonSideBar}/>}
                {/* <Pop></Pop> */}
                <View style={styles.header}>
                    <HeaderImage imageSource={this.state.imageSource} headerStyle={style.iconHeader}></HeaderImage>
                    <HeaderItem headerText={this.state.Title}></HeaderItem>
                    <HeaderImage imageSource={this.state.imageSource}></HeaderImage>
                    {/* <TouchableWithoutFeedback onPress={() => this._onPressButtonSideBar(true)} >
                        <ImageBackground source={require('../assets/img/img.png')} style={styles.itemHeader} ></ImageBackground>
                    </TouchableWithoutFeedback>
                        <Text style={styles.textHeader}>{"Mermaid"}</Text>
                    <TouchableWithoutFeedback onPress={() => this._onPressButtonPop(true)} >
                        <ImageBackground source={require('../assets/img/sort-512.png')} style={styles.iconHeader} ></ImageBackground>
                    </TouchableWithoutFeedback> */}
                </View>
            </View>
        )
    }
}

export default Header