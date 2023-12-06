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
	language: string;
}

const initialState: ProductsState = {
	products: [],
	isLoading: false,
	error: null,
	language: 'ua',
};

export const getProductsAsync = createAsyncThunk(
	'products/fetchProducts',
	async ({ productsFile, language }: { productsFile: string; language: string }) => {
		try {
			const response = await fetch(productsFile);

			if (!response.ok) {
				throw new Error(`Error fetching products: ${response.statusText}`);
			}
			const results: Product[] = await response.json();

			return { products: results, language };
		} catch (error) {
			if (error instanceof Error) {
				return { error: error.message };
			}
			return { error: 'An unknown error occurred.' };
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
			const { products, language } = action.payload as { products: Product[]; language: string };

			const productsArray = state.products as Product[];

			if (productsArray.length === 0) {
				state.products = products;
				state.language = language;
			} else {
				products.forEach((product: Product) => {
					const existingProduct = productsArray.find(
						(existing: Product) => existing.name === product.name,
					);

					if (!existingProduct) {
						productsArray.push(product);
					}
				});

				state.products = productsArray;
				state.language = language;
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
