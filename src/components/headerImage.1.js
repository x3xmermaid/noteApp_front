import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
// import console = require('console');
var styles = require('../assets/style')
import axios from 'axios'

class HeaderImage extends Component {
    constructor(){
        super();
    }
    _Handler= () => {
        this.props._onPressButton(true)
    }
    _postNote(){
        axios({
            method: 'post',
            url: 'http://192.168.6.119:3001/test',
            data: {
                test2: 2222,
                test3: 'now()'
            }           
          }).then(function (res){
            console.log(res)
          }).catch(function (err){
            console.log(err)
          })
        // console.log('hihay')
      }
    render(){
        // const sourceNih =`require('../assets/img/sort-512.png')`
        // const sourceNih = this.props.imageSource

        return (
            <View >
                <TouchableOpacity onPress={() => this._postNote()}>
                    <ImageBackground source={this.props.imageSource}  style={this.props.headerStyle} >

                    </ImageBackground>
                    {/* <Text style={styles.textHeader}>{this.props.headerText}</Text> */}
                    {/* <Text>{sourceNih}</Text> */}
                </TouchableOpacity>
            </View>
            
        )
    }
}

export default HeaderImage