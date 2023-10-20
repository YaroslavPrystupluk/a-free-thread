import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
	reducer: {
		products: productsSlice,
		collection: collectionSlice,
	},
});

export default store;
