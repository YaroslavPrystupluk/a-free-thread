import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
	reducer: {
		products: productsSlice,
	},
});

export default store;
