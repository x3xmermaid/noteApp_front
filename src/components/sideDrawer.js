import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground, FlatList, Modal, Image, Alert} from 'react-native'
var styles = require('../assets/style')
import PopupCategory from './modals'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchCategory, deleteCategory} from '../redux/actions/category'
import { fetchNotes , getSearch} from '../redux/actions/notes';
import { withNavigation } from 'react-navigation';
// import console = require('console');

class SideDrawer extends Component {
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
        this.props.navigation.closeDrawer()
    }
    // closeDraw
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
        this.props.navigation.closeDrawer()
    }
    _onPressButtonSideBar = (value) => {
        this.props.dispatch({type: "SET_SIDEBAR", payload: value})
        this.props.navigation.closeDrawer()
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
                  this.props.dispatch(fetchCategory());
                  this.props.navigation.closeDrawer()}
                //   this.props.dispatch({type:"DELETE", index:index})
                  // console.log("blerbler")
              },
            ],
            {cancelable: true}
          )
    }
    _keyExtractor = (item, index) => item.no
    renderItem = ({item, index}) => {
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
    }
    render(){
        console.log(this.props.category.category)
        return (
            <View>
                {/* <TouchableOpacity   style={ {height:900, width:600, backgroundColor: 'rgba(52, 52, 52, 0.8)', elevation:2, zIndex:1}}  onPressOut={() => this._onPressButtonSideBar(false)}> */}
                {/* </TouchableOpacity> */}
                <Modal transparent={true} visible={this.state.modalVisible} onRequestClose={()=>this.setModalVisible(false)} 
                style={{width: 150}} animationType='fade'>
                    <PopupCategory setModalVisible={this.setModalVisible}/>
                </Modal>
                <View style={styles.sideBody2}>
                    <View style={styles.sideProfile}>
                    <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
                        <ImageBackground source={require('../assets/img/img.png')} style={styles.sideImg}></ImageBackground>
                    </TouchableOpacity>
                        <Text style={styles.sideTextProfile}>{"Beauty Mermaid"}</Text>
                    </View>
                    <View style={{marginTop:60, height: 320}}>
                        <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.getNotesCategory(0)}>
                                <View style={styles.sideItem}>
                                    <ImageBackground source={require('../assets/img/all.png')} style={styles.sideIcon}></ImageBackground>
                                    <Text style={styles.textItem}>{"ALL CATEGORY"}</Text>
                                </View>
                        </TouchableOpacity>
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.getNotesCategory(null)}>
                                <View style={styles.sideItem}>
                                    <ImageBackground source={require('../assets/img/default.png')} style={styles.sideIcon}></ImageBackground>
                                    <Text style={styles.textItem}>{"default"}</Text>
                                </View>
                        </TouchableOpacity>
                        <FlatList style={styles.sideFlat2} 
                            data={this.props.category.category}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderItem}
                            numColumns={1}
                            refreshing={this.props.category.fetching}
                        />
                            
                            
                            {/* keyExtractor */}
                            {/* keyExtractor={this._keyExtractor} */}
                            {/* {this.props.category.category.map((item, index) => {
                                    
                                    )
                            })} */}
                        <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => this.setModalVisible(true)}>
                            <View style={styles.sideItem}>
                                <ImageBackground source={require('../assets/img/lamp.png')} style={styles.sideIcon}></ImageBackground>
                                <Text style={styles.textItem}>{"Add Category"}</Text>
                            </View>
                        </TouchableOpacity>
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
  
  export default connect(mapStateToProps)(withNavigation(SideDrawer))
// export default Sidebar