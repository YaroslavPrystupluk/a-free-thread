/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import kiev from '../../images/Collections/collection_kiev.webp';
import grandmother from '../../images/Collections/collection_grandmother.webp';
import regions from '../../images/Collections/collection_regions.webp';
import accessories from '../../images/Sleeves/sleeves_1.webp';
import { getProductsAsync, Product } from './productsSlice';
import { RootState } from '../store/store';

export interface CollectionItem {
	img: string;
	collectionProducts: Product[];
}

export interface CollectionState {
	kiev: CollectionItem;
	grandmother: CollectionItem;
	regions: CollectionItem;
	accessories: CollectionItem;
	isLoadingCollection: boolean;
	error: string | null | SerializedError;
}

export const selectProducts = (state: RootState) => state.products.products;

const initialState: CollectionState = {
	kiev: {
		img: kiev,
		collectionProducts: [],
	},
	grandmother: {
		img: grandmother,
		collectionProducts: [],
	},
	regions: {
		img: regions,
		collectionProducts: [],
	},
	accessories: {
		img: accessories,
		collectionProducts: [],
	},
	isLoadingCollection: false,
	error: null,
};

export const selectCollection = createAsyncThunk(
	'collection/selectCollection',
	async (
		{ selectedProduct, language }: { selectedProduct: string; language: string },
		{ getState, dispatch },
	) => {
		const state = getState() as RootState;
		const products = selectProducts(state) as Product[];

		if (products.length === 0) {
			try {
				await dispatch(
					getProductsAsync({ productsFile: `public/shirts_${language}.json`, language }),
				);
			} catch (error) {
				console.error('Помилка завантаження продуктів', error);
				throw error;
			}
		}

		const updatedProducts: Product[] = selectProducts(state) as Product[];

		const collection = updatedProducts.filter((product) => product.collection === selectedProduct);

		return { selectedProduct, language, collection };
	},
);

const collectionSlice = createSlice({
	name: 'collection',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(selectCollection.pending, (state) => {
			state.isLoadingCollection = true;
			state.error = null;
		});
		builder.addCase(selectCollection.fulfilled, (state, action) => {
			state.isLoadingCollection = false;
			if (action.payload.selectedProduct === 'kiev') {
				state.kiev.collectionProducts = action.payload.collection;
			} else if (action.payload.selectedProduct === 'grandmother') {
				state.grandmother.collectionProducts = action.payload.collection;
			} else if (action.payload.selectedProduct === 'regions') {
				state.regions.collectionProducts = action.payload.collection;
			} else if (action.payload.selectedProduct === 'accessories') {
				state.accessories.collectionProducts = action.payload.collection;
			}
		});
		builder.addCase(selectCollection.rejected, (state, action) => {
			state.isLoadingCollection = false;
			state.error = action.error.message || action.error;
		});
	},
});

export const { reducer: collectionReducer } = collectionSlice;

export default collectionReducer;
