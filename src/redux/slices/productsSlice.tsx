/* eslint-disable @typescript-eslint/space-before-blocks */
/* eslint-disable prettier/prettier */
import {
	createSlice, PayloadAction, Dispatch, AnyAction,
} from "@reduxjs/toolkit";

export interface Product {
	id: number;
	name: string;
	price: string;
	description: string;
	collection: string;
	imageUrls: [];
}

interface ProductsState {
	products: Product[];
}

const initialState: ProductsState = {
	products: [],
};


const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		printProducts(state, action: PayloadAction<Product[]>){
			return {
				...state,
				products: action.payload,
			};
		},
	},
});

export const { printProducts } = productsSlice.actions;

export const getProductsAsync = (productsFile: string) => async(dispatch: Dispatch<AnyAction>) => {
	try {
		const response = await fetch(`src/products/${productsFile}.json`);

		if (response.ok) {
			const results: Product[] = await response.json();

			dispatch(printProducts(results));
		} else {
			console.error("Error fetching products:", response.statusText);
		}
	} catch (error) {
		console.error("Error fetching products:", error);
	}
};

export default productsSlice.reducer;
