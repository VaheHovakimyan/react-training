import { useDispatch, useSelector } from "react-redux"




export default function Main_settings() {

    const dispatch = useDispatch();

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

                {/* <div className='backgrounds_items'>
                    <div className='backgrounds_item'
                        onClick={() => {
                            dispatch({
                                type: "change_id",
                                payload: {
                                    background_id: 1
                                }
                            })
                        }}
                    >1</div>

                    <div className='backgrounds_item'
                        onClick={() => {
                            dispatch({
                                type: "change_id",
                                payload: {
                                    background_id: 2
                                }
                            })
                        }}
                    >2</div>

                    <div className='backgrounds_item'
                        onClick={() => {
                            dispatch({
                                type: "change_id",
                                payload: {
                                    background_id: 3
                                }
                            })
                        }}
                    >3</div>
                </div>

                <div>
                    Background on color
                </div>

                <div className='header_color_select_div'>
                    <p>Color</p>
                    <input
                        type="color"
                        name="color"
                        id="background_color"
                        className='header_color_select_input'
                        value={color_background}
                        onChange={(evt) => {
                            dispatch({
                                type: "color_change_value",
                                payload: {
                                    color_background: evt.target.value
                                }
                            })
                        }}
                    />
                </div> */}

            </div>

        </div>
    )
}