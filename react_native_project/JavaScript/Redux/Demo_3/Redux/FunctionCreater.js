export function reducerGetTemp(cityName){
    return {
        type: 'GET_TEMP',
        cityName: cityName
    };
};

export function reducerSuccess(temperature){
    return {
        type: 'SUCCESS',
        temperature: temperature
    };
};

export function reducerError(err){
    return {
        type: "ERROR",
        reason: err
    }
};

export function reducerReason(reason){
    return {
        type: "REASON",
        reason: reason
    }
}