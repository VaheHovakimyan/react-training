import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { educationValue, selectEducation } from "../../Features/Education/EducationSlice";



export default function Education() {

    const dispatch = useDispatch();

    const [education_div_number, setEducation_div_number] = useState(1);

    const degree = useSelector(selectEducation);

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
                    onChange={(e) => {dispatch(educationValue(e.target.value))}}
                    placeholder="degree"
                />
                <input type="text" placeholder="School/University" />
                <input type="text" placeholder="years" />
            </div>
            <div className="add_div_block">
                <button className="add_div">+</button>
            </div>


        </div>
    )
}