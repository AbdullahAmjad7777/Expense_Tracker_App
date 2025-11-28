import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const {transaction} = useContext(GlobalContext);
  const amount = transaction.map((el)=>el.amount);
  const total = amount.reduce((acc,item)=>acc+=item,0).toFixed(2);
  return (
    <div className='p-2 shadow-xl/30 my-4'>
        <p className='text-xl'>YOUR BALANCE</p>
        <h1 className='font-bold text-2xl'>{total}</h1>
    </div>
  )
}

export default Balance