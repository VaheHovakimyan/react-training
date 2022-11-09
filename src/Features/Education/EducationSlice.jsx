import { createSlice } from '@reduxjs/toolkit';


export const educationSlice = createSlice({
    name: 'education',
    initialState: {
        degree: "Bachelor",
        univer: "Polytechnic",
        year: "2021-2025"
    },
    reducers: {
        educationDegree: (state, action) => {
            state.value = action.payload;
        },
        educationUniver: (state, action) => {
            state.value = action.payload;
        },
        educationYear: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectEducationDegree = (state) => state.education.degree;
export const selectEducationUniver = (state) => state.education.univer;
export const selectEducationYear = (state) => state.education.year;


export const { educationDegree, educationUniver, educationYear } = educationSlice.actions;

export default educationSlice.reducer;