/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import collectionSlice from '../slices/collectionSlice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		collection: collectionSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
