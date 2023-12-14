import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	count: string;
}

const initialState: UserState = {
	count: '6'
};

export const ProcentSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		CurrentCount(state, action) {
			state.count = action.payload;
		}
	}
});

export default ProcentSlice.reducer;
