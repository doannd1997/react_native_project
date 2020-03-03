import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

const ButtonChangeColor = require('./ChangeColor').default;

class Controller extends Component{
    onUpKey(){
        this.props.dispatch({ type: "UP", extra: "limegreen"});
    };
    onDownKey(){
        this.props.dispatch({ type: "DOWN", extra: "magenta"});
    };
    render(){
        return <View style = { style.mainContent }>
            <TouchableOpacity style = { style.touchButton }
                onPress = {this.onUpKey.bind(this)}>
                <Text style = { style.text }>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { style.touchButton }
                onPress = {this.onDownKey.bind(this)}>
                <Text style = { style.text }>-</Text>
            </TouchableOpacity>
            <ButtonChangeColor >
            </ButtonChangeColor>
        </View>
    }
};

const style = StyleSheet.create({
    mainContent: {
        backgroundColor: "black",
        justifyContent: "space-around",
        alignContent: "center",
        flex: 0.7,
        flexDirection: 'row',
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        color: "white"
    },
    touchButton: {
        width: 100,
        height: 150,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});

export default connect()(Controller);