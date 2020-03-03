import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component{
    getStyleByStatus(status){
        var { filterStatus } = this.props;
        if (filterStatus == status) 
            return { button: style.hightlightButton, text: style.hightlightText }
        return { button: style.normalButton, text: style.normalText };
    };
    click(filterStatus){
        this.props.dispatch({ type: "FILTER_" + filterStatus });
        this.props.dispatch({ type:"HIDE_ADDING" })
    };
    componentDidMount(){
        // BackHandler.addEventListener('hardwareBackPress', function() {
        //     alert("back")
        //   }.bind(this));
    };
    render(){
        return <View style = { style.controller }>
                    <TouchableOpacity 
                    style = { [style.button, this.getStyleByStatus("SHOW_ALL").button] }
                    onPress = {()=>{
                        this.click("SHOW_ALL");
                    }}>
                        <Text style = {this.getStyleByStatus("SHOW_ALL").text}>
                            SHOW_ALL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = { [style.button, this.getStyleByStatus("MEMORIZED").button] }
                        onPress = {()=>{
                            this.click("MEMORIZED");
                        }}
                    >
                        <Text style = {this.getStyleByStatus("MEMORIZED").text}>
                            MEMORIZED
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = { [style.button, this.getStyleByStatus("NEED_PRACTICE").button] }
                        onPress = {()=>{
                            this.click("NEED_PRACTICE");
                        }}
                    >
                        <Text style = {this.getStyleByStatus("NEED_PRACTICE").text}>
                            NEED_PRACTICE
                        </Text>
                    </TouchableOpacity>
                </View>
    }
};

const style = StyleSheet.create({
    controller: {
        flex: 0.6,
        backgroundColor: '#663333',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: 1
    },
    button: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#dddddd'
    },
    hightlightButton: {
        backgroundColor: '#aaddee'
    },
    normalButton: {

    },
    hightlightText: {
        fontWeight: 'bold',
        color: 'orange'
    },
    normalText: {
        color: 'white'
    }
});

const mapStateToProps = (state)=>{
    return { filterStatus: state.filterStatus };
}

export default connect(mapStateToProps)(Filter);