import asyncStorage from './Storage/AsyncStorage';
import Logger from '../../Utility/Logger';

const { createStore } = require('redux');

const syncStorage = require("./Storage/AsyncStorage").default;

const createWord = (id, en, vn)=>{
    return {
        id: id,
        en: en,
        vn: vn,
        memorized: false,
        isShown: false
    };
}

const reducer = (state, action)=>{
    switch (action.type){
        case 'FILTER_SHOW_ALL':
            return { ...state, filterStatus: "SHOW_ALL" };
        case 'FILTER_MEMORIZED':
            return { ...state, filterStatus: "MEMORIZED" };
        case 'FILTER_NEED_PRACTICE':
            return { ...state, filterStatus: "NEED_PRACTICE" };
        case "TOGGLE_MEMORIZE":
            return { ...state, arrWords: state.arrWords.map((e)=>{ 
                if (e.id != action.id)
                    return e;
                return { ...e, memorized: !e.memorized}
            })}
        case "TOGGLE_IS_ADDING":
            return { ...state, isAdding: !state.isAdding };
        case "HIDE_ADDING":
            return { ...state, isAdding: false};
        case "ADD":
            var id = (state.arrWords.length > 0) ? state.arrWords[0].id+1 : 1;
            return { ...state, 
                arrWords: [createWord(state.arrWords.length+1, action.en, action.vn)].concat(state.arrWords),
                isAdding: false
            };
        case "DELETE":
            return { ...state, 
                arrWords: state.arrWords.filter((item)=>{
                    return item.id != action.id;
                }),
                isAdding: false
            };
        case "SET_STATE":
            return action.state;
            
    }
    return state;
};

const store = createStore(reducer, {});

export default store;
