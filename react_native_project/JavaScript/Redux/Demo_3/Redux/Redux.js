import { combineReducers, createStore } from 'redux';

const defaultState = {
    cityName: "",
    temperature: null,
    isLoading: false,
    isGotError: false,
    reason: null,
}

cityNameReducer = (state = defaultState.cityName, action)=>{
    switch (action.type){
        case 'GET_TEMP':
            return action.cityName;
        case 'SUCCESS':
        case 'ERROR':
        case 'REASON':
            return state;
    };
    return state;
};

temperatureReducer = (state = defaultState.temperature, action)=>{
    switch (action.type){
        case 'GET_TEMP':
        case "REASON":
        case 'ERROR':
            return null;
        case 'SUCCESS':
            return action.temperature;
    };
    return state;
};

isLoadingReducer = (state = defaultState.isLoading, action)=>{
    switch (action.type){
        case 'GET_TEMP':
            return true;
        case 'SUCCESS':
        case 'ERROR':
        case "REASON":
            return false;
    };
    return state;
};

isGotErrorReducer = (state = defaultState.isGotError, action)=>{
    switch (action.type){
        case 'GET_TEMP':
        case 'SUCCESS':
        case "REASON":
            return false;
        case 'ERROR':
            return true;
    };
    return state;
};

reasonReducer = (state = defaultState.reason, action)=>{
    console.log(action);
    switch (action.type){
        case 'GET_TEMP':
        case 'SUCCESS':
        case 'ERROR':
            return state;
        case "REASON":
            return action.reason;
    }
    return state;
}

const combineReducer = combineReducers({
    cityName: cityNameReducer,
    temperature: temperatureReducer,
    isLoading: isLoadingReducer,
    isGotError: isGotErrorReducer,
    reason: reasonReducer
});

export default createStore(combineReducer);