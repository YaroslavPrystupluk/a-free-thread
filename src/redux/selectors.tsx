import store from "./store/store";

export const selectProducts = (state: RootState) => state.products.products;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectError = (state: RootState) => state.products.error;

export type RootState = ReturnType<typeof store.getState>;
