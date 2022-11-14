import { createSlice } from '@reduxjs/toolkit';


export const educationSlice = createSlice({
    name: 'education',
    initialState: {
        year: "hgh"
    },
    reducers: {
        educationYearValue: (state, action) => {
            state.value = action.payload;
        }
    }
})


export const selectEducationYear = (state) => state.education.year;

export const { educationYearValue } = educationSlice.actions;

export default educationSlice.reducer;