/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import collectionSlice from '../slices/collectionSlice';
import teamsSlice from '../slices/teamsSlice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		collection: collectionSlice,
		teams: teamsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
