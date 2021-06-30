import { createStore } from "redux";

const shopsList = [
  {
    id: "1",
    shopName: "Kanha groceries",
    shopArea: "Thane",
    shopType: "Grocery",
    openingDate: "05-05-2020",
    closingDate: "29-06-2021",
  },
  {
    id: "2",
    shopName: "Kanha groceries",
    shopArea: "Thane",
    shopType: "Grocery",
    openingDate: "05-05-2020",
    closingDate: "29-06-2021",
  },
  {
    id: "3",
    shopName: "Kanha Baker",
    shopArea: "Thane",
    shopType: "Baker",
    openingDate: "05-05-2020",
    closingDate: "29-06-2021",
  },
];

const shopReducer = (state = { shopsList }, action) => {
  if (action.type === "addShop") {
    return {
      shopsList: [...state.shopsList, action.newShop],
    };
  }

  return state;
};

const store = createStore(shopReducer);

export default store;
