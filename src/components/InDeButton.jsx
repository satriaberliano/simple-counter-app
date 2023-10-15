'use client'

import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useCountStore } from '@/store';
import { Button } from './ui/button';


export const InDeButton = () => {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);


  return (
    <div className='space-x-5 flex justify-center'>
      <Button size="icon" onClick={() => decrement()}><AiOutlineMinus /></Button>
      <Button size="icon" onClick={() => increment()}><AiOutlinePlus /></Button>
    </div>
  )
}
