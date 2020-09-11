const fetch = require('node-fetch');
const api_url = "https://api.openweathermap.org/data/2.5/weather/";
const key = process.env.api_key

exports.handler =async (event, context, callback) => {
   return fetch(`${api_url}?q=${event.queryStringParameters.q}&units=metric&appid=${key}`)
   .then(response => response.json())
   .then(data => ({
     statusCode: data.cod,
     body:JSON.stringify(data)
   }))
   .catch(error => ({ statusCode:421, body:JSON.stringify({message:"no internet connection"}) }));

}