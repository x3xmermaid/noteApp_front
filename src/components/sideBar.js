import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList, Modal, Image} from 'react-native'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Dummy from '../assets/dummy'
import PopupCategory from '../components/modals'
import { ScrollView } from 'react-native-gesture-handler';

// import console = require('console');

class Sidebar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            modalVisible: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    _Handler = () => {
        this.props._onPressButtonSideBar(false)
    }
    setModalVisible(visible) {
        console.log("masuk stet");
        this.setState({modalVisible: visible});
    }
    render(){
        return (
            <View >
                <Modal transparent={true} visible={this.state.modalVisible} onRequestClose={()=>this.setModalVisible(false)} 
                style={{width: 150}} animationType='fade'>
                    <PopupCategory setModalVisible={this.setModalVisible}/>
                </Modal>
                <View style={styles.sideBody}>
                    <View style={styles.sideProfile}>
                    <TouchableOpacity onPress={this._Handler}>
                        <ImageBackground source={require('../assets/img/img.png')} style={styles.sideImg}></ImageBackground>
                    </TouchableOpacity>
                        <Text style={styles.sideTextProfile}>{"Beauty Mermaid"}</Text>
                    </View>
                    <View>
                        <ScrollView style={styles.sideFlat}>
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 18, }} onPress={() => this.setModalVisible(true)}>
                                <Image source={require('../assets/img/img.png')} style={{width: 20, height: 20}}/>
                                <Text style={styles.drawer}>Add Category</Text>
                            </TouchableOpacity>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            {/* <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"MErmaid 4 You"}</Text>
                            </View> */}
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"Add Category"}</Text>
                            </View>
                        </ScrollView>
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default Sidebar