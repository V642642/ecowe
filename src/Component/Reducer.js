export const intialstate = {
  basket: [],
  baske:[]
};

export const getTotalbasket = (basket) => {
  const TotalAmount = basket?.reduce((amount, item) => item.price + amount, 0);
  console.log(TotalAmount, "TotalAmount");
  return TotalAmount;
};

export const reducer = (state, action) => {
  console.log(action, "jjj");
  console.log(state, " ll");
  switch (action.type) {
    case "ADD":
        
        
      return { ...state, basket: [...state.basket, action.payload] };


    case "REMOVE_TO_CART":
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
      }

      return { ...state, basket: newbasket };
    default:
      return state;
  }







};
