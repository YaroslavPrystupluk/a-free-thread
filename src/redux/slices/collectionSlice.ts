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
	title: string;
	description: string;
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
		title: 'сорочки київщини',
		description:
			'Опис о сорочках Київщини...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		img: kiev,
		collectionProducts: [],
	},
	grandmother: {
		title: 'Віднови вишиванку своєї бабусі',
		description:
			'Опис о відновленні вишиванки...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		img: grandmother,
		collectionProducts: [],
	},
	regions: {
		title: 'регіони україни',
		description:
			'Опис о сорочках з регіонами україни...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		img: regions,
		collectionProducts: [],
	},
	accessories: {
		title: 'Аксессуари',
		description:
			'Опис о аксессуарах...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		img: accessories,
		collectionProducts: [],
	},
	isLoadingCollection: false,
	error: null,
};

export const selectCollection = createAsyncThunk(
	'collection/selectCollection',
	async (selectedProduct: string, { getState, dispatch }) => {
		const state = getState() as RootState;
		const products = selectProducts(state) as Product[];

		if (products.length === 0) {
			try {
				await dispatch(getProductsAsync('public/shirts.json'));
			} catch (error) {
				console.error('Помилка завантаження продуктів', error);
				throw error;
			}
		}

		const updatedProducts: Product[] = selectProducts(state) as Product[];

		const collection = updatedProducts.filter((product) => product.collection === selectedProduct);

		return collection;
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
			if (action.meta.arg === 'kiev') {
				state.kiev.collectionProducts = action.payload;
			} else if (action.meta.arg === 'grandmother') {
				state.grandmother.collectionProducts = action.payload;
			} else if (action.meta.arg === 'regions') {
				state.regions.collectionProducts = action.payload;
			} else if (action.meta.arg === 'accessories') {
				state.accessories.collectionProducts = action.payload;
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
