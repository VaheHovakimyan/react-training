import { useState } from "react";
import { useSelector } from "react-redux";
import { selectImageBorder } from "../../../Features/Header/ImageBorderSlice";
import nkar from "../../../Resume_backgrounds/image_3.png";


export default function View_Person_Image({ profileImg, setProfileImg }) {

    // original

    // const color_background = useSelector((state) => {
    //     return state.color_background.color_background
    // })

    const imageBorder = useSelector(selectImageBorder);



    return (
        <>

            <img src={profileImg} width="100px" height="100px" style={{borderRadius: `${imageBorder / 2}px`}} alt="image" />

            <div>
                <label htmlFor="input"></label>
            </div>

        </>
    )
}