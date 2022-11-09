import { useSelector } from "react-redux"
import { educationValue, selectEducationDegree, selectEducationUniver, selectEducationYear } from "../../Features/Education/EducationSlice"



export default function ViewEducation() {

    const degree = useSelector(selectEducationDegree);
    const univer = useSelector(selectEducationUniver);
    const year = useSelector(selectEducationYear);

    return (
        <div>
            Education

            <div>{degree}</div>
            <div>{univer}</div>
            <div>{year}</div>
        </div>
    )
}