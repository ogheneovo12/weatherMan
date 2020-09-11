 const country = document.querySelector("#country");
 const city =  document.querySelector("#city")
 const temperature = document.querySelector("#temp");
 const describtion = document.querySelector("#desc")
 const output = document.querySelector(".output");
 const [timeEl,humidityEl,minmaxEl] = document.querySelectorAll(".output_further > li");
 const alertMessage =  document.querySelector(".alertMessage");
 const alert =  document.querySelector(".alert");

 const loadWrapper = document.createElement("div");
 loadWrapper.setAttribute("class","spinner-wrapper");
 loadWrapper.innerHTML= `<div class="spinner"></div>`
 class UI{
    static displayWeatherResult(data){
       const weather = getRelevantData(data)
       this.setCountry(weather.country);
       this.setCity(weather.city);
       this.setTemperature(weather.temperature);
       this.setDescription(weather.description);
       this.setOtherDetails(weather.time,weather.humidity,weather.min,weather.max);
       //this.setIcon("cloudy");
    }
    static setCountry(value){
     country.textContent = value;
    }
    static setCity(value){
        city.textContent=value;
    }
    static setOtherDetails(time,humidity,min,max){
         timeEl.textContent=time;   
         humidityEl.textContent = `humidity ${humidity}`
         minmaxEl.getElementsByClassName("range")[0].textContent=min;
         minmaxEl.getElementsByClassName("range")[1].textContent=max;

    }
    
    static setTemperature(value){
       temperature.textContent=value;
    }
    static setDescription(value){
       describtion.textContent=value;
     }
    static alertApp(message){
        alertMessage.textContent = message;
        alert.classList.add(`tr`);
        setTimeout(this.closeAlert,4000)
    }
    static errorAlert(message){
        alert.classList.add("error");
        this.alertApp(message);
    }
    static closeAlert(){
        alert.classList.remove(`tr`);
    }
    static setIcon(type){

    }
    static removeLoading(){
       output.removeChild(loadWrapper);
    }
    static displayLoading(pos){
       output.insertAdjacentElement('afterbegin',loadWrapper);
       //set forcast class to skeleton
    }
    static displaySearchHistory(){
           
    }
    
}