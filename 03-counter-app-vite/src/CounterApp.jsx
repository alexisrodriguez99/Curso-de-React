import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);
    const handleaAdd = (event) => {
         console.log(counter);
         setCounter( counter + 1 );

         // setCounter( (c) => c+1)
         console.log(counter);
    }

    const handleSubtract = (event) => {
        setCounter( counter - 1 );
   }
   const handleReset = (event) => {
    setCounter(  value );
}
  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button value="1" onClick={ handleaAdd } >
        +1
    </button>

    <button value="1" onClick={ handleSubtract } >
        -1
    </button>

    <button value="1" onClick={ handleReset} >
        Reset
    </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number 
}