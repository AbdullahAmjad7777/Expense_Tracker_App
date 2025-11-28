import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map(el => el.amount);

  // ✅ Correct Income (only positive values)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  // ✅ Correct Expense (only negative values)
  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="flex items-center justify-between bg-white w-full shadow-xl/30 p-3">
      <div className="text-center">
        <p className="text-xl">INCOME</p>
        <h1 className="font-bold text-2xl text-[#8DD8B0]">{income}</h1>
      </div>

      <p className="text-4xl font-light">|</p>

      <div className="text-center">
        <p className="text-xl">EXPENSE</p>
        <h1 className="font-bold text-2xl text-red-900">{expense}</h1>
      </div>
    </div>
  );
};

export default IncomeExpense;
