import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Provider, connect } from 'react-redux';

const MainView = require('./Component/MainView').default;
const store = require("./Redux/Redux").default;

export default class App extends Component{
    constructor(props){
        super(props);
    };
    getTempByCityName(){
        getTemp("Ha Noi")
        .then((result)=>{
            console.log("temp " + result)
        })
        .catch((e)=>{
            console.log("error " + e)
        });
        console.log("111")
    };
    render(){
        return <Provider store = {store}>
            <View style = { styles.container }>
            <LinearGradient 
                style = { styles.gradient }
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0,0.5,0.6]}
                colors={['#ff4500', '#ffffff', '#1e90ff']}
            >
                <Text 
                    style = { styles.text }
                >
                    Weather App
                </Text>
            </LinearGradient>
            <MainView/>
        </View>
        </Provider>
    }
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#add8e6'
    },
    gradient: {
        alignSelf: 'stretch',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'tahoma'      
    }
})