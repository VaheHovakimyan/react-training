import { createSlice } from '@reduxjs/toolkit';


export const surnameSlice = createSlice({
    name: 'surname',
    initialState: {
        value: "Hovakimyan"
    },
    reducers: {
        surnameValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectSurname = (state) => state.surname.value;

export const { surnameValue } = surnameSlice.actions;

export default surnameSlice.reducer;