/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { getProductsAsync, Product } from './productsSlice';
import { RootState } from '../store/store';

export interface ProductsState {
	product: Product | unknown;
	isLoading: boolean;
	error: string | null | SerializedError;
	productNotFound: boolean;
}

const initialState: ProductsState = {
	product: {} as Product,
	isLoading: false,
	error: null,
	productNotFound: false,
};

export const selectProducts = (state: RootState) => state.products.products;

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (idProduct: number, { getState, dispatch }) => {
		const state = getState() as RootState;
		const products = selectProducts(state) as Product[];

		if (products.length === 0) {
			try {
				await dispatch(getProductsAsync('../public/shirts.json'));
				const updatedState = getState() as RootState;
				const updatedProducts = selectProducts(updatedState) as Product[];
				const productItem = updatedProducts.find((product) => Number(product.id) === idProduct);

				return productItem;
			} catch (error) {
				console.error('Помилка завантаження продуктів', error);
				throw error;
			}
		}

		const productItem = products.find((product) => Number(product.id) === idProduct);

		return productItem;
	},
);

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			if (action.payload) {
				state.product = action.payload;
				state.productNotFound = false;
			} else {
				state.productNotFound = true;
			}
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || action.error;
		});
	},
});

export const { reducer: productReducer } = productSlice;

export default productReducer;
