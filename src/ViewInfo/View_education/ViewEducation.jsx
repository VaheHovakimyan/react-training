import { useSelector } from "react-redux";
import {
    selectEducationDegree,
    selectEducationUniver,
    selectEducationYear
} from "../../Features/Education/EducationSlice";
import { selectColorMain, selectColorText } from "../../Features/Main_settings/ColorMainSlice";
import './ViewEducation.scss';


export default function ViewEducation() {


    const degree = useSelector(selectEducationDegree);
    const univer = useSelector(selectEducationUniver);
    const year = useSelector(selectEducationYear);

    const colorMain = useSelector(selectColorMain);
    const colorText = useSelector(selectColorText);

    return (
        <div>
            <div className="title_section">
                <div className="title_text_div">
                    <div className="title_text" style={{
                        backgroundColor: `${colorMain}`,
                        color: `${colorText}`
                    }}><p className="title_text_style">Education</p></div>
                </div>
                <div className="title_line"></div>
            </div>


            <div className="education_section_flex">
                <div className="education_section">
                    <div>
                        <div>{degree}</div>
                        <div>{univer}</div>
                    </div>

                    <div>
                        <div>{year}</div>
                    </div>

                </div>
            </div>

        </div>
    )
}