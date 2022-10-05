import { useSelector } from "react-redux";
import nkar from "../../../Resume_backgrounds/image_3.png";


export default function View_Person_Image() {

    const main_image = useSelector((state) => {
        return state.main_image.main_image
    })

    return (
        <>
            <div className="view_image"
                style={
                    {background: `url(${nkar})`}
                }
            >
                {/* <img src={nkar} alt="mmmnnn" width="200px" height="200px" /> */}
            </div>
        </>
    )
}