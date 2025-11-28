import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
  const { AddTransation } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); // "income" or "expense"

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (text.trim() === "" || amount === "" || isNaN(amount)) {
      alert("Please enter valid text and amount");
      return;
    }

    let finalAmount = Number(amount);
    if (type === "expense") {
      finalAmount = -Math.abs(finalAmount); // Ensure negative
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: finalAmount,
    };

    AddTransation(newTransaction);

    // Reset
    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <div className='p-2 w-full'>
      <div className='mb-3'>
        <h1 className='py-3 font-bold text-2xl text-gray-800'>Add Your Transaction</h1>
        <p className='text-gray-600'>
          Enter a description for your transaction and choose if it is income or expense.
        </p>
        <hr className='p-2' />
      </div>

      <form className='flex flex-col space-y-3' onSubmit={onSubmit}>

        {/* Text Input */}
        <div>
          <label className='text-xl font-semibold'>Description</label>
          <input
            type="text"
            className='w-full bg-white text-xl p-3 rounded border'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='E.g., Salary, Grocery, Freelance...'
          />
        </div>

        {/* Amount Input */}
        <div>
          <label className='text-xl font-semibold'>Amount</label>
          <input
            type="number"
            className='w-full bg-white text-xl p-3 rounded border'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Amount...'
          />
        </div>

        {/* Transaction Type Selector */}
        <div className='flex space-x-4'>
          <div
            className={`flex-1 p-3 text-center rounded cursor-pointer border ${
              type === "income" ? "bg-green-200 font-bold" : "bg-white"
            }`}
            onClick={() => setType("income")}
          >
            Income
          </div>
          <div
            className={`flex-1 p-3 text-center rounded cursor-pointer border ${
              type === "expense" ? "bg-red-200 font-bold" : "bg-white"
            }`}
            onClick={() => setType("expense")}
          >
            Expense
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className='p-4 bg-[#907EF6] rounded mt-3 text-white font-bold'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
