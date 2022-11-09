import { useSelector } from "react-redux"
import { educationValue, selectEducation } from "../../Features/Education/EducationSlice"



export default function ViewEducation() {

    const degree = useSelector(selectEducation);

    return (
        <div>
            Education

            <div>{degree}</div>
            <div></div>
            <div></div>
        </div>
    )
}