import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList, Modal, Image, Alert} from 'react-native'
var styles = require('../assets/style')
import Pop from '../components/popBox'
import Dummy from '../assets/dummy'
import PopupCategory from '../components/modals'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchCategory, deleteCategory} from '../redux/actions/category'
import { fetchNotes , getSearch} from '../redux/actions/notes';
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
        // console.log("masuk stet");
        this.setState({modalVisible: visible});
    }
    componentDidMount(){
        this.getCategory();
    }
    getCategory = () =>{
        this.props.dispatch(fetchCategory())
    }
    newFetch=()=>{
        let search=null
        if(this.props.notes.search !== ''){
             let search = this.props.notes.search
            this.props.dispatch(getSearch(search,this.props.notes.sort, this.props.notes.idCategory, this.props.notes.pageLimit))
        }else{
            this.props.dispatch(fetchNotes(search,this.props.notes.sort, this.props.notes.idCategory, this.props.notes.pageLimit))
        }
    }
    getNotesCategory = (no) =>{
        let search=null
        this.props.dispatch({type: "SET_ID_CATEGORY", payload: no})
        if(this.props.notes.search !== ''){
            search = this.props.notes.search
            // console.log(search);
            this.props.dispatch(getSearch(search,this.props.notes.sort ,no, this.props.notes.pageLimit))
        }else{
            this.props.dispatch(fetchNotes(search,this.props.notes.sort ,no, this.props.notes.pageLimit))
            // console.log("mermaid")
        }
        // this.props.dispatch(fetchNotes(null,null,no, null))
        this.props.dispatch({type: "SET_SIDEBAR", payload: false})
    }
    _onPressButtonSideBar = (value) => {
        this.props.dispatch({type: "SET_SIDEBAR", payload: value})
    }
    deleteCategory = (value) => {
        Alert.alert(
            'Delete', 'Are you sure delete this category ?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () => {
                  this.props.dispatch(deleteCategory(value)),
                  this.newFetch(),
                  this.props._onPressButtonSideBar(false)}
                //   this.props.dispatch({type:"DELETE", index:index})
                  // console.log("blerbler")
              },
            ],
            {cancelable: true}
          )
    }
    render(){
        console.log(this.props.category.category)
        return (
            <View>
                <TouchableOpacity   style={ {height:900, width:600, backgroundColor: 'rgba(52, 52, 52, 0.8)', elevation:2, zIndex:1}}  onPressOut={() => this._onPressButtonSideBar(false)}>
                </TouchableOpacity>
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
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.getNotesCategory(0)}>
                                <View style={styles.sideItem}>
                                    <ImageBackground source={require('../assets/img/all.png')} style={styles.sideIcon}></ImageBackground>
                                    <Text style={styles.textItem}>{"ALL CATEGORY"}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.getNotesCategory(null)}>
                                <View style={styles.sideItem}>
                                    <ImageBackground source={require('../assets/img/all.png')} style={styles.sideIcon}></ImageBackground>
                                    <Text style={styles.textItem}>{"ALL CATEGORY"}</Text>
                                </View>
                            </TouchableOpacity>
                            {this.props.category.category.map((item, index) => {
                                    let data = require('../assets/img/foot.png')
                                    switch(item.image){
                                        case 'lamp':
                                            data = require('../assets/img/lamp.png')
                                            break;
                                        case 'love':
                                            data = require('../assets/img/love.png')
                                            break;
                                        case 'hand':
                                            data = require('../assets/img/hand.png')
                                            break;
                                    }
                                    {/* let imageUrl = require(item.image) */}
                                    return (
                                    <TouchableOpacity 
                                    onLongPress={() => this.deleteCategory(item.no)}
                                    delayLongPress={2000}
                                    onPress={() => this.getNotesCategory(item.no)} >
                                        <View style={styles.sideItem}>
                                            <ImageBackground source={data} style={styles.sideIcon}></ImageBackground>
                                            <Text style={styles.textItem}>{item.category}</Text>
                                        </View>
                                    </TouchableOpacity>
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
const mapStateToProps = (state) => {
    return {
      notes: state.home,
      category: state.category
    }
  }
  
  export default connect(mapStateToProps)(Sidebar)
// export default Sidebar