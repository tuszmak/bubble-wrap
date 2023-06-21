import React, { useState } from 'react'
import popSFX from "../sounds/pop.mp3"


export const Pop = () => {
  const handleClick = async()=>{
    new Audio(popSFX).play();
      await new Promise(e => setTimeout(e, 110))
      setIsPopped(true)
  }
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return (
    
    isPopped ? 
    <button className='btn w-16'>Pop!</button>
    :
    <button className='btn w-16' onClick={handleClick}></button>

  )
}
