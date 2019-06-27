import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
// import console = require('console');
var styles = require('../assets/style')

class HeaderImage extends Component {
    constructor(){
        super();
    }
    _Handler= () => {
        this.props._onPressButton(true)
    }
    render(){
        // const sourceNih =`require('../assets/img/sort-512.png')`
        // const sourceNih = this.props.imageSource

        return (
            <View >
                <TouchableOpacity onPress={this._Handler}>
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