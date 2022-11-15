// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    educationDegreeValue,
    selectEducationDegree,
    educationUniverValue,
    selectEducationUniver,
    educationYearValue,
    selectEducationYear,
} from "../../Features/Education/EducationSlice";




export default function Education() {

    const dispatch = useDispatch();

    const degree = useSelector(selectEducationDegree);
    const univer = useSelector(selectEducationUniver);
    const year = useSelector(selectEducationYear);

    // const [education_div_number,setEducation_div_number] = useState(1);



    return (
        <div>
            <div>
                Education
            </div>
            <div>
                Section 1
            </div>

            <div>

                <input
                    type="text"
                    value={degree}
                    onChange={(e) => { dispatch(educationDegreeValue(e.target.value)) }}
                />

                <input
                    type="text"
                    value={univer}
                    onChange={(e) => { dispatch(educationUniverValue(e.target.value)) }}
                />

                <input
                    type="text"
                    value={year}
                    onChange={(e) => { dispatch(educationYearValue(e.target.value)) }}
                />

            </div>
            <div className="add_div_block">
                <button className="add_div">+</button>
            </div>


        </div>
    )
}