import React from 'react';
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';


export default class modals extends React.Component {
	closePopup = () => {
        console.log("masuk")
		this.props.setModalVisible(false);
	}
	render() {
		return (
			<TouchableOpacity disabled={true} activeOpacity={1} style={styles.modal}>
				<View style={{backgroundColor: '#FFFFFF', elevation: 2}}>
					<View style={{margin: 10}}>
						<TextInput style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category Name'/>
						<TextInput style={{paddingLeft: 10, paddingRight: 10}} placeholder='Category URL'/>
					</View>
					<View style={{margin: 10, fontSize: 15, flexDirection: 'row', alignSelf: 'flex-end'}}>
						<TouchableOpacity>
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