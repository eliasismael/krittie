import logo from "../assets/Logo-Kritties.png";

import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function LogIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex h-full text-[#502779] items-center">
      {/* LEFT SIDE */}
      <div className="h-[90%] shadow-2xl shadow-black w-5/12 flex flex-col justify-center items-center px-20">
        {/* LOGO & REGISTER */}
        <div className="flex items-end border justify-center relative w-full mb-4">
          <img src={logo} width={80} />
          <p className="absolute right-0">Register</p>
        </div>

        {/* FORM */}
        <div className="w-full">
          <form className="flex flex-col gap-6 justify-evenly items-center border w-full">
            {/* EMAIL */}
            <label className="flex flex-col font-bold w-full">
              Email
              <input
                type="email"
                className="outline-none rounded-md border border-[#502779] leading-10 font-normal text-black"
              />
            </label>

            {/* PASSWORD */}

            <div className="flex items-end w-full relative">
              <label className="flex flex-col w-full">
                Password
                <input
                  className="outline-none rounded-md border border-[#502779] leading-10 font-normal text-black"
                  type={isPasswordVisible ? "text" : "password"}
                ></input>
              </label>

              {/* EYE */}
              <div
                onClick={() => setIsPasswordVisible((prevState) => !prevState)}
                className="absolute right-2 mb-3 cursor-pointer"
              >
                {!isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            {/* CHECKBOX */}
            <div className="flex gap-2 justify-start w-full">
              <input type="checkbox" />
              <p className="text-sm">Remember me</p>
            </div>

            <button
              type="submit"
              className="bg-[#502779] text-white w-full py-2 rounded-md shadow-md shadow-gray-500"
            >
              LogIn
            </button>
          </form>

          <button
            type="button"
            className="bg-[#f9aad0] text-[#502779] w-full py-2 mt-6 rounded-md shadow-md shadow-gray-500 flex justify-center items-center"
          >
            <TbWorld /> <span className="ml-1">Terms & Conditions</span>
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col justify-evenly px-20">
        <p>
          Refugios que implementan nuestra tecnología para cultivar confianza y
          transparencia en sus procesos.
        </p>{" "}
        <div className="flex border justify-evenlyb">
          <caption>Perf Gatitos</caption>
          <caption>Perf Gatitos</caption>
          <caption>Perf Gatitos</caption>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
