import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

export interface Teams {
	image: string;
	name: string;
	position: string;
	city: string;
}

export interface TeamsState {
	teams: Teams[] | unknown;
	isLoading: boolean;
	error: string | null | SerializedError;
}

const initialState: TeamsState = {
	teams: [],
	isLoading: false,
	error: null,
};

export const getTeamsAsync = createAsyncThunk('teams/fetchTeams', async (teamsFile: string) => {
	try {
		const response = await fetch(`src/products/${teamsFile}.json`);

		if (!response.ok) {
			throw new Error(`Error fetching products: ${response.statusText}`);
		}
		const results: Teams[] = await response.json();

		return results;
	} catch (error) {
		return error;
	}
});

const teamsSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTeamsAsync.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getTeamsAsync.fulfilled, (state, action) => {
			state.isLoading = false;
			state.teams = action.payload;
		});
		builder.addCase(getTeamsAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || action.error;
		});
	},
});

export const { reducer: teamsReducer } = teamsSlice;
export default teamsReducer;
