import { useSelector } from "react-redux"
import {
    educationYearValue,
    // selectEducationDegree,
    // selectEducationUniver,
    selectEducationYear
} from "../../Features/Education/EducationSlice"



export default function ViewEducation() {

    // const degree = useSelector(selectEducationDegree);
    // const univer = useSelector(selectEducationUniver);
    const year = useSelector(selectEducationYear);

    return (
        <div>
            <div className="title_section">
                <div className="title_text_div">
                    <div className="title_text"><p className="title_text_style">Education</p></div>
                </div>
                <div className="title_line"></div>
            </div>

            {/* <div>{degree}</div>
            <div>{univer}</div> */}
            <div>{year}</div>
        </div>
    )
}