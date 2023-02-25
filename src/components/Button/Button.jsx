import { useNavigate } from "react-router-dom";

export default function Button ({text, color, url, background, disabled}){
    let navigate = useNavigate(); 
   
    function nextPath() {
        navigate(url);
    }

    return (
        <button className={color + " " + background + " p-2 rounded"} disabled={disabled} onClick={() => nextPath()}>{text}</button>
    )
}