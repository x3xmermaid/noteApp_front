import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, ImageBackground} from 'react-native'
// import console = require('console');
var styles = require('../assets/style')
import {connect} from 'react-redux'
import {fetchNotes, getSearch} from '../redux/actions/notes'

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
    _Handler= (value) => {
        // this.props._onPressButtonPop(false)
        this.props.dispatch({type: "SET_SORT", payload: value})
        if(this.props.notes.search !== ''){

            this.props.dispatch(getSearch(this.props.notes.search, value, this.props.notes.idCategory, null))
        }else{
            this.props.dispatch(fetchNotes(null, value, this.props.notes.idCategory, null))

        }
        this.props._onPressButtonPop(false)
    }
    render(){
        return (
            // <View >
                <View style={styles.popBox}>
                    {/* <View> */}
                    <TouchableOpacity onPress={() => this._Handler('ASC')}>
                        <Text style={styles.textPop}>{"- - - - - - - - - -"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._Handler('ASC')}>
                        <Text style={styles.textPop}>{"Ascending"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._Handler('DESC')}>
                        <Text style={styles.textPop}>{"Descending"}</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                {/* </View> */}
            </View>
            
        )
    }
}

// export default Pop
const mapStateToProps = (state) => {
    return {
      notes: state.home
    }
}
  
export default connect(mapStateToProps)(Pop)