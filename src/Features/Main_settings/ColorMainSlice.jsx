import { createSlice } from '@reduxjs/toolkit';


export const colorMainSlice = createSlice({
    name: 'colorMain',
    initialState: {
        colorBackground: "#000000",
        colorText: "#ffffff"
    },
    reducers: {
        colorBackgroundValue: (state, action) => {
            state.colorBackground = action.payload;
        },
        colorTextValue: (state, action) => {
            state.colorText = action.payload;
        }
    }
})

export const selectColorMain = (state) => state.colorMain.colorBackground;
export const selectColorText = (state) => state.colorMain.colorText;

export const { colorBackgroundValue, colorTextValue } = colorMainSlice.actions;

export default colorMainSlice.reducer;