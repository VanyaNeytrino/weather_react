import React from 'react';

const Weather = (props) => (
  <div className="weath">
    {props.city &&
      <div>
        <p>Город: {props.city}</p>
        <p>Страна: {props.country}</p>
        <p>Температура: {props.temp}</p>
        <p>Воскход: {props.sunrise}</p>
        <p>Закат: {props.sunset}</p>
      </div>
    }
<p>{ props.errors }</p>
</div>
)

export default Weather