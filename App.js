import React, {Component} from 'react'
import {View, Text} from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import Home from './src/screens/Home'
import Note from './src/screens/Note'
import NoteAdd from './src/screens/NoteAdd'
import NoteEdit from './src/screens/NoteEdit'
import {Provider, connect } from 'react-redux'
// import {re} from 'react-navigation-redux-helpers'
// import from 'redux-persist/integration/react'
// import NoteAdd from './src/screens/NoteAdd'
import ComponentDrawer from './src/components/sideDrawer'
import store from './src/redux/store'
// const favicon = require('serve-favicon');
// const path = require('path');
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico') ) );
const costumDrawer = props => (
  <ComponentDrawer></ComponentDrawer>
)

const drawer = createDrawerNavigator({
  Home
},{
  drawerWidth: 220,
  contentComponent : costumDrawer,
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: drawer,
  },
  NoteAdd: {
    screen: NoteAdd,
  },
  NoteEdit: {
    screen: NoteEdit,
  }
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})


const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}