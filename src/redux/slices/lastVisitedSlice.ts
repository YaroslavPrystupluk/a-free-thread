import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { Product } from './productsSlice';

export interface LastVisitedState {
	lastArray: Storage['lastVisitedArray'] | Product[] | unknown;
	isLoading: boolean;
	error: string | null | SerializedError;
}

const lastArrayFromStorage = localStorage.getItem('lastVisitedArray');
const initialState: LastVisitedState = {
	lastArray: lastArrayFromStorage ? JSON.parse(lastArrayFromStorage) : [],
	isLoading: false,
	error: null,
};

const lastVisitedProductsSlice = createSlice({
	name: 'lastArray',
	initialState,
	reducers: {
		addProduct(state, action) {
			const newItem = action.payload;

			const isDuplicate = state.lastArray.some(
				(item: { name: string }) => item.name === newItem.name,
			);

			if (!isDuplicate) {
				const newArray = [...state.lastArray, newItem].slice(-4);

				state.lastArray = newArray;

				localStorage.setItem('lastVisitedArray', JSON.stringify(newArray));
			}
		},
	},
});

export const { addProduct } = lastVisitedProductsSlice.actions;

export default lastVisitedProductsSlice.reducer;
