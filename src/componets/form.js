import React from 'react';

const Form = (props) => (
  <form className='form-group' onSubmit={props.wheateMethod} >
  <input type='text' name='city' placeholder='Город'/>
  <button className='btn btn-info'>Получить погоду</button>
</form>
)

export default Form