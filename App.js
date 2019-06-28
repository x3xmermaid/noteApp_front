import {View, Text} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/screens/Home'
import Note from './src/screens/Note'
import NoteAdd from './src/screens/NoteAdd'
import NoteEdit from './src/screens/NoteEdit'
// import NoteAdd from './src/screens/NoteAdd'


// const favicon = require('serve-favicon');
// const path = require('path');
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico') ) );

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  NoteEdit: {
    screen: NoteEdit,
  },
  NoteAdd: {
    screen: NoteAdd,
  },
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})

const appContainer = createAppContainer(AppNavigator);
export default appContainer;