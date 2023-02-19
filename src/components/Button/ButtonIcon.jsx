export default function ButtonIcon ({text, icon}){
    return (
        <button className={ "bg-slate-600 flex items-center gap-3 p-2"}>
            <img src={icon} alt="" className="order-first"/>{text}</button>
    )
}