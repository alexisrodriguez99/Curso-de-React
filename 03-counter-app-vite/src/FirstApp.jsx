import React from 'react'
import PropTypes from 'prop-types';
//import {Fragment} from 'react'
// const newMessage= 'fernando';
const newMessage = () => {
   return 1+1
};
export const FirstApp = ( {title,subTittle} ) => {
    console.log(title);
    // if( !title ){
    //     throw new Error('el title no exite!!!!!!!!!!!!')
    // }
  return (
    <>
        {/* <h1>{ newMessage() }</h1> */}
        {/* <code> {JSON.stringify( newMessage)} </code>*/ }
        <h1>{title }</h1>

        <p>AAAAAAA</p>
        <p>{subTittle +10}</p>
    </>
  )
}

export default FirstApp

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTittle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}