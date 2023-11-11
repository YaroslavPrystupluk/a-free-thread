import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { Comments } from '../../model/Icomments';

interface TeamsState {
	comments: Comments[];
	isLoading: boolean;
	error: string | null | SerializedError;
}

const initialState: TeamsState = {
	comments: [],
	isLoading: false,
	error: null,
};

export const getCommentsAsync = createAsyncThunk<Comments[]>('comments/fetchComments', async () => {
	try {
		const response = await fetch('comments.json');

		if (!response.ok) {
			throw new Error(`Error fetching teams: ${response.statusText}`);
		}

		const results: Comments[] = await response.json();

		return results;
	} catch (error) {
		throw new Error('Failed to fetch teams');
	}
});

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		commentsReducer: (state, action) => {
			state.comments = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCommentsAsync.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getCommentsAsync.fulfilled, (state, action) => {
			state.isLoading = false;
			state.comments = action.payload;
		});
		builder.addCase(getCommentsAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message || action.error;
		});
	},
});

export const { commentsReducer } = commentsSlice.actions;
export default commentsSlice.reducer;
