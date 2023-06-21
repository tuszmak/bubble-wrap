import React, { useState } from 'react'
import popSFX from "../sounds/pop.mp3"


export const Pop = () => {
  const handleClick = ()=>{
    setIsPopped(true)
    new Audio(popSFX).play();
  }
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return (
    
    isPopped ? 
    <button className='btn'>Pop!</button>
    :
    <button className='btn w-16' onClick={handleClick}></button>

  )
}
