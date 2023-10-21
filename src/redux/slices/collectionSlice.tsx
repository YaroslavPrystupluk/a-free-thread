import { createSlice } from '@reduxjs/toolkit';
import { selectProducts } from '../selectors';
import kiev from '../../images/Collections/collection_kiev.webp';
import grandmother from '../../images/Collections/collection_grandmother.webp';
import regions from '../../images/Collections/collection_regions.webp';
import store from '../store/store';

interface CollectionState {
	title: string;
	description: string;
	img: string;
	collectionProducts: [];
}

const initialState: CollectionState = {
	title: '',
	description: '',
	img: '',
	collectionProducts: [],
};

const collectionSlice = createSlice({
	name: 'collection',
	initialState,
	reducers: {
		collectionKiev: (state, action) => {
			state.title = 'сорочки київщини';
			state.description = 'Опис о сорочках Київщини';
			state.img = kiev;
			state.collectionProducts = action.payload;
		},
		collectionGrandmother: (state, action) => {
			state.title = 'Віднови вишиванку своєї бабусі';
			state.description = 'Опис о відновленні вишиванки';
			state.img = grandmother;
			state.collectionProducts = action.payload;
		},
		collectionRegions: (state, action) => {
			state.title = 'регіони україни';
			state.description = 'Опис о сорочках з регіонами україни';
			state.img = regions;
			state.collectionProducts = action.payload;
		},
	},
});

export const { reducer: collectionReducer } = collectionSlice;
export const { collectionKiev, collectionGrandmother, collectionRegions } = collectionSlice.actions;

export const selectCollection = (selectedProduct: string) => async (dispatch, getState) => {
	const waitForData = async () => {
		const products = selectProducts(getState());

		if (products.length === 0) {
			await new Promise((resolve) => setTimeout(resolve, 100));
			return waitForData();
		}
		return products;
	};
	const products = await waitForData();

	console.log(products);
	const collection = products.filter((product) => product.collection === selectedProduct);

	console.log(collection);
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
			console.log('Sorry, we are out of ' + product + '.');
	}
};

export default collectionReducer;
