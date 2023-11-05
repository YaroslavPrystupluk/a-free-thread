/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import collectionSlice from '../slices/collectionSlice';
import productSlice from '../slices/productSlice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		collection: collectionSlice,
		product: productSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
