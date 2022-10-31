import { createSlice } from '@reduxjs/toolkit';


export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        value: "Vahe"
    },
    reducers: {
        nameValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectName = (state) => state.name.value;

export const { nameValue } = nameSlice.actions;

export default nameSlice.reducer;