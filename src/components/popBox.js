import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
// import console = require('console');
var styles = require('../assets/style')

class Pop extends Component {
    constructor(){
        super();
        // this._pressHandler = this._
    this.state = {
        Pop: 0,
    }}
    
    _pressHandler = () => {
        // if
    //     this._onPressButtonOut 
            // this
            console.log("HIhay")
    }
    _Handler= () => {
        this.props._onPressButtonPop(false)
    }
    render(){
        return (
            // <View >
                <View style={styles.popBox}>
                    {/* <View> */}
                    <TouchableOpacity onPress={this._Handler}>
                        <Text style={styles.textPop}>{"Ascending"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._Handler}>
                        <Text style={styles.textPop}>{"Descending"}</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                {/* </View> */}
            </View>
            
        )
    }
}

export default Pop