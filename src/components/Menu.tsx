import { NavLink, Link } from "react-router-dom";

import "../styles/Menu.css";

interface MenuProps {
  windowWidth: number;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { setIsMenuVisible, isMenuVisible } = props;

  return (
    <div
      className={`
      w-10/12 flex flex-col gap-4 items-center bg-white fixed top-24 py-4 left-1/2
      transform -translate-x-1/2 rounded-lg shadow-md border z-50
       border-[#ad53a6] shadow-[#ad53a6]
      duration-500
  
      ${!isMenuVisible && "-translate-y-[30rem]"}
    `}
    >
      <ul className=" w-full flex flex-col justify-end items-center gap-8 text-[#cd86c9]">
        <li className="font-bold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
            onClick={() => setIsMenuVisible(false)}
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
            onClick={() => setIsMenuVisible(false)}
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
            onClick={() => setIsMenuVisible(false)}
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
            onClick={() => setIsMenuVisible(false)}
          >
            Donations
          </NavLink>
        </li>
        <li
          className="text-[#cd86c9] text-black rounded-full px-4 py-1 hover:bg-[#ad53a6] duration-300"
          onClick={() => setIsMenuVisible(false)}
        >
          <NavLink to={"/login"}>Sign in</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
