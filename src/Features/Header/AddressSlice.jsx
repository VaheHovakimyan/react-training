import { createSlice } from '@reduxjs/toolkit';


export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        value: "Town Ejmiatsin, region Armavir, Armenia"
    },
    reducers: {
        addressValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectAddress = (state) => state.address.value;

export const { addressValue } = addressSlice.actions;

export default addressSlice.reducer;