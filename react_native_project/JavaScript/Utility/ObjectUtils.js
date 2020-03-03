const ObjectUtils = {
    isEqualsKey: (object_0, object_1)=>{
        var keys_0 = Object.keys(object_0).sort();
        var keys_1 = Object.keys(object_1).sort();
        return JSON.stringify(keys_0).localeCompare(JSON.stringify(keys_1)) == 0;
    }
};

export default ObjectUtils;