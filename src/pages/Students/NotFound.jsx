import { useNavigate } from "react-router-dom";
function NotFound(){
    const navigate=useNavigate();
    return(
        <div>
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