import { configureStore } from "@reduxjs/toolkit";
import nameReducer from '../Features/Header/NameSlice';
import surnameReducer from '../Features/Header/SurnameSlice'
import mailReducer from '../Features/Header/MailSlice';
import telReducer from '../Features/Header/TelSlice';
import addressReducer from '../Features/Header/AddressSlice';
import ImageBorderReducer from '../Features/Header/ImageBorderSlice';
import backgroundsReducer from '../Features/Main_settings/BackgroundsSlice';
import EducationYearReducer from '../Features/Education/EducationSlice';


export const store = configureStore({
    reducer: {
        name: nameReducer,
        surname: surnameReducer,
        mail: mailReducer,
        tel: telReducer,
        address: addressReducer,
        ImageBorder: ImageBorderReducer,
        backgrounds: backgroundsReducer,
        education: EducationYearReducer,
    },
});
