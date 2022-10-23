const key = " H33lTnuoGyuSR6ACMWUBWUDgKvKOopzO "


const getWeather = async (id) => {
  let baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/"

  let query = `${id}?apikey=${key}&details=true`

  const res  = await fetch(baseUrl + query)

  let data = await res.json()

  console.log(data)

  return data[0]
}
const getCity = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search"


    const query = `?apikey=${key}&q=${city}`;

    const res = await fetch(baseUrl + query)

    const data = await res.json()

    return data[0]
}

const recent = document.querySelectorAll(".recent p")


const cityForm = document.querySelector('form')
const temperature = document.querySelector(".temperature")
const values = document.querySelector(".values")
const p = document.querySelector(".image p")
const img = document.querySelector(".image img")
const cloud = document.querySelector(".uv .value")
const humidity = document.querySelector(".humidity .value")
const wind = document.querySelector(".wind .value")

const updateUI = (data) => {
    const cityDets = data.cityDetails;
    const weather = data.cityWeather;
  
    //updating details
    values.innerHTML = `
      <h2 class="country">${cityDets.EnglishName}</h2>
      <p class="other">${weather.LocalObservationDateTime}</span>
     `;

     if(weather.WeatherText == "Partly cloudy"){
        img.src = `imgs/cloudy.png`
     }else if (weather.WeatherText == "Clear" || weather.WeatherText == "Sunny" 
     || weather.WeatherText == "Mostly sunny" ||weather.WeatherText == "Partly sunny"){
        img.src = `imgs/sun.png`
     }else {
        img.src = `imgs/heavy-rain.png`
     }
     console.log(weather.WeatherText)
     temperature.innerHTML = Math.round(weather.Temperature.Metric.Value) + "°"
     p.innerHTML = `${weather.WeatherText}`

     cloud.innerHTML = `${weather.UVIndexText}`
     humidity.innerHTML = `${weather.RelativeHumidity}%`
     wind.innerHTML = `${weather.Wind.Speed.Metric.Value}km/h`

}
  const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const cityWeather = await getWeather(cityDetails.Key);


   
  
    return {
      cityDetails: cityDetails,
      cityWeather: cityWeather
    };
  };
  

 
  cityForm.addEventListener("submit", (e) => {
    //preventing default
    e.preventDefault();
  
    //getting city value
    const city = cityForm.text.value.trim();
    cityForm.reset();
  
    //updating UI
    updateCity(city)
      .then((data) => {
        updateUI(data);
      })
      .catch((err) => console.log(err));
  });
  

  recent.forEach((ele) => {
    ele.addEventListener("click",() =>{
        const city = ele.innerHTML

        updateCity(city).then((data) => {
            updateUI(data);
        }).catch((err) => console.log(err));
    })
  })