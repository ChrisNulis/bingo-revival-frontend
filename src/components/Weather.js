import React from 'react'
import axios from 'axios'

class Weather extends React.Component {

  state = {
      zipcode: '',
      city: '',
      weatherLike: '',
      humidity: '',
      skies: ''
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value,
    })
  }

  getWeather = (event) => {
    event.preventDefault();
    let userZip = event.target.children[0].value;
    console.log(userZip.length);
    if (userZip.length === 5){
      axios
      .get("https://api.openweathermap.org/data/2.5/weather?zip="+this.state.zipcode+"&appid=cb62c3b0bbf4bc98a92507bb71fa55d5&units=imperial")
      .then(
          (response) => {
            if(response){
              console.log(response)
            }
            else {
              alert('bad zipcode')
            }
              let temp = Math.ceil(Math.round(response.data.main.feels_like));
               this.setState({
                  weatherLike: temp,
                  humidity: response.data.main.humidity,
                  skies: response.data.weather[0].description,
                  city: response.data.name
              })
          }
        )
      } else {
        alert("Zipcode must be 5 digits long")
      }
    }

    render() {
      if (this.state.city === "") {
        return (
            <div className ="weather-container" id="weather-container">
                <h2>Local Weather</h2>
                <p>Check the weather and get outside with your pooch!</p>
                <form onSubmit={this.getWeather}>
                    <input type="text" id="zipcode" placeholder="zipcode" onChange={this.handleChange}/><br/>
                    <input type="submit" value = "Enter ZipCode!" />
                </form>
            </div>
        )
      }
      else {
        return (
          <div className ="weather-container" id="weather-container">
              <h2> Local Weather </h2>
              <form onSubmit={this.getWeather}>
                  <input type="text" id="zipcode" onChange={this.handleChange}/><br/>
                  <input type="submit" value = "Enter ZipCode!" />
              </form>
              <h3>The weather in {this.state.city} looks like:</h3>
              <section>
                <div className="dashboard">
                  <h5>Condition:</h5>
                  <h3>{this.state.skies}</h3>
                </div>
                <div className="dashboard">
                  <h5>Temperature:</h5>
                  <h3>{this.state.weatherLike}°</h3>
                </div>
                <div className="dashboard">
                  <h5>Humidity:</h5>
                  <h3>{this.state.humidity}%</h3>
                </div>
              </section>
          </div>
        )
      }
    }
}
export default Weather
