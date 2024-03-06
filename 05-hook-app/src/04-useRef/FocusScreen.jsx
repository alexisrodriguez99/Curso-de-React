import React, { useRef } from 'react'

export const FocusScreen = () => {

     const inputRef = useRef();
      const onClick = () =>{
        // document.querySelector('input').select();
        console.log(inputRef)
        inputRef.current.select();
     }
  return (
    <>
    <h1>
        Focus Screen
    </h1>
    <input
        ref={inputRef}
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
    />
    <input
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
    />
    <input
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
    />
    <input
        type='text'
        placeholder='Ingrese su nombre'
        className='form-control'
    />

    <button className='btn btn-primary mt-2'
        onClick={onClick}    
    >
        set focus
    </button>
    </>
    )
}
