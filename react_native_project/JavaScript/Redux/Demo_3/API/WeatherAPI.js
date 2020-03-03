const URL = "http://api.openweathermap.org/data/2.5/weather?appid=1a19c9c757224ec2541e7ec2097575c6&q=";

export function getTemp(cityName){
    return fetch(URL + cityName)
    .then((result)=>{
        return result.json()
    })
    .then((jsonResult)=>{
        return jsonResult.weather["0"].main + ", " + (jsonResult.main.temp-273.15);
    })
} 
