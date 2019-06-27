import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
// import console = require('console');
var styles = require('../assets/style')

class HeaderItem extends Component {
    constructor(){
        super();
    }

    render(){
        // const sourceNih =`require('../assets/img/sort-512.png')`
        // const sourceNih = this.props.imageSource

        return (
            <View >
                <TouchableOpacity onPress={this._pressHandler}>
                    {/* <ImageBackground source={this.props.imageSource} style={styles.iconHeader} >

                    </ImageBackground> */}
                    <Text style={styles.textHeader}>{this.props.headerText}</Text>
                    {/* <Text>{sourceNih}</Text> */}
                </TouchableOpacity>
            </View>
            
        )
    }
}

export default HeaderItem