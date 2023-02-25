import { useNavigate } from "react-router-dom";

export default function Button ({text, color, url, background, rounded}){
    let navigate = useNavigate(); 
    function nextPath(path) {
        navigate(path);
    }

    return (
        <button className={color + " " + background +" p-2 " + rounded} onClick={() => nextPath(url)}>{text}</button>
    )
}