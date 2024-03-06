import { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFomState] = useState(initialForm)

    const onInputChange = ({target})=>{
        const {name, value} = target
        // console.log(value);
        setFomState({
            ...formState,
            [name] : value //NO ENTENDI BIEN
        });
    }
    const onResetForm = ()=>{
      setFomState(initialForm)
    }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
