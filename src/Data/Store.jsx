import { configureStore } from "@reduxjs/toolkit";
import nameReducer from '../Features/Header/NameSlice';
import surnameReducer from '../Features/Header/SurnameSlice'
import mailReducer from '../Features/Header/MailSlice';
import telReducer from '../Features/Header/TelSlice';
import addressReducer from '../Features/Header/AddressSlice';
import backgroundsReducer from '../Features/Main_settings/BackgroundsSlice';
import educationReducer from "../Features/Education/EducationSlice";


export const store = configureStore({
    reducer: {
        name: nameReducer,
        surname: surnameReducer,
        mail: mailReducer,
        tel: telReducer,
        address: addressReducer,
        backgrounds: backgroundsReducer,
        education: educationReducer,
    },
});
