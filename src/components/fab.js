import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
import { withNavigation } from 'react-navigation';
var styles = require('../assets/style')

class Fab extends Component {
    constructor(){
        super();
    }
    _handler= () => {
        // this.props.navigation.navigate('NoteAdd')
        const { navigation } = this.props;
        navigation.navigate('NoteAdd')
    }
    render(){
        return (
            <View >
                <View style={styles.fab}>
                <TouchableOpacity onPress={() => this._handler()}>
                    <ImageBackground source={require('../assets/img/plus-big-512.png')} style={styles.iconHeader} ></ImageBackground>
                </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

export default withNavigation(Fab)