import { createSlice } from '@reduxjs/toolkit';


export const telSlice = createSlice({
    name: 'tel',
    initialState: {
        value: "(+374)69-94-89-32, (+374)79-94-89-32"
    },
    reducers: {
        telValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectTel = (state) => state.tel.value;

export const { telValue } = telSlice.actions;

export default telSlice.reducer;