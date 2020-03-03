import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, AppState, Alert } from 'react-native';
import { connect } from 'react-redux';
var Item = require('./Item').default;
var Filter = require('./Filter').default;
var Header = require("./Header").default;
var Form = require("./Form").default;

var asyncStorage = require("../Storage/AsyncStorage").default;
const logger = require("../../../Utility/Logger").default;
const StringCompare = require("../../../Utility/StringCompare").default;

class Main extends Component{
    state = { curState: AppState.currentState };
    getFilter(){
        var { filterStatus } = this.props;
        switch (filterStatus){
            case "SHOW_ALL":
                return this.props.arrWords;
            case "MEMORIZED":
                return this.props.arrWords.filter(item=>item.memorized);
            case "NEED_PRACTICE":
                return this.props.arrWords.filter(item=>!item.memorized)
        }
    };
    UNSAFE_componentWillMount(){
        this.loadCurState();
        AppState.addEventListener("change", this.appStateChange.bind(this));
    }
    componentDidMount(){
        
    };
    componentWillUnmount(){
        AppState.removeEventListener("change", this.appStateChange.bind(this));
    };
    appStateChange(nextAppState){
        if (!this.state.curState.match(nextAppState)){
            if (nextAppState.match(/inactive|background/)){
                this.saveCurState();
            }
        }
        else{

        };

        this.setState(()=>{ appState: nextAppState});
    };
    loadCurState(){
        asyncStorage.getAsyncState((result)=>{
            this.props.dispatch({ type: "SET_STATE", state: result });
        });
    };
    saveCurState(){
        var state = {
            arrWords: this.props.arrWords,
            filterStatus: this.props.filterStatus,
            isAdding: this.props.isAdding
        }
        asyncStorage.setAsyncState(state);
    };
    render(){
        return <View style = {style.mainView}>
            <Header/>
            <View style = { style.flatList }>
                { this.props.isAdding? <Form/> : null }
                <FlatList
                    data={ this.getFilter() }
                    renderItem={({item})=>{
                        return  <Item data={
                            {
                                vn: item.vn,
                                en: item.en,
                                memorized: item.memorized,
                                id: item.id
                            }}>

                        </Item>
                    }}
                    keyExtractor={(item, index)=>{
                        return  index + "";
                    }}>
                </FlatList>
            </View>
            <Filter></Filter>
        </View>
    }
};

const style = StyleSheet.create({
    mainView: {
        flex: 1, 
        alignSelf: 'stretch', 
        backgroundColor: 'yellow', 
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    flatList: {
        flex: 7,
        backgroundColor: 'grey',
        alignSelf: 'stretch'
    },
    header: {
        backgroundColor: '#eeff99',
        flex: 0.5,
        alignItems: 'stretch',
        alignSelf: 'stretch'
    }
});

const mapStateToProps = (state)=>{
    return {
        filterStatus: state.filterStatus,
        arrWords: state.arrWords,
        isAdding: state.isAdding
    };
};

export default connect(mapStateToProps)(Main);