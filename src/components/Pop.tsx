import React, { useState } from 'react'
import popSFX from "../sounds/pop.mp3"
import bubble from '../assets/bubble.jpg'


export const Pop = () => {
  const handleClick = async()=>{
    new Audio(popSFX).play();
      await new Promise(e => setTimeout(e, 110))
      setIsPopped(true)
  }
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return (
    
    isPopped ? 
    <button className='btn w-16 h-16'>Pop!</button>
    :
    <button className='w-16 h-16' onClick={handleClick}><img src={bubble} alt="" /></button>

  )
}
