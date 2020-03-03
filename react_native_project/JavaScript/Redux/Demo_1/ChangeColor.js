import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class buttonChangeColor extends Component{
    onChange(){
        this.props.dispatch({ type: "CHANGE_COLOR", extra: "#ffff00" })
    };
    render(){
        return <TouchableOpacity style = { style.touchButton }
            onPress = {this.onChange.bind(this)}>
            <Text style = { [style.text, {color: this.props.myExtra}] }>
                Change
            </Text>
        </TouchableOpacity>
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
        fontSize: 25,
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

export default connect((state)=>{
    return { myExtra: state.extra };
})(buttonChangeColor);
