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
        this.state = {
            Pop: false,
            SideBar: false,
            imageSource: require('../assets/img/sort-512.png'),
            imageSource2: require('../assets/img/img.png'),
            style1: styles.iconHeader,
            style2: styles.imgHeader,
            modalVisible: false,
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
                {/* <Sidebar></Sidebar> */}
                <View style={styles.header}>
                    <HeaderImage imageSource={this.state.imageSource2} _onPressButton={this._onPressButtonSideBar} headerStyle={this.state.style2}></HeaderImage>
                    <HeaderItem headerText={"Home"}></HeaderItem>
                    <HeaderImage imageSource={this.state.imageSource} _onPressButton={this._onPressButtonPop} headerStyle={this.state.style1}></HeaderImage>
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

export default Header