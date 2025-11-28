import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState"; // ✅ REMOVE unused GlobalProvider

const Transaction_List = ({ transaction = [] }) => {   // ✅ default empty array safety
  const { deleteTransation } = useContext(GlobalContext);

  return (
    <>
      {transaction.length === 0 && (
        <p className="text-center text-gray-400">No transactions yet</p>
      )}

      {transaction.map((el) => {
        const sign = el.amount < 0 ? "-" : "+";

        return (
            <div
            key={el.id}
              className={
                sign === "+"
                  ? "border-r-[15px] border-green-900 w-full flex items-center justify-between pr-3 w-full flex items-center justify-between bg-white rounded p-3 my-2 shadow-xl/30"
                  : "border-r-[15px] border-red-900 w-full flex items-center justify-between pr-3 w-full flex items-center justify-between bg-white rounded p-3 my-2 shadow-xl/30"
              }
            >
              <p>{el.text}</p>

              <h1 className="font-bold">
                {sign}{Math.abs((el.amount))} {/* ✅ absolute number safety */}
              </h1>

              <button
                type="button"
                className="border py-2 px-5 bg-red-900 text-white font-bold"
                onClick={() => deleteTransation(el.id)} // ✅ delete works perfectly
              >
                X
              </button>
            </div>
        );
      })}
    </>
  );
};

export default Transaction_List;
