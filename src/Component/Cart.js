import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UsestateValue } from "./State";

const Cart = ({ image, price, title  }) => {
  const [ {basket}, dispatch] = UsestateValue();
  const add = () => {
    dispatch({
      type: "ADD",
      payload: {
        image: image,
        price: price,
        title: title,
        
      },
    });
  };

  return (
    <div>
      <div className="product-banner w-full flex justify-between   p-2  mt-10">
        <div className="  lg:w-[60%] w-[80%] font-bold flex justify-between items-center gap-6 lg:gap-10" >
          <div className=" flex justify-between lg:items-start items-center lg:w-[40%]  w-[30%] space-x-8 lg:space-x-28 ">
            <img
              src={image}
              alt="logo"
              className="   w-6 lg:w-24 lg:h-16 h-8 object-contain"
            />
            <span className="text-[7px]  lg:text-lg underline w-11 lg:w-full text-blue-600">
              {title}
            </span>
          </div>
          <div className=" flex lg:justify-between items-center space-x-7 lg:space-x-0 lg:w-[40%]  w-[65%]">
            <div className=" flex justify-between items-center gap-1">
              {/* <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[12px]  lg:text-xl"
                /> */}
              <span className="text-[12px]  lg:text-xl underline text-blue-600 capitalize">
                pink
              </span>
            </div>
            <div className="text-green-500 space-x-1  text-[12px] flex items-center lg:text-xl">
              <FontAwesomeIcon icon={faSmile} />
              <span className="text-[12px]  lg:text-xl"> In Stock</span>
            </div>
            <span className="text-[12px]  lg:text-xl text-gray-400">
              ${price}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3  text-[7px] lg:text-lg pl-4">
          <div
                type="text"
                placeholder="j"
                className=" w-7 lg:w-12 border border-gray-300  text-black text-center  h-10  "
              >{basket?.length} </div>

          <FontAwesomeIcon
            icon={faShoppingCart}
            className="bg-orange-400 p-1 px-1 cursor-pointer"
            onClick={add}
          />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
