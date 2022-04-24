import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorCard(props) {

  const {id,goTo,key_,errorMessage,errorForm} = props;
  const navigate = useNavigate();

  const goToError = (goTo,id)=>{
    navigate(`${goTo}`,{state:{id}});
  }

  return (

    <div key={key_} className='Errors-card-container' onClick={()=>{goToError(goTo,id)}}>

      <div className='Errors-card-icon'></div>

      <div className='Errors-card-message'>
          <h4 className='Errors-card-message-header'>{errorForm}</h4>
          <p className='Errors-card-message-content'>{errorMessage}</p>
      </div>

    </div>
  )
}