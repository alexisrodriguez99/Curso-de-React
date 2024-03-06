import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({id,name,sprites = []}) => {
 
    const pRef = useRef();
    const [boxSize, setBoxSize]= useState({window:0,heigt:0});
    useLayoutEffect(() => {
      const { height, width } = pRef.current.getBoundingClientRect();
         setBoxSize({
            height,width
        })
    }, [id])
 
 
    return (
        <>
        <section
        // style={{height:200}}
        style={{display:'flex'}}
        >
            <h2 
            className='text-capitalize' 
            ref={pRef}
            >#{id} - {name}</h2>

            <div>
                {
                    sprites.map( sprite => (
                        <img key={sprite}
                            src={sprite}
                            alt={name}
                        />
                    ))
                }
            </div>
        </section>
        <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}
