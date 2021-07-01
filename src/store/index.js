import { configureStore, createSlice } from "@reduxjs/toolkit";

const shopListSlice = createSlice({
  name: "shopList",
  initialState: {
    shopsList: [],
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
