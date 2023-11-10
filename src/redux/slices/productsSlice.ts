import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

export interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	collection: string;
	imageUrls: string[];
	size: string[];
	recommendations: string;
}

export interface ProductsState {
	products: Product[] | unknown;
	isLoading: boolean;
	error: string | null | SerializedError;
}

const initialState: ProductsState = {
	products: [],
	isLoading: false,
	error: null,
};

export const getProductsAsync = createAsyncThunk(
	'products/fetchProducts',
	async (productsFile: string) => {
		try {
			const response = await fetch(productsFile);

			if (!response.ok) {
				throw new Error(`Error fetching products: ${response.statusText}`);
			}
			const results: Product[] = await response.json();

			return results;
		} catch (error) {
			return error;
		}
	},
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductsAsync.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getProductsAsync.fulfilled, (state, action) => {
			state.isLoading = false;
			const productsArray = state.products as Product[];

			if (productsArray.length === 0) {
				state.products = action.payload;
			} else {
				(action.payload as Product[]).forEach((product: Product) => {
					const existingProduct = productsArray.find(
						(existing: Product) => existing.name === product.name,
					);

					if (!existingProduct) {
						productsArray.push(product);
					}
				});

				state.products = productsArray;
			}
		});

		builder.addCase(getProductsAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || action.error;
		});
	},
});

export const { reducer: productsReducer } = productsSlice;

export default productsReducer;
