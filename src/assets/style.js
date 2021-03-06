'use strict'
var React = require('react-native')

let {
  StyleSheet, Dimensions
} = React;

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width

module.exports = StyleSheet.create({
      container: {
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: '#F5FCFF',
          
        },
        box: {
          // backgroundColor: 'yellow',
          height: 140,
          width: 140,
          marginTop: 15,
          marginBottom: 15,
          marginRight: 15,
          marginLeft: 15,
          borderRadius: 10,
          // borderTopLeftRadius: 25,
          // borderBottomRightRadius: 25,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        },
        fab: {
            backgroundColor: 'white',
            borderRadius: 100,
            height: 60,
            width: 60,
            position: 'absolute',
            right: 20,
            bottom: 70,
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 4 
            
        },
        header: {
            paddingHorizontal: 15,
            height: 65,
            width: widthWindow,
            // borderBottomColor: 'black',
            // borderBottomWidth: 2,
            backgroundColor: 'white',
            marginBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 1,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        },  
        body: {
            flexDirection: 'column',
            // flexWrap: 'wrap',
            // paddingBottom: 30,
            height: heightWindow*.9,
            // justifyContent: 'center'
            alignItems: 'center',
            marginTop: 27
            // backgroundColor: 'green'
        },
        searchBody: {
            // flexDirection: 'column',
            // flexWrap: 'wrap',
            // paddingBottom: 30,
            height: 50,
            borderRadius: 100,
            width: widthWindow/2+120,
            // justifyContent: 'center',
            paddingLeft: 25,
            paddingRight: 25,
            overflow: 'hidden',
            marginBottom: 21,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5.62,

            elevation: 3,
            // backgroundColor: 'green'
        },
        footer: {
          marginTop:100,
          height: 100,
          backgroundColor: 'green'
        },
        textHeader: {
            justifyContent: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            // marginLeft: 50,
          //   backgroundColor: 'blue'
        },
        iconHeader: {
          borderRadius: 100,
          height: 45,
          width: 45,
          // just
        },
        imgHeader:{
          // backgroundImage: `url('../assets/img/img.png')`
          borderRadius: 100,
          height: 45,
          width: 45,
          // backgroundColor: 'blue',
          overflow: 'hidden',
          margin: 3
        },
        popBox: {
          height: 120,
          width: 120,
          position: 'absolute',
          right: 3,
          top: 5,
          padding: 10,
          zIndex: 20,
          backgroundColor: 'white',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 7,
        },
        textPop: {
          textAlign: "center",
          marginTop: 5,
          fontSize: 15,
          // elevation: 4,
          // borderBottomColor: 'black',
          // borderBottomWidth: 2,
          paddingBottom: 5,
          zIndex: 4,
          // backgroundColor: 'green'
        },
        sideBody: {
          position: 'absolute',
          width: widthWindow*65/100,
          height: heightWindow-20,
          left: 0,
          elevation: 5,
          backgroundColor: 'white',
          // borderRightColor: 'black',
          // borderRightWidth: 2,
          // borderTopRightRadius: 100,
          // borderBottomRightRadius: 100,
          flexDirection: 'column',
          zIndex: 4 
        },
        sideBody2: {
          backgroundColor: 'white',
          flexDirection: 'column',
          zIndex: 4 
        },
        sideIcon: {
          // borderRadius: 100,
          height: 20,
          width: 20,
          // just
          // backgroundColor: 'black'
        },
        sideFlat: {
          height: 250,
          // marginTop: 65,
          // backgroundColor: 'blue',
          // alignItems: 'top'
          // paddi
        },
        sideItem: {
          flexDirection: 'row',
          // alignItems: 'center',
          paddingLeft: 10,
          paddingTop: 10
        },
        textItem: {
          marginLeft: 10,
          fontSize: 17,
          color: 'black',
          // textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 15,
          fontFamily: 'Open Sans',
          // backgroundColor: 'black',
          textAlignVertical: 'top'
        },
        textDateList: {
          fontSize: 10,
          textAlign: 'right',
          padding: 5,
          color: 'white',
          fontWeight: 'bold'
          // marginRight: 3
        },
        textTitle: {
          fontSize: 17,
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 20
          // marginRight: 3
        },
        textCategory2: {
          fontSize: 12,
          color: 'white'
          // marginRight: 3
        },
        textDetail: {
          fontSize: 12,
          marginTop: 4,
          lineHeight: 14,
          color: 'white',
          fontWeight: 'bold'
        },
        
        sideImg:{
          height: 85,
          width: 85,
          overflow: 'hidden',
          marginTop: 40,
          marginBottom: 15,
          borderRadius: 75
        },
        sideProfile:{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'green'
        },
        sideTextProfile: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        editSTyle: {
          fontSize: 20,
          textAlignVertical: 'top',
          paddingLeft: 50,
          paddingRight: 50,
          marginTop: 50
        },
        picker: {
          height: 40,
          width: 200,
          // marginLeft:50,
          
        },
        textCategory:{
          color:'black', 
          marginLeft:50, 
          fontWeight:'bold', 
          marginBottom:5
        },
        pickerShadow: {
          height: 40,
          width: 200,
          marginLeft:50,
          marginTop: 5,
          backgroundColor: 'white',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.57,
          shadowRadius: 15.19,

          elevation: 3,
        },
        sideFlatItem:{
          backgroundColor: 'green',
          width: 200,
          // alignItems: 'top'
        }
  });