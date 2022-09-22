import React from "react";
import Cart from "./Cart";

const FetchData = ({ eco, filterData, search }) => {
  return (
    <div>
      {eco?.filter((data) => {
          if (search === "") {
            return data;
          }else if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return data;
          }
          return false 

        }).filter((data) => {
          if (filterData === "") {
            return data;
          }else{
            return data.category === filterData;
          }
        }).map((value, index) => {
          return (
            <Cart
              id={value.id}
              image={value.image}
              price={value.price}
              title={value.title}
              quantity={1}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default FetchData;
