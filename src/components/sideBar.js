import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList, Modal, Image} from 'react-native'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Dummy from '../assets/dummy'
import PopupCategory from '../components/modals'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
// import console = require('console');

class Sidebar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            modalVisible: false,
            category: [],
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
    componentDidMount(){
        axios.get(`http://192.168.6.119:3001/category`).then(
        res => {
          const data = res.data
        //   console.log(data)
          this.setState({
            category: data.data
          })
          // return data.data;
        }
        )
        .catch(function(error) {
          console.log(error);
          // ADD THIS THROW error
          throw error;
        });
    }
    render(){
        console.log(this.state.category)
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
                        <ScrollView style={styles.sideFlat} >
                            {this.state.category.map((item, index) => {
                                    return (
                                        <View style={styles.sideItem}>
                                            <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                            <Text style={styles.textItem}>{item.category}</Text>
                                        </View>
                                    )
                            })}
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.setModalVisible(true)}>
                                <View style={styles.sideItem}>
                                    <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                    <Text style={styles.textItem}>{"Add Category"}</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default Sidebar