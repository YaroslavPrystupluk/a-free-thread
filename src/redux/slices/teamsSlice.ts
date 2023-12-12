import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { Teams } from '../../model/Iteams';

interface TeamsState {
	teams: Teams[];
	isLoading: boolean;
	error: string | null | SerializedError;
}

const initialState: TeamsState = {
	teams: [],
	isLoading: false,
	error: null,
};

export const getTeamsAsync = createAsyncThunk<Teams[], string>(
	'teams/fetchTeams',
	async (language) => {
		try {
			const response = await fetch(`teams_${language}.json`);

			if (!response.ok) {
				throw new Error(`Error fetching teams: ${response.statusText}`);
			}

			const results: Teams[] = await response.json();

			return results;
		} catch (error) {
			throw new Error('Failed to fetch teams');
		}
	},
);

const teamsSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {
		teamsReducer: (state, action) => {
			state.teams = action.payload;
		},
	},
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

export const { teamsReducer } = teamsSlice.actions;
export default teamsSlice.reducer;
