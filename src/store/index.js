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
  {
    id: "4",
    shopName: "Kanha groceries",
    shopArea: "Thane",
    shopType: "Grocery",
    openingDate: "05-05-2020",
    closingDate: "29-06-2021",
  },
  {
    id: "5",
    shopName: "Kanha Chemical",
    shopArea: "Najibabad",
    shopType: "Chemical",
    openingDate: "05-05-2020",
    closingDate: "29-06-2021",
  },
];

const shopReducer = (state = { shopsList }, action) => {
  if (action.type === "addShop") {
    return { shopsList: state.shopsList + 1 };
  }
  return state;
};

const store = createStore(shopReducer);

export default store;
