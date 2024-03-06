import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({x:1,y:1})
  useEffect(() => {
    // console.log('mensaje montado')
    const onMouseMove = ({ x, y}) => {
      // const coords = {x,y};
      setCoords({x,y})
      console.log(coords);
    }

    window.addEventListener( 'mousemove', onMouseMove)
    return () => {
      // console.log('mensaje DESmontado')
      // window.removeEventListener( 'mousemove', onMouseMove)
    }
  }, [])
  

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
    )
}
