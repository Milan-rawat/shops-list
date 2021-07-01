import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const shopListSlice = createSlice({
  name: "shopList",
  initialState: {
    shopsList: shopsList,
  },
  reducers: {
    addShop(state, action) {
      state.shopsList = [...state.shopsList, action.payload];
    },
    removeShop(state, action) {
      state.shopsList = state.shopsList.filter(
        (shop) => action.payload !== shop.id
      );
    },
    updateShop(state, action) {
      state.shopsList = state.shopsList.map((shop) => {
        if (shop.id === action.payload.id) {
          return action.payload;
        } else return shop;
      });
    },
  },
});

export const shopListActions = shopListSlice.actions;

const store = configureStore({
  reducer: { shopsList: shopListSlice.reducer },
});

export default store;
