const Logger = {
    info: (tag, data)=>{
        console.log("[info] " + tag + ": " + (data != undefined ? JSON.stringify(data) : "End"));
    },
    error: (tag, data)=>{
        console.log("[error] " + tag + ": " + (data != undefined ? JSON.stringify(data) : "End"));
    }
};

export default Logger;