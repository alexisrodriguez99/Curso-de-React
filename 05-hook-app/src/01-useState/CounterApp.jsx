import { useState } from "react"

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,

    })
    const {counter1, counter2, counter3} = state
  return (
    <>
        <h1>Counter: {counter1}</h1>
        <h1>Counter: {counter2}</h1>
        <h1>Counter: {counter3}</h1>
        <hr/>

        <button className="btn btn-primary" 
        onClick={
            ()=>{
                setCounter({
                    ...state,//... comando spret, hago la desestructuracion para que mantenga todos los estados actuales
                    counter1: counter1 + 1,//basicamente digo que este va hacel el nuevo estado, pisa todo
                })
            }
            }>+1</button>
     </>
    )
}
