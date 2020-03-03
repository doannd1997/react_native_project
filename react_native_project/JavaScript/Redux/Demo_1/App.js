import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

const MainView = require("./MainView").default;
const Controller = require("./Controller").default;
const store = require("./Redux").default;

export default class App extends Component{
    render(){
      return <Provider store= { store }>
            <View style= {{ flex: 1, flexDirection: 'column', alignContent: "center", alignItems: "stretch" }}>
                <MainView></MainView>
                <Controller></Controller>
            </View>
        </Provider> 
    }
}