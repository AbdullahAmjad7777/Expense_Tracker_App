import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
  const { AddTransation } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(""); // ✅ string, NOT number

  const onsubmit = (e) => {
    e.preventDefault();

    // ✅ validation to stop empty or invalid numbers
    if (text.trim() === "" || amount === "" || isNaN(amount)) {
      alert("Please enter valid text and amount");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: Number(amount) // ✅ safely convert to number
    };

    AddTransation(newTransaction);

    // ✅ reset properly
    setText("");
    setAmount("");
  };

  return (
    <div className='p-2 w-full'>
      <div>
        <h1 className='py-3 font-bold'>Add New Transaction</h1>
        <hr className='p-2' />
      </div>

      <form className='flex flex-col space-y-1' onSubmit={onsubmit}>
        
        <label className='text-xl font-bold'>Text</label>
        <input
          type="text"
          className='w-full bg-white text-xl p-3'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter Text.....'
        />

        <label className='text-xl font-bold'>
          Amount (Negative = Expense, Positive = Income)
        </label>
        <input
          type="number"
          className='w-full bg-white text-xl p-3'
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // ✅ string allowed
          placeholder='Enter Amount.....'
        />

        <button type="submit" className='p-5 bg-[#907EF6] rounded mt-2'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
