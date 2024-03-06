import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment,dencrement,reset} = useCounter();
  return (
    <>
        <h1>Counter with costum hook: {counter}</h1>
        <hr/>

        <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
        <button className="btn btn-primary" onClick={()=>reset()} >reset</button>
        <button className="btn btn-primary" onClick={()=>dencrement()}>-1</button>
    </>
  )
}
