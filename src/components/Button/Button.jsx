import { useNavigate } from "react-router-dom";

export default function Button ({text, color, url, background, disabled, boxShadow}){
    let navigate = useNavigate(); 
   
    function nextPath() {
        navigate(url);
    }

    return (
        <button className={color + " " + background + " " +  boxShadow +" p-2 rounded text-sm	font-semibold"} disabled={disabled} onClick={() => nextPath()}>{text}</button>
    )
}