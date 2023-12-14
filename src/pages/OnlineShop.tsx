import BuyKRT from "../components/Cards/BuyKRT";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/cart.css";

function OnlineShop() {
  return (
    <div className="relative flex flex-col items-center gap-10 ">
      <div className="absolute right-0 top-0">
        <div>
          <form
            action="https://www.upland.me/"
            method="get"
            target="_blank"
            className="relative flex flex-col items-center"
          >
            <AiOutlineShoppingCart className="cart" />

            <button className="adigiana bg-[#db869b] text-black border text-sm border-black px-2 py-1 rounded-lg  hover:shadow-sm hover:shadow-black/50 duration-500">
              TIENDA VIRTUAL
            </button>
          </form>
        </div>
      </div>

      <div className="my-20">
        <BuyKRT />
      </div>
    </div>
  );
}

export default OnlineShop;
