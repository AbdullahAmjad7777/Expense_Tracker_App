import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
// import Transactionlist from './Transactionlist';
import Transaction_List from './Transaction_List';


const HistoryAssets = () => {
  const {transaction} = useContext(GlobalContext);
  console.log(transaction);
  
  return (
    <div className='p-2 w-full'>
        <div className=''>
        <h1 className='py-3'>History</h1>
        <hr  className='p-3'/>
        </div>
       <Transaction_List transaction={transaction} />
    </div>
  )
}

export default HistoryAssets