import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1460411794035-42aac080490a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D";

    let HOT_URL="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL="https://plus.unsplash.com/premium_photo-1670594449814-f22155bd629d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyfGVufDB8fDB8fHww";

    let RAIN_URL="https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

    return(
        <div className='InfoBox'>
        <h1>WeatherInfo -{info.weather}</h1>
        <div className="cardContainer">
        <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity >80 ? RAIN_URL : info.temp >15 ? HOT_URL: COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity >80 ? <ThunderstormIcon />: info.temp >15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <div>Temperature ={info.temp}&deg;</div>
           <div>Temperature Maximum ={info.tempMax}&deg;</div>
           <div>Temperature Minimum ={info.tempMin}&deg;</div>
           <div>Humidity ={info.humidity}</div>
           <div>Weather Feels Like {info.feelsLike}&deg;</div>
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    );

}