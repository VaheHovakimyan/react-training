import { createSlice } from '@reduxjs/toolkit';


export const educationSlice = createSlice({
    name: 'education',
    initialState: {
        value: "jdj"
    },
    reducers: {
        educationValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectEducation = (state) => state.education.value;

export const { educationValue } = educationSlice.actions;

export default educationSlice.reducer;