import { createSlice } from '@reduxjs/toolkit';
import { Product } from './productsSlice';

export interface SearchResult {
	searchProduct: string;
	searchResult: Product[];
}

const initialState: SearchResult = {
	searchProduct: '',
	searchResult: [],
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.searchProduct = action.payload;
		},
		addResult: (state, action) => {
			state.searchResult = action.payload;
		},
		clearSearch: (state) => {
			state.searchProduct = '';
			state.searchResult = [];
		},
	},
});

export const { addProduct, addResult, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
