import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getTemp } from '../API/WeatherAPI';

import * as funcitonCreater from '../Redux/FunctionCreater'

class MainView extends Component{
    state = {
        cityName: ''
    }
    getTempByCityName(){
        var { cityName } = this.state;
        getTemp(cityName)
        .then((result)=>{
            this.props.reducerSuccess(result);
        })
        .catch((err)=>{
            this.props.reducerError(err);
            // this.props.reducerReason(err)
        });

        this.props.reducerGetTemp(cityName);
    };
    getMessage(){
        if (this.props.isLoading)
            return "...Loading";
        if (this.props.isGotError)
            return "Failed: " + this.props.reason;
        if (this.props.temperature != null)
            return this.props.cityName + ": " + this.props.temperature;
        return "Enter City's name"
    };
    render(){
        return <View style = { styles.container }>
                    <TouchableOpacity 
                        style={ styles.button }
                        onPress={ this.getTempByCityName.bind(this) }
                    >
                        <Text style={ styles.buttonText }>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        multiline
                        style={ styles.textInput }
                        placeholder="City's name"
                        onChangeText = { (text)=>{
                            this.setState(()=>({cityName: text}))}}
                        
                    >
                    </TextInput>
                    <Text
                        style={ styles.text }
                    >
                        { this.getMessage() }
                    </Text>
                </View>
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column-reverse'
    },
    button: {
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#9400d3'
    },
    textInput: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        top: 230,
        marginHorizontal: 12,
        borderRadius: 5
    },
    text: {
        color: 'white',
        fontStyle: 'italic',
        top: 250
    }
});

function mapStateToProps(state){
    return {
        cityName: state.cityName,
        temperature: state.temperature,
        isLoading: state.isLoading,
        isGotError: state.isGotError,
        reason: state.reason
    }
}

export default connect(mapStateToProps, funcitonCreater)(MainView);