import { useParams } from "react-router-dom";

function StudentDetails(props) {

    const params = useParams();

    const student =
        props.students[params.id];
    if (!student) {

        return (

            <h2>

                Student Not Found

            </h2>

        )

    }

    return (

        <div>

            <h2>Student Details</h2>

            <p>Name: {student.Name}</p>

            <p>Age: {student.Age}</p>

            <p>City: {student.City}</p>

        </div>

    )

}

export default StudentDetails;