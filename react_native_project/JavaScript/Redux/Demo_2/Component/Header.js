import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component{
    pressAdd(){
        this.props.dispatch({ type: "TOGGLE_IS_ADDING" })
    };
    render(){
        return <View style = { styles.header }>
            <TouchableOpacity 
                style = { styles.button }
                onPress = { this.pressAdd.bind(this) }
            >
                <Text style = { styles.text }>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    }
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#eeff99',
        flex: 0.6,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        flex: 0.7,
        alignSelf: 'center',
        backgroundColor: "#48d1cc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 50,
        height: 50
    },
    text: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})

export default connect()(Header);