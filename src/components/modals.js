import React from 'react';
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {addCategory, fetchCategory} from '../redux/actions/category'
import {fetchNotes} from '../redux/actions/notes'
import { withNavigation } from 'react-navigation';

class Modals extends React.Component {
	constructor(){
		super()
		this.state={
			name: '',
			url: ''
		}
	}
	closePopup = () => {
        console.log("masuk")
		this.props.setModalVisible(false);
	}
	addCategory = () => {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		this.props.dispatch(addCategory(this.props.category.categoryName, this.props.category.image, color))
		this.props.dispatch({type:"SET_SIDEBAR", payload: false})
		this.props.setModalVisible(false);
		this.props.dispatch(fetchCategory())
		this.props.navigation.closeDrawer()
	}
	render() {
		console.log(this.props.category.categoryName)
		return (
			<TouchableOpacity disabled={true} activeOpacity={1} style={styles.modal}>
				<View style={{backgroundColor: '#FFFFFF', elevation: 2}}>
					<View style={{margin: 10}}>
						<TextInput 
						onChangeText={(data) => this.props.dispatch({type: "SET_CATEGORY_NAME", payload : data})}
						style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category Name'/>
						<TextInput
						onChangeText={(data) => this.props.dispatch({type: "SET_IMAGE", payload : data})}
						 style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category URL'/>
					</View>
					<View style={{margin: 10, fontSize: 15, flexDirection: 'row', alignSelf: 'flex-end'}}>
						<TouchableOpacity onPress={()=> this.addCategory()}>
							<Text style={styles.title}>Add</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>this.closePopup()}>
							<Text style={styles.cancel}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		notes: state.notes,
		category: state.category
	}
}

export default connect(mapStateToProps)(withNavigation(Modals))
const styles = StyleSheet.create({
	title: {
		margin: 5,
		fontSize: 15,
		fontWeight: '300',
		color: '#000000'
	},
	cancel: {
		margin: 5,
		fontSize: 15,
	},
	modal: {
		width: 250,
		position: 'absolute',
		alignSelf: 'center',
        top: 200,
        zIndex: 999
	}
});