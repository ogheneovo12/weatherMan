// class StorageHelper {
//     static SaveData(data){
//         //get relevant data only
//         //temp, describtion, cloud type, humidity, 
//         const weather =

//     }
// }

function getRelevantData(data){
    const { name, main:{temp,humidity,pressure,temp_max,temp_min}, weather, sys:{country:countryCode},dt} = data; 
    const {  name:country, flag } = getCountry(countryCode);
    
    return {
        city:name,
        country,flag,
        temperature:temp,
        description:weather[0].description,
        humidity,
        pressure,
        dt,
        time:new Date(dt * 1000).toDateString(),
        min:temp_min,
        max:temp_max
        };
}
function getCountry(countryCode){
    return countries.find(country => country.alpha2Code == countryCode);
}