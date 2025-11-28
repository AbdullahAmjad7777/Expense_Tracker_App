import React from 'react'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import HistoryAssets from './Components/HistoryAssets'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4">
          <div className="w-full max-w-2xl bg-white border p-6 rounded-2xl shadow-xl">

            <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
              Expense Tracker
            </h1>

            <div className="flex flex-col gap-6 w-full">
              <Balance />
              <IncomeExpense />
              <HistoryAssets />
              <AddTransaction />
            </div>

          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
