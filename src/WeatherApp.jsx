import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"



export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Noida",
        feelsLike: 27.53,
        humidity:7,
        temp: 29.16,
        tempMax: 29.16,
        tempMin: 29.16,
        weather: "clear sky"
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}> 
            <h2> Weather Application</h2>
            <SearchBox updateInfo={updateInfo} />
           <InfoBox info={weatherInfo} />
        </div>
    )
}