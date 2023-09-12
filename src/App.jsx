import { useState } from 'react'
import './style/App.css'
import SearchBar from "./componets/SearchBar"
import WeatherInformation from './componets/WeatherInformation'
import Loading from './componets/Loading'

function App() {
  const [IsLoading, setIsLoading] = useState(false);
  const [isFetched,setisFetched] = useState(false);
  const [weatherData,setWeatherData] = useState({});

  const handleLocation = () => {
    const showPosition = (data) => {
      fetchWeatherData( {"lat": data.coords.latitude,"lon":data.coords.longitude})
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("This browser doesn't Support Geolocation")
    }
}

  const fetchWeatherData = async (latlong) => {
    const {lat,lon} = latlong
    setIsLoading(true)
    const api = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${lat},${lon}`
    const req = await fetch(api).catch(x=>console.error("Error"))
    const res = await req.json();
    setWeatherData(res);
    setIsLoading(false)
    setisFetched(true)
  }

  return (
    <>
    <SearchBar getWeather={fetchWeatherData} geoWeather={handleLocation}/>
    {IsLoading && <Loading />}
    
   {isFetched && <WeatherInformation data={weatherData}/>}
    
    </>
  )
}

export default App
