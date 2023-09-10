import { useState } from "react"


const SearchResultslist = ({weatherLocation,setList,data}) => {
    const [result,setResult] = useState([]);
    const debounce = (cb,delay=2000) => {
        return (...args) => {
          setTimeout(()=> {
            cb(...args)
          },delay)
        }
      }
    const fetchData = async (location) => {
        const req = await fetch(`https://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location}`)
        const res = await req.json();
        return res;
    }
    
    const handleClick = (data) => {
        weatherLocation(data)
        setList("")
    }

  
    if(!data.inputList) return null
    const updateDebounceResult =debounce((text)=> {
        fetchData(text).then((x)=> {
            setResult(x)
        })
    })
    if(data.inputList.length <= 2) return;
    if(data.inputList) {
        updateDebounceResult(data.inputList)
        

    }
    return ( <ul> {result.map((x,i)=> {
        return <li key={i} className="result-text" onClick={()=>handleClick({"lat":x["lat"],"lon":x["lon"]})}>{x.name}, {x.region}, {x.country} </li>
    })} </ul>)
}

export default SearchResultslist