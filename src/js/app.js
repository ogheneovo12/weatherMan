const function_url = "../../../.netlify/functions/weather";
const input = document.querySelector("#inputui");
const btn = document.querySelector("#btnget");

//map cloud icon to response
//update save places;


//implement greeting
//implement feedback
//implement pwa
//then submit
initApp();
btn.addEventListener("click", () => {
  const query = `${input.value}`;
  if (!!!query) return UI.errorAlert("please enter a valid city");
  UI.displayLoading("main");
  getWeather(query)
    .then(
      (data) => {
        UI.removeLoading();
        UI.displayWeatherResult(data);
        updateSearchesUi([data]);
      },
      (error) => {
        UI.removeLoading();
        UI.errorAlert(error);
      }
    )
    .catch(console.log);
});

function getWeather(query) {
  return fetch(`${function_url}/?q=${query}`).then(handleResponse);

  function handleResponse(response) {
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
      const relevantData = getRelevantData(data);
      StorageHelper.SaveData(relevantData);
      return relevantData;
    });
  }
}

function initApp() {
  UI.displayLoading();
  const searches = StorageHelper.getData();
  if (!searches || !searches.length) {
    //get user geolocation, make request based on geolocation
    UI.removeLoading();
    return;
  }
  updateSearchesUi();
  UI.displayWeatherResult(searches.pop());
  UI.removeLoading();
}

function updateSearchesUi(data){
  const searches = data || StorageHelper.getData();
  UI.displaySearchHistory(searches);
}