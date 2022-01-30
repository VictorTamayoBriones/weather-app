const $cityName = document.querySelector('#cityName');
const $weatherIcon = document.querySelector('#weather-icon');
const $weatherTemp = document.querySelector('#weather-temp');
const $greeting = document.querySelector('#greeting');
const $search = document.querySelector('form');

const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const baseUrl = 'http://api.openweathermap.org/';

const getWeatherHuamantla = async ()=>{
    const res = await axios.get(`${baseUrl}data/2.5/weather?q=Huamantla&appid=25745ce0da2954b896c845ab208d6851&units=metric`);
    const data = res.data;
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
    $greeting.childNodes[3].textContent = daysOfWeek[day];
}

const getWeatherBySeacrh = async ( city )=>{
    const res = await axios.get(`${baseUrl}data/2.5/weather?q=${city}&appid=25745ce0da2954b896c845ab208d6851&units=metric`);
    console.log(res.data);
}

$search.addEventListener('submit', (e)=>{
    e.preventDefault();
    const $input = $search.querySelector('input');

    if( $input.value.length > 3){
        const city = $input.value;
        getWeatherBySeacrh(city);
    }

});

getWeatherHuamantla();