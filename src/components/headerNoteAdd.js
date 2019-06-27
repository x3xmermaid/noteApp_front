import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, TouchableWithoutFeedback} from 'react-native'
import {withNavigation} from 'react-navigation'
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
            // Title: '',
            imageSource: require('../assets/img/check.png'),
            imageSource2: require('../assets/img/back.png'),
            style1: styles.iconHeader,
            style2: styles.imgHeader
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
    render(){
        let Title = this.props.titleHeader
        return (
            <View >
                {this.state.Pop == true && <Pop _onPressButtonPop={this._onPressButtonPop}/>}
                {this.state.SideBar == true && <Sidebar _onPressButtonSideBar={this._onPressButtonSideBar}/>}
                {/* <Pop></Pop> */}
                <View style={styles.header}>
                    <HeaderImage imageSource={this.state.imageSource2} _onPressButton={this._onPressButtonBack} headerStyle={this.state.style2}></HeaderImage>
                    <HeaderItem headerText={Title}></HeaderItem>
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

export default withNavigation(Header)