import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Item extends Component{
    onMem(){
        var { id } = this.props.data;
        this.props.dispatch({ type: "TOGGLE_MEMORIZE", id: id});
    };
    onDelete() {
        var { id } = this.props.data;
        this.props.dispatch({ type: "DELETE", id: id })
    };
    getStringMem(){
        var { memorized } = this.props.data;
        return memorized ? "Forget" : "Mem"
    };
    render(){
        var { en, vn, memorized } = this.props.data;
        var textDecorationLine = memorized ? 'line-through' : 'none'
        return <View style = { styles.item }>
            <Text style = { [styles.line, {textDecorationLine}] }>
                {en}
            </Text>
            <Text style = { styles.line }>
                {vn}
            </Text>
            <View style = { styles.containerButton }>
                <TouchableOpacity 
                style = { styles.button }
                onPress = {this.onMem.bind(this)}
                >
                    <Text>
                        { this.getStringMem() }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = { styles.button }
                    onPress = { this.onDelete.bind(this) }
                >
                    <Text>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    }
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#66ee88',
        alignSelf: 'stretch',
        margin: 4,
        flexDirection: 'column',
        alignItems: 'stretch',
        height: 120
    },
    line: {
        margin: 2,
        backgroundColor: '#eeeeee',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    containerButton: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    button: {
        width: 180,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 6
    }
});

var mapStateToProps = (state)=>{
    return {};
}

export default connect(mapStateToProps)(Item);