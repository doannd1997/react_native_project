import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

const store = require("./Redux").default;
const Main = require("./Component/Main").default;

class App extends Component{
    render(){
        return <Provider store = { store }>
            <Main></Main>            
        </Provider>
    }
};


export default App;


