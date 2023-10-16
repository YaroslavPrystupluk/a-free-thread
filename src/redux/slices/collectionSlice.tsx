import { createSlice } from "@reduxjs/toolkit";
import { selectProducts } from "../selectors";
import kiev from "../../images/Collections/collection_kiev.webp";
import grandmother from "../../images/Collections/collection_grandmother.webp";
import regions from "../../images/Collections/collection_regions.webp";

interface CollectionState {
	title: string;
	description: string;
	img: string;
	collectionImages: [];
}

const initialState: CollectionState = {
	title: "",
	description: "",
	img: "",
	collectionImages: [],
};

export const printCollectionCard = (product: string) => {
	const collection = selectProducts.filter((product) => product.collection === "kiev");
	switch (product) {
		case "kiev":
			collectionKiev(collection);
			break;
		case "grandmother":
			collectionGrandmother(collection);
			break;
		case "regions":
			collectionRegions(collection);
			break;
		default:
			console.log("Sorry, we are out of " + product + ".");
	}
};

const collectionSlice = createSlice({
	name: "collection",
	initialState,
	reducers: {
		collectionKiev(state, action) {
			state.title = "сорочки київщини";
			state.description = "Опис о сорочках Київщини";
			state.img = kiev;
			state.collectionImages = action.payload;
		},
		collectionGrandmother(state, action) {
			state.title = "Віднови вишиванку своєї бабусі";
			state.description = "Опис о відновленні вишиванки";
			state.img = grandmother;
			state.collectionImages = action.payload;
		},
		collectionRegions(state, action) {
			state.title = "регіони україни";
			state.description = "Опис о сорочках з регіонами україни";
			state.img = regions;
			state.collectionImages = action.payload;
		},
	},
});

export const { reducer: collectionReducer } = collectionSlice;

export default collectionReducer;
