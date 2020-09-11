const api_url = "https://api.openweathermap.org/data/2.5/weather/";
const input = document.querySelector("#inputui");
const btn = document.querySelector("#btnget");
//add environment variables
//map cloud icon to response
//update save places;
//save last search to webstorage
//save last updtae of saved to storage
//implement greeting
//implement feedback
//implement pwa
//then submit

btn.addEventListener("click", () => {
  const query = `${input.value}`;
  if (!!!query) return UI.errorAlert("please enter a valid city");
  UI.displayLoading("main");
  getWeather(query)
    .then(
      (data) => {
        UI.removeLoading();
        UI.displayWeatherResult(data);
      },
      (error) =>{
          UI.removeLoading();
          UI.errorAlert(error)
        }
    )
    .catch(console.log);
});

function getWeather(query) {
  return fetch(
    `${api_url}/?q=${query}&units=metric&appid=`
  ).then(handleResponse);

  function handleResponse(response) {
    console.log("response", response);
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          return Promise.reject(
            "soory we couldn't accesss our server, this is our fault, our engineers are on it:( "
          );
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      //StorageHelper.appendWeather(data);
      return data;
    });
  }
}
