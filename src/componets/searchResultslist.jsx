import { useEffect, useState } from "react"


const SearchResultslist = ({data,handleClick}) => {
    const [result,setResult] = useState([]);
    useEffect(() => {
             if(data.inputList) {
                  debounce(()=> {
                      fetchData(data.inputList).then((x)=> {
                        setResult(x)
                })
                })
        } 

 
}, [data.inputList])


    let timeoutid;
    const debounce = (callback) => {
        clearTimeout(timeoutid)
        timeoutid = setTimeout(()=> callback(),1000)
      }
    const fetchData = async (location) => {
        const req = await fetch(`https://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location}`)
        const res = await req.json();
        return res;
    }
    if(!data.inputList|| data.inputList == undefined) return;
    if(data.inputList.length <= 2) return;    
            
            
        

  
    
    return ( <ul> {result.map((x,i)=> {
        return <li key={i} className="result-text" onClick={()=>handleClick({"lat":x["lat"],"lon":x["lon"]})}>{x.name}, {x.region}, {x.country} </li>
    })} </ul>)
}

export default SearchResultslist