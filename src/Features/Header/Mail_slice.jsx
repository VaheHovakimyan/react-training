import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        value: "vahe.hovakimyan.19@mail.ru"
    },
    reducers: {
        mailValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectMail = (state) => state.mail.value;

export const { mailValue } = mailSlice.actions;

export default mailSlice.reducer;