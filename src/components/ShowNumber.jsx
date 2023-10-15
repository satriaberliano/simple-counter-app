'use client'

import { useCountStore } from '@/store'

const ShowNumber = () => {
  const count = useCountStore((state) => state.count);
  
  return (
    <div className='border border-dashed border-slate-400 rounded-lg p-16'>
      <h1 className='text-5xl text-center'>{count}</h1>
    </div>
  )
}

export default ShowNumber