/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import kiev from '../../images/Collections/collection_kiev.webp';
import grandmother from '../../images/Collections/collection_grandmother.webp';
import regions from '../../images/Collections/collection_regions.webp';
import { getProductsAsync, Product } from './productsSlice';
import store from '../store/store';

export interface CollectionItem {
	title: string;
	description: string;
	img: string;
	collectionProducts: [];
}

export interface CollectionState {
	kiev: CollectionItem;
	grandmother: CollectionItem;
	regions: CollectionItem;
}

export type RootState = ReturnType<typeof store.getState>;

export const selectProducts = (state: RootState) => state.products.products;

const initialState: CollectionState = {
	kiev: {
		title: 'сорочки київщини',
		description:
			'Опис о сорочках Київщини. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
		img: kiev,
		collectionProducts: [],
	},
	grandmother: {
		title: 'Віднови вишиванку своєї бабусі',
		description:
			'Опис о відновленні вишиванки. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
		img: grandmother,
		collectionProducts: [],
	},
	regions: {
		title: 'регіони україни',
		description:
			'Опис о сорочках з регіонами україни. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
		img: regions,
		collectionProducts: [],
	},
};

const collectionSlice = createSlice({
	name: 'collection',
	initialState,
	reducers: {
		collectionKiev: (state, action) => {
			state.kiev.collectionProducts = action.payload;
		},
		collectionGrandmother: (state, action) => {
			state.grandmother.collectionProducts = action.payload;
		},
		collectionRegions: (state, action) => {
			state.regions.collectionProducts = action.payload;
		},
	},
});

export const { reducer: collectionReducer } = collectionSlice;
export const { collectionKiev, collectionGrandmother, collectionRegions } = collectionSlice.actions;

export const selectCollection =
	(selectedProduct: string) => (dispatch: Dispatch, getState: () => RootState) => {
		const state = getState();
		const products = selectProducts(state) as Product[];

		if (products.length === 0) {
			try {
				dispatch(getProductsAsync('shirts'));
			} catch (error) {
				console.error('Помилка завантаження продуктів', error);
				return;
			}
		}

		const updatedProducts: Product[] = selectProducts(state) as Product[];

		const collection = updatedProducts.filter((product) => product.collection === selectedProduct);

		switch (selectedProduct) {
			case 'kiev':
				dispatch(collectionKiev(collection));
				break;

			case 'grandmother':
				dispatch(collectionGrandmother(collection));
				break;

			case 'regions':
				dispatch(collectionRegions(collection));
				break;

			default:
				console.log(`Sorry, we are out of ${selectedProduct}.`);
		}
	};

export default collectionReducer;
