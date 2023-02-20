export default function ConditionsCard({text, icon, description}){
    return(
        <div className="bg-white p-4 flex flex-col justify-center items-center gap-4 border-white border-2 rounded-2xl">
            <img className="w-14 h-14 p-2 bg-emerald-500" src={icon} alt=""/>
            <h2>{text}</h2>
            <p>{description}</p>
        </div>
    )
}