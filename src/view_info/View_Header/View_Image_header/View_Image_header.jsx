import { useState } from "react";
import { useSelector } from "react-redux";
import nkar from "../../../Resume_backgrounds/image_3.png";


export default function View_Person_Image({profileImg, setProfileImg}) {

    // original
   
    // const main_image = useSelector((state) => {
    //     return state.main_image.main_image
    // })

    // const color_background = useSelector((state) => {
    //     return state.color_background.color_background
    // })













    // const nkar = main_image;

    // const state = {
    //     profileImg: "../../../Resume_backgrounds/image_3.png"
    // }

    // const [profileImg, setProfileImg] = useState(nkar);


    // const ImageHandler = (e) => {
    //     const selected = e.target.files[0];
    //     const Allowed_types = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    //     if(selected && Allowed_types.includes(selected.type)){
    //         let reader = new FileReader();
    //         reader.onloadend = () => {
    //             setProfileImg(reader.result);
    //         };
    //         reader.readAsDataURL(selected);
    //     }
    // }

    return (
        <>

        <div>
            hdhdh
        </div>
           
{/* 
            <img src={profileImg} width="100px" height="100px" alt="image" />

            <div>
                <label htmlFor="input"></label>
            </div> */}

                {/* <div className='example' style={{
                    background: color_background
                }}></div> */}
                {/* <img src={nkar} alt="mmmnnn" width="200px" height="200px" /> */}
            {/* </div> */}
        </>
    )
}