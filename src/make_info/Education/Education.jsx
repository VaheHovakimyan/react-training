// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationYearValue, selectEducationYear } from "../../Features/Education/EducationSlice";



export default function Education() {

    const dispatch = useDispatch();

    // const [education_div_number,setEducation_div_number] = useState(1);

    const year = useSelector(selectEducationYear);

    console.log(year);

    return (
        <div>
            <div>
                Education
            </div>
            <div>
                Section 1
            </div>
            <div>
                {/* <input
                    type="text"
                    value={degree}
                    onChange={(e) => { dispatch(educationDegree(e.target.value)) }}
                    placeholder="degree"
                />

                <input
                    type="text"
                    value={univer}
                    onChange={(e) => { dispatch(educationUniver(e.target.value)) }}
                    placeholder="School/University"
                /> */}

                <input
                    type="text"
                    value={year}
                    onChange={(e) => {dispatch(educationYearValue(e.target.value))}}
                    // placeholder="years"
                />

            </div>
            <div className="add_div_block">
                <button className="add_div">+</button>
            </div>


        </div>
    )
}