export default function ButtonIcon ({text, icon}){
    return (
        <button className={ "bg-grey-coffe flex items-center gap-3 p-2 rounded"}>
            <img src={icon} alt="" className="order-first"/>{text}</button>
    )
}