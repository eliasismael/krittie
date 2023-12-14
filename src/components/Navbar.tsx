import { useEffect, useState } from "react";
import logo from "../assets/Logo-Kritties.png";
import { NavLink, Link } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const { windowWidth } = useWindowWidth();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="flex items-center w-full h-32 sticky top-0 z-50 px-6">
      {/* DESKTOP */}
      {windowWidth >= 768 && (
        <ul className=" w-full flex justify-end items-center gap-8 text-[#cd86c9]">
          <li className="mr-auto ml-4 flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo Krittie" width={80} />
            </Link>
            <Link to="/">
              <p className="adigiana ml-4 text-4xl font-black text-[#ad53a6]">
                Krittie
              </p>
            </Link>
          </li>

          <li className="font-bold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/adoptions"}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Adoptions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/family"}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Family
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donations"}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Donations
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              On-line shop
            </NavLink>
          </li>
          <li className="bg-[#cd86c9] text-black rounded-full px-4 py-1 hover:bg-[#ad53a6] duration-300">
            <NavLink to={"/login"}>Sign in</NavLink>
          </li>
        </ul>
      )}

      {/* MOBILE */}
      {windowWidth < 768 && (
        <div className="flex justify-end w-full">
          <AiOutlineMenu
            className="menu-logo"
            onClick={() => setIsMenuVisible((prevState) => !prevState)}
          />

          <Menu
            isMenuVisible={isMenuVisible}
            windowWidth={windowWidth}
            setIsMenuVisible={setIsMenuVisible}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
