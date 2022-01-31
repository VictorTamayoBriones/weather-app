const $cityName = document.querySelector('#cityName');
const $weatherIcon = document.querySelector('#weather-icon');
const $weatherTemp = document.querySelector('#weather-temp');
const $greeting = document.querySelector('#greeting');
const $search = document.querySelector('form');
const $input = $search.querySelector('input');

const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const baseUrl = 'http://api.openweathermap.org/';
const apiKey = '25745ce0da2954b896c845ab208d6851';

const showWeatherData = (data)=>{

    const weather = {
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: `${data.main.temp}º`,
        feels: `feels like ${data.main.feels_like}`,
        date: new Date()
    }
    const icon = weather.icon
    const day = weather.date.getDay();

    $cityName.textContent = `${data.name}, ${data.sys.country}`;
    $weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    $weatherTemp.childNodes[1].textContent = weather.temp;
    $weatherTemp.childNodes[3].textContent = weather.feels;
    $greeting.childNodes[1].textContent = weather.desc;
    $greeting.childNodes[3].textContent = daysOfWeek[day];

}

const getWeatherHuamantla = async ()=>{
    const res = await axios.get(`${baseUrl}data/2.5/weather?q=Huamantla&appid=${apiKey}&units=metric`);
    showWeatherData(res.data);
}

const getWeatherBySeacrh = async ( city )=>{
    const res = await axios.get(`${baseUrl}data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    showWeatherData(res.data);
}


const handleSubmit = (e)=>{
    e.preventDefault();
    const city = $input.value;
    
    $input.value.length > 3 ? getWeatherBySeacrh(city) : alert('Ingresa una ciudad valida');
    $input.value = '';
}

$search.addEventListener('submit', handleSubmit);
getWeatherHuamantla();