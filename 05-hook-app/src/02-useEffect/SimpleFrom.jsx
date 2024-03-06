import React, { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleFrom = () => {

    const [formState, setFomState] = useState({
        username: 'test11',
        email: 'test111@gamil.com',
    })

    const {username, email} = formState

    const onInputChange = ({target})=>{
        const {name, value} = target
        // console.log(value);
        setFomState({
            ...formState,
            [name] : value //NO ENTENDI BIEN
        });
    }



    useEffect( ()=> {
        // console.log("tenst useEffect");
    }, []);

    useEffect( ()=> {
        // console.log("formstate cambio");
    }, [formState]);

    useEffect( ()=> {
        // console.log("email cambio");
    }, [email]);
  return (
        <>
        <h1>Formulaio Simple</h1>
        <hr />
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
         <input
            type="email"
            className="form-control mt-2"
            placeholder="test@gmail.com "
            name="email"
            value={email}
            onChange={onInputChange}

        />
 
        {
            (username === 'test') && <Message />
        }
        </>
    )
}
