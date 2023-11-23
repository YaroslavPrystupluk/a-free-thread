/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import collectionSlice from '../slices/collectionSlice';
import productSlice from '../slices/productSlice';
import teamsSlice from '../slices/teamsSlice';
import commentsSlice from '../slices/commentsSlice';
import lastVisitedProductsSlice from '../slices/lastVisitedSlice';
import searchSlice from '../slices/searchSlice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		collection: collectionSlice,
		product: productSlice,
		teams: teamsSlice,
		comments: commentsSlice,
		lastVisited: lastVisitedProductsSlice,
		search: searchSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
