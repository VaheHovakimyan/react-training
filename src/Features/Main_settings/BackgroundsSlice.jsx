import { createSlice } from '@reduxjs/toolkit';


export const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {
        value: "3"
    },
    reducers: {
        backgroundsValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectBackgrounds = (state) => state.backgrounds.value;

export const { backgroundsValue } = backgroundsSlice.actions;

export default backgroundsSlice.reducer;