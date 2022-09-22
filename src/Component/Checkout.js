import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { UsestateValue } from "./State";
import { getTotalbasket } from "./Reducer";

const Checkout = () => {
  const [{ basket }, dispatch] = UsestateValue();
  //   const [, dispatch] = UsestateValue();
 
  
  const remov = (id) => {
    dispatch({
      type: "REMOVE_TO_CART",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className=" check mt-6 p-3  flex gap-7 flex-col lg:flex-row">
      <div className="products   lg:w-[75%] w-full  lg:text-lg text-[10px]">
        <div className=" flex justify-between w-full font-bold mt-9">
          <div className="w-[30%] flex justify-center">
            <span>Product</span>
          </div>
          <div className=" flex justify-between w-[50%] ">
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotals</span>
          </div>
        </div>

        {/* <hr className="mt-10"></hr> */}
        {basket?.map((val, id) => {
          return (
            <>
              <hr className="mt-10"></hr>

              <div
                className="items  flex w-full justify-between mt-10 items-center"
                key={id}
              >
                <div className="w-[35%] gap-5 lg:gap-4 flex justify-between items-center">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={remov}
                    className="cursor-pointer"
                  />
                  <img
                  alt="logo"
                    src={val.image}
                    className="   w-6 lg:w-24 lg:h-16 h-8 object-contain"
                  />
                  <p>{val.title}</p>
                </div>
                <div className=" flex justify-between items-center w-[50%]  ">
                  <span>{val.price}</span>
                  <div className="button flex  justify-between border border-gray-500  md:w-24 w-16 lg:p-2 p-0 items-center px-2 gap-4 rounded-full">
                    <button className="">-</button>
                    <span></span>
                    <button className="text-lg">+</button>
                  </div>
                  <span className="text-blue-500">{val.price}</span>
                </div>
              </div>
            </>
          );
        })}
        <hr className="mt-10"></hr>
      </div>

      <div className="card_total lg:w-[20%] w-full h-[40vh] p-3 border border-gray-300 space-y-7">
        <div className="text-2xl mt-5">
          <h1>Card totals</h1>
        </div>
        <div className="subtotals flex justify-between items-center">
          <div className="font-bold text-sm">Subtotals</div>
          <span>{getTotalbasket(basket)}</span>
        </div>
        <hr></hr>
        <div className="subtotals flex justify-between items-center capitalize text-xl">
          <div className="font-bold ">totals</div>
          <span className="text-blue-600">{getTotalbasket(basket)}</span>
        </div>
        <button className="bg-blue-700 border rounded-full text-white w-full p-2  font-bold">
          Procced To Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
