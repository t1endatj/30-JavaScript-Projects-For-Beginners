

const apiKey = API_CONFIG.weatherApiKey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card__search input");
const searchBtn = document.querySelector(".card__search button");
const weatherIcon = document.querySelector(".card__status img");



async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
     console.log(data);
    if (data.cod === "404") {
      alert("City not found!");
      return;
    }
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/img/mist.png";
    }
    else {
        weatherIcon.src = "./assets/img/clear.png"; 
    }

    if(data.name == "Turan") {
      document.querySelector(".card__title").innerHTML = "Da Nang";
    }
    else {
      document.querySelector(".card__title").innerHTML = data.name;
    }    
    document.querySelector(".card__temperature").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".card__humidity .static").innerHTML = data.main.humidity + "%";
    document.querySelector(".card__wind-speed .static").innerHTML = data.wind.speed + " km/h";
  }
  

  
  catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Error fetching weather data. Please try again.");
  }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


