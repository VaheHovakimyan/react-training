import { createSlice } from '@reduxjs/toolkit';


export const EducationYearSlice = createSlice({
    name: 'education',
    initialState: {
        degree: "Bachelor's degree",
        univer: "National Polytech University of Armenia",
        year: "2021-2025"
    },
    reducers: {
        educationDegreeValue: (state, action) => {
            state.degree = action.payload;
        },
        educationUniverValue: (state, action) => {
            state.univer = action.payload;
        },
        educationYearValue: (state, action) => {
            state.year = action.payload;
        }
    }
})

export const selectEducationDegree = (state) => state.education.degree;
export const selectEducationUniver = (state) => state.education.univer;
export const selectEducationYear = (state) => state.education.year;


export const { educationDegreeValue, educationUniverValue, educationYearValue } = EducationYearSlice.actions;

export default EducationYearSlice.reducer;