import { useEffect, useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

function BuyKRT() {
  const [amountOfKRT, setAmountOfKRT] = useState(0);
  const [amountInArs, setAmountInArs] = useState(0);

  useEffect(() => setAmountInArs(amountOfKRT * 1000), [amountOfKRT]);
  return (
    <div className="w-56 py-8 rounded-3xl border-2 border-gray-500 px-6 flex flex-col items-center gap-4 bg-gradient-to-br from-[#cd86c9] to-[#ad53a6]">
      <p className="mr-auto font-bold text-white">
        Compra <span className="adigiana">KRT</span>
      </p>

      <p className="text-center text-white font-bold">1 KRT = 1000 ARS</p>

      {/* SET AMOUNT */}
      <div className="flex items-center gap-4 font-bold text-3xl">
        <div
          onClick={() =>
            setAmountOfKRT((prevState) =>
              prevState - 1 >= 0 ? prevState - 1 : 0
            )
          }
          className="cursor-pointer shadow shadow-gray-800 bg-white rounded-full border p-1 border-black w-6 h-6 flex justify-center items-center"
        >
          <CgMathMinus />
        </div>
        <p className="text-5xl">{amountOfKRT}</p>
        <div
          onClick={() => {
            setAmountOfKRT((prevState) => prevState + 1);
          }}
          className="cursor-pointer shadow shadow-gray-800 bg-white rounded-full border p-1 border-black w-6 h-6 flex justify-center items-center"
        >
          <CgMathPlus />
        </div>
      </div>

      {/* ADDRESS */}
      <div>
        <p>Mi dirección:</p>
        <p className="text-white">0X65545665</p>
      </div>

      {/* TOTAL */}
      <div className="flex justify-between w-full">
        <p>TOTAL:</p>
        <p className="text-white">{amountInArs} ARS</p>
      </div>

      {/* MERCADO PAGO */}

      <button className="bg-white text-black shadow-sm shadow-gray-400 hover:shadow-md hover:shadow-gray-400 px-4 py-2 border border-gray-500 rounded-xl duration-300">
        MERCADO PAGO
      </button>
    </div>
  );
}

export default BuyKRT;
