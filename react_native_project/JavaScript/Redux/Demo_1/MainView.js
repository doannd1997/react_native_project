import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class MainView extends Component{
    render(){
        var color = this.props.myExtra;
        return <View style = { style.mainContent }>
            <Text style = { [style.text, {color: color}] }>{this.props.myValue} - {this.props.myExtra}</Text>
        </View>
    }
};

const mapStateToProp = (state)=>{
    return { myValue: state.value, myExtra: state.extra};
};

const style = StyleSheet.create({
    mainContent: {
        backgroundColor: "powderblue",
        justifyContent: "center",
        alignContent: "center",
        flex: 0.3
    },
    text: {
        fontSize: 30,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProp)(MainView);