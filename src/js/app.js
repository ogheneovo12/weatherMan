// const  api_url = "https://api.openweathermap.org/data/2.5/weather/"
// const  input = document.querySelector("input");
// const  btn = document.querySelector("button");

// btn.addEventListener('click',async ()=>{
//     const query = `${input.value}`;
//     const weather = await getWeather(query);
//     UI.displayWeatherResult(weather);
// })

// function getWeather(query){
//     return new Promise(async(resolve, reject) => {
//         try {
//             //notify ui
//             const res = await fetch(`${api_url}/?q=${query}&appid=`);
//             if(!res.ok){
//                 throw Error("couldnt get wether")
//             }

//             resolve(res.json())
//         } catch (error) {
//             //update ui
//             console.log(error)
//         }

//     })
// }