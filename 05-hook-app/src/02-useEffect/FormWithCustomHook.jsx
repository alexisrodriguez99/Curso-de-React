import React, { useEffect } from 'react'
import { useState } from 'react'
// import { Message } from './Message'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    // const [formState, setFomState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })

    // const {username, email, password} = formState

    // const onInputChange = ({target})=>{
    //     const {name, value} = target
    //     // console.log(value);
    //     setFomState({
    //         ...formState,
    //         [name] : value //NO ENTENDI BIEN
    //     });
    // }
    
    
    // const {formState, onInputChange} = useForm({
    //     username: '',
    //     email: '',
    //     password: '',
    // });

    const {formState,onInputChange, onResetForm ,username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    })
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
        <h1>Formulaio con costume hook</h1>
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
         <input
            type="password"
            className="form-control mt-2"
            placeholder="constraseña "
            name="password"
            value={password}
            onChange={onInputChange}

        />

        <button onClick={onResetForm} className="btn btn-primary mt-2"> Borrar </button>
 
        {
            (username === 'test') && <Message />
        }
        </>
    )
}
