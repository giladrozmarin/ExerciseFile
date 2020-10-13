import React from "react"

const API_KEY = "caba7178c08ce271766df16583a1b4e8"


class Weather extends React.Component{
   state = {
       temperature: undefined,
       city: undefined,
       country: undefined,
       humidity: undefined,
       description: undefined,
       error: undefined
   }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json();
 
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              error: ""
            });
     
    }
    render(){
   return(
        <form onSubmit={this.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
        <p>the current temperature : {this.state.temperature}</p>
		<button > Get Weather</button>
	</form>
   )
    }
}

export default  Weather;
