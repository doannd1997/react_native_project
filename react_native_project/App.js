import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { YellowBox } from 'react-native';
console.disableYellowBox = true
// YellowBox.ignoreWarnings(['Warning: ...']);
const Apps = require("./JavaScript/Navigation/Demo_1/App").default;

export default class App extends Component{
    render(){
      return <View style = {style.app}>
        <Apps></Apps>
      </View>
    }
};

const style = StyleSheet.create({
  app: {
    flex: 1,
    alignSelf: 'stretch'
  }
})