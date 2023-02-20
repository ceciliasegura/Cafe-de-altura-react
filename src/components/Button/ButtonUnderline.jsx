export default function ButtonUnderline({text, url, color, icon}){
    return(
<>
<a href={url} className={"flex gap-2 underline " + color}>{text}<img src={icon} alt="" className="h-2.5 mt-2 order-last"/></a>

</>
    )

    
}