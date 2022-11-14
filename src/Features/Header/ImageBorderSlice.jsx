import { createSlice } from '@reduxjs/toolkit';


export const ImageBorderSlice = createSlice({
    name: 'ImageBorder',
    initialState: {
        value: 0
    },
    reducers: {
        ImageBorderValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectImageBorder = (state) => state.ImageBorder.value;

export const { ImageBorderValue } = ImageBorderSlice.actions;

export default ImageBorderSlice.reducer;