import {
  faArrowRotateLeft, faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./FetchData";

const EcommarceWeb = () => {
  const [eco, seteco] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      seteco(data?.data);
    };
    fetchdata();
  }, []);
  const [filterData, setFilterData] = useState("");
  const filterDropDown = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];


  const [search, setSearch] = useState("");

  return (
    <div className="main_div  p-4">
      <div className="nav  flex 2xl:justify-between justify-around w-full flex-col lg:flex-row gap-10 ">
        <div className="nav_left flex justify-between gap-4  ">
          <div className="flex items-center border border-gray-400  p-1 justify-between  gap-6 w-40 rounded-md">
            <select
              onChange={(e) => setFilterData(e.target.value)}
              className="bg-white  focus:outline-none"
            >
              {filterDropDown.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center border border-gray-400  p-3 justify-between  w-40 rounded-md">
            <h3>Size</h3>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div onClick={() => {
            setFilterData('');
            setSearch("")

          }} className="reset cursor-pointer  flex items-center  gap-3  text-blue-500 ">
            <FontAwesomeIcon icon={faArrowRotateLeft}  className = "cursor-pointer"/>
            <span>Reset</span>
          </div>
        </div>

        <div className="nav_right flex items-center gap-4 w-full   flex-col md:flex-row lg:w-[30%] ">
          <div className="flex items-center gap-3">
            <span className="text-lg capitalize">search:</span>
            {/* <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" border border-gray-100 p-2  bg-gray-200 rounded-sm"
            /> */}
             <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" border border-gray-100 p-2  bg-gray-200 rounded-sm"
            />
          </div>
          <div className="flex items-center gap-2 ">
          <Link to="/d">
            <button className="bg-blue-500 text-white  p-3 w-full lg:w-44">
              ADD TO CART
            </button>
          </Link>
          {/* <div>{basket?.length}</div> */}
          </div>
        </div>
      </div>

      <div className="product-banner w-full flex justify-between  bg-gray-200  p-1 px-2  mt-10">
        <div className="  lg:w-[60%] w-[80%] font-bold flex justify-between items-center">
          <div className=" flex justify-between lg:w-[20%]  w-[30%] lg:gap-0 gap-1">
            <span className="text-[12px]  lg:text-xl">Image</span>
            <span className="text-[12px]  lg:text-xl">Name</span>
          </div>

          <div className=" flex lg:justify-between space-x-7 lg:space-x-0 lg:w-[40%]  w-[65%]">
            <div className=" flex justify-between items-center gap-1">
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-[12px]  lg:text-xl"
              />
              <span className="text-[12px]  lg:text-xl">color</span>
            </div>
            <span className="text-[12px]  lg:text-xl">Stock</span>
            <span className="text-[12px]  lg:text-xl">Price</span>
          </div>
        </div>
        <div className="font-bold text-[12px]  lg:text-xl">buy</div>
      </div>
      <div className="bg-black border border-black"></div>
     
      <FetchData search={search} filterData={filterData} eco={eco} />
    </div>
  );
};

export default EcommarceWeb;
