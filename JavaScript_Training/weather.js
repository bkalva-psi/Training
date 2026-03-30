const searchHistory=[];
const getWeatherButton=document.getElementById('getWeatherButton');
const city=document.getElementById('city');
const weatherResult=document.getElementById('weatherResult');
getWeatherButton.addEventListener('click',()=>{
    const cityName=city.value;
    getWeather(cityName);
});
async function getWeather(cityName){
    weatherResult.innerHTML="";
   
    try{
    const response=await fetch(`https://wttr.in/${cityName}?format=j1`);
    const data=await response.json();
    console.log(data);
    // Display: temperature, condition, humidity, wind speed
    const currentCondition=data.current_condition[0];
    const conditionText=currentCondition.weatherDesc[0].value;
    const {temp_C,humidity,windspeedKmph}=currentCondition;
    weatherResult.innerHTML = `
    <p>Temperature: ${temp_C}°C</p>
    <p>Condition: ${conditionText}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind: ${windspeedKmph} km/h</p>
`
    searchHistory.push(cityName);
displaySearchHistory();
        }
    catch(error){
        weatherResult.innerHTML=`<p>Error: ${error.message}</p>`
    }
}
displaySearchHistory();
    function displaySearchHistory(){
        const searchHistoryDOM=document.getElementById('searchHistory');
        searchHistoryDOM.innerHTML=`<p>Search History: ${searchHistory.join(', ')}</p>`;
    }