import { useParams } from "react-router-dom";
import { CounterContext } from "../../context/CounterContext";

function StudentDetails(props) {

    const params = useParams();
    const { count, increment, decrement } = useContext(CounterContext);


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
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={increment} >Increment</button>

            <h2>Student Details</h2>

            <p>Name: {student.Name}</p>

            <p>Age: {student.Age}</p>

            <p>City: {student.City}</p>

        </div>

    )

}

export default StudentDetails;