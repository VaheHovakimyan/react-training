import { useDispatch, useSelector } from "react-redux"
import { selectBackgrounds, backgroundsValue } from "../../Features/Main_settings/BackgroundsSlice";
import {
    selectColorMain,
    colorBackgroundValue,
    selectColorText,
    colorTextValue
} from "../../Features/Main_settings/ColorMainSlice";


export default function Main_settings() {

    const dispatch = useDispatch();
    const main_image = useSelector(selectBackgrounds);
    const colorMain = useSelector(selectColorMain);
    const colorText = useSelector(selectColorText);

    // const main_image = useSelector((state) => {
    //     return state.main_image.main_image
    // })

    // const color_background = useSelector((state) => {
    //     return state.color_background.color_background
    // })

    return (
        <div className='main_settings_open'>
            <div className='backgrounds'>

                <div className='background_title_div'>
                    <p className='background_title'>Backgrounds</p>
                </div>



                <div className='backgrounds_items'>
                    <div className='backgrounds_item'
                        onClick={() => { dispatch(backgroundsValue(1)) }}
                    >1</div>

                    <div className='backgrounds_item'
                        onClick={() => { dispatch(backgroundsValue(2)) }}
                    >2</div>

                    <div className='backgrounds_item'
                        onClick={() => { dispatch(backgroundsValue(3)) }}
                    >3</div>
                </div>

                <div>
                    Background on color
                </div>

                <div className='header_color_select_div'>
                    <p>Color</p>
                    <div>
                        Background section
                        <input
                            type="color"
                            name="background_color"
                            id="background_color"
                            className='header_color_select_input'
                            value={colorMain}
                            onChange={(e) => { dispatch(colorBackgroundValue(e.target.value)) }}
                        />
                    </div>

                    <div>
                        Text color
                        <input
                            type="color"
                            name="text_color"
                            id="text_color"
                            className='header_color_select_input'
                            value={colorText}
                            onChange={(e) => { dispatch(colorTextValue(e.target.value)) }}
                        />
                    </div>



                </div>

            </div>

        </div >
    )
}