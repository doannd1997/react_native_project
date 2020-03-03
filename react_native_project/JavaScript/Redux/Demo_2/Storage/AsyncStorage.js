import { AsyncStorage } from 'react-native';
var Key = require("./Key").default;
const logger = require("../../../Utility/Logger").default;
const objectUtils = require("../../../Utility/ObjectUtils").default;

const defaultState = {
    arrWords: [
        // { id: 0, en: "Cat0", vn: "mèo0", memorized: true, isShown: false},
        // { id: 1, en: "Cat1", vn: "mèo1", memorized: false, isShown: false},
        // { id: 2, en: "Cat2", vn: "mèo2", memorized: true, isShown: false},
        // { id: 3, en: "Cat3", vn: "mèo3", memorized: false, isShown: false},
        // { id: 4, en: "Cat4", vn: "mèo4", memorized: false, isShown: false},
        // { id: 5, en: "Cat5", vn: "mèo5", memorized: true, isShown: false},
        // { id: 6, en: "Cat0", vn: "mèo0", memorized: false, isShown: false},
        // { id: 7, en: "Cat1", vn: "mèo1", memorized: false, isShown: false},
        // { id: 8, en: "Cat2", vn: "mèo2", memorized: false, isShown: false},
        // { id: 9, en: "Cat3", vn: "mèo3", memorized: false, isShown: false},
        // { id: 10, en: "Cat4", vn: "mèo4", memorized: false, isShown: false},
    ],
    filterStatus: "SHOW_ALL",
    isAdding: false
};

const asyncStorage = {
    getAsyncState: async function(callback){
        var state = await AsyncStorage.getItem(Key.ASYNC_STORAGE_KEY);
        if (objectUtils.isEqualsKey(JSON.parse(state)||{}, defaultState))
            callback(JSON.parse(state))
        else
            callback(defaultState);
    },
    setAsyncState: async (state)=>{
        try{
            AsyncStorage.setItem(Key.ASYNC_STORAGE_KEY, JSON.stringify(state));
            logger.info("set state info success", state);
        }catch (e){
            logger.error("set state fail", e.toString())
        }
    }
};

export default asyncStorage;