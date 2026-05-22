import { useNavigate } from "react-router-dom";
import { CounterContext } from "../../context/CounterContext";
function NotFound(){
    const{count, increment, decrement}=useContext(CounterContext);

    const navigate=useNavigate();
    return(
        <div>
                        <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={increment} >Increment</button>
            <h3>404 Page not found</h3>
            <button onClick={()=>
                {
                    navigate("/students");
                }
            } >Go back to home</button>
        </div>
    )
}

export default NotFound;