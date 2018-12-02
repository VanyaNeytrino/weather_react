import React from 'react';
import './App.css';
import Info from './componets/info';
import Form from './componets/form'
import Weather from './componets/weather';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const API_KEY = '94075daaf958350ea15edb7a47545109'
// const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=ВАШ_КЛЮЧ&units=metric'

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    errors: undefined
  }

  gettingWheathe = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data)

      var sunrise = data.sys.sunrise * 1000;
      var sunset = data.sys.sunset * 1000;
      var date = new Date()
      date.setTime(sunrise)
      var date_sinrise = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      date.setTime(sunset)
      var date_sunset = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: date_sinrise,
        sunset: date_sunset,
        errors: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        errors: "Нужно ввети название города"
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <div className="img">
                  <Info />
                </div>
              </div>
              <div className="col-sm-7 form">
                <Form wheateMethod={this.gettingWheathe} />
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  errors={this.state.errors}
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;