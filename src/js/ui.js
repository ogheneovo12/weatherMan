 const country = document.querySelector("#city");
 const temperature = document.querySelector("#temperature");
 class UI{
     static state = {
         loading:false,
         error:{
             status:false,
             message:""
         }
     }
    static displayWeatherResult(data){
       const { name, main:{temp}} = data;
       country.innerHTML=name;
       temperature.textContent =temp;
    }
    static displaySearchHistory(){
           
    }
    static notifyState(){

    }
}