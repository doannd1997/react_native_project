import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

class Form extends Component{
    state = {
        en: "",
        vn: ""
    }
    pressAdd(){
        var { en, vn } = this.state;
        this.props.dispatch({ type: "ADD", en: en, vn: vn });
        this.props.dispatch({ type:"HIDE_ADDING" })
    };
    render(){
        return <View style = { styles.form }>
            <TextInput 
                style = { styles.textInput } 
                placeholder = "English"
                value = { this.state.en }
                onChangeText = { (text)=>{
                    this.setState(()=>({ en: text }))
                }}
            />
            <TextInput 
                style = { styles.textInput } 
                placeholder = "VietNamese"
                value = { this.state.vn }
                onChangeText = { (text)=>{
                    this.setState(()=>({ vn: text }))
                }}
            />
            <TouchableOpacity 
                style = { styles.button }
                onPress = { this.pressAdd.bind(this) }
            >
                <Text sylte = { styles.text }>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    }
};

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#eeff99',
        height: 120,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        // justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        flex: 0.5,
        alignSelf: 'stretch',
        backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
    },
    textInput: {
        flex: 0.25,
        alignSelf: 'stretch',
        backgroundColor: '#f0fff0',
        margin: 3
    }
})

export default connect()(Form);