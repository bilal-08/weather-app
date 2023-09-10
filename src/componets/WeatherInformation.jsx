
import "../style/WeatherInformation.css"

const WeatherInformation = ({data}) => {

    const {current,location} = data

    const weatherImg = {
        "Sunny" : "Sunny.png",
        "Cloudy":"cloudy.png",
        "Light rain shower":"CloudyAndRainy.png",
        "Heavy rain":"HeavyRain.png",
        "Patchy light rain":"LightRain.png",
        "Patchy rain possible":"Patch_rain.png",
        "Patchy snow possible":"PatchSnow.png",
        "Moderate rain":"rainUmbrella.png",
        "Blizzard":"SnowFlake.png",
        "Light rain":"SunnyAndRainy.png",
        "Moderate or heavy rain with thunder":"ThunderStorm.png"
    }
    const imgSizes = {
        "Sunny" : {height:150,width:150},
        "Cloud.png" : {height:125,width:175},
        "Cloudy":{height:150,width:200}
    }
    return (<>
        <div className="container">
         <div className="main-weather">
        <h2>{location.name}</h2>
        <div className="inner-weather">
            <div className="weather-icon">
            <img src={current.condition.text in weatherImg?
                weatherImg[current.condition.text] :"/Cloud.png"}
                style={
                    current.condition.text in weatherImg?
                    imgSizes[current.condition.text] :imgSizes["Cloud.png"]
                }
                />
                
                 </div>
            <span> {current.temp_c}° </span>
        </div>
        <p className="condition-text">{current.condition.text}</p>

         </div>
         <div className="info-container">
            <h3>Feels like {current.feelslike_c}°</h3>
            <div className="other-info humidity">
                <img src="/drop.png" alt="" />
                <p>Humidity</p>
                <p>{current.humidity}%</p>
            </div>
            <div className="other-info wind">
                <img src="/wind.png" alt="" />
                <p>Wind</p>
                <p>{current.wind_kph}kph</p>
            </div>
            <div className="other-info pressure">
                <img src="/pressure.png" alt="" />
                <p>Pressure</p>
                <p>{current.pressure_mb}hpa</p>
            </div>

         </div>
         
        </div>    
    
    </>)
}






export default WeatherInformation;