import { useNavigate } from "react-router-dom";

export default function Button ({text, width, color, url}){
    let navigate = useNavigate(); 
    function nextPath(path) {
        navigate(path);
    }

    return (
        <button className={color + " " + width} onClick={() => nextPath(url)}>{text}</button>
    )
}