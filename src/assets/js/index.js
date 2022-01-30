const cityName = document.querySelector('#cityName');
const weatherIcon = document.querySelector('#weather-icon');
const weatherTemp = document.querySelector('#weather-temp');

const getWeatherHuamantla = async ()=>{
    const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Huamantla&appid=25745ce0da2954b896c845ab208d6851&units=metric');
    const data = res.data;
    const weather = {
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: `${data.main.temp}º`,
        feels: `feels like ${data.main.feels_like}`
    }
    const icon = weather.icon

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    weatherTemp.childNodes[1].textContent = weather.temp;
    weatherTemp.childNodes[3].textContent = weather.feels;
    console.log(new Date.now);
}

getWeatherHuamantla();