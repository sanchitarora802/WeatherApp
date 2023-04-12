import React from 'react'
import './CityName.css'

function CityName() {
  return (
    <div className='wrap'> 
        <div className='outerBox'>
            <div className='headingDiv'>
            <h1 className='heading'>Weather App</h1>
            </div>
            <div className='InputDiv'>
                <input type='text' className='Textinput' placeholder='Enter City Name'/>
            </div>
            <div className='OrDiv'>
               <h4 className='OrLine'><span>or</span></h4>
            </div>
            <div className='SubmitDiv'>
              <button className='SubmitButton'>Get Device Location</button>
            </div>
        </div>
    </div>
  )
}

export default CityName