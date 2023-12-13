import logo from "../assets/Logo-Kritties.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center w-full h-32 sticky top-0">
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
        <li className="bg-[#cd86c9] text-black rounded-full px-4 py-1 hover:bg-[#ad53a6] duration-300">
          <NavLink to={"/login"}>LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
