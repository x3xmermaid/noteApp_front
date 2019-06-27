import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Dummy from '../assets/dummy'

class Sidebar extends Component {
    constructor(){
        super();
    }
    _Handler = () => {
        this.props._onPressButtonSideBar(false)
    }
    render(){
        return (
            <View >
                <View style={styles.sideBody}>
                    <View style={styles.sideProfile}>
                    <TouchableOpacity onPress={this._Handler}>
                        <ImageBackground source={require('../assets/img/img.png')} style={styles.sideImg}></ImageBackground>
                    </TouchableOpacity>
                        <Text style={styles.sideTextProfile}>{"Beauty Mermaid"}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={Dummy}
                            numColumns={1}
                            style={styles.sideFlat}
                            renderItem={({item}) => 
                        // <View style={styles.sideFlatItem}>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{item.Category}</Text>
                            </View>
                        // </View>
                        }
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Sidebar