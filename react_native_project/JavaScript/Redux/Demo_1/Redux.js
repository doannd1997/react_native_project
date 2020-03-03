import { act } from 'react-test-renderer';

const { createStore } = require('redux');

const defaultState = { value: 0, extra: "000000" };

const reducer = (state = defaultState, action) => {
    if (action.type == "UP")    return { value: state.value + 1, extra: action.extra };
    if (action.type == "DOWN") return { value: state.value - 1, extra: action.extra };
    if (action.type == "CHANGE_COLOR") return { value: state.value, extra: action.extra};
    return state;
};

const store = createStore(reducer);

export default store; 