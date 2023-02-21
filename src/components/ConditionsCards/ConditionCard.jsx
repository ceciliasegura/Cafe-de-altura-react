export default function ConditionsCard({text, icon, description}){
    return(
        <div className="bg-white p-4 flex flex-col justify-center items-center gap-4 rounded-md">
            <img className="w-16 h-16 p-3 rounded-2xl bg-emerald-500" src={icon} alt=""/>
            <h2 className="text-base font-semibold h-6 w-64">{text}</h2>
            <p className="text-sm w-64 h-16">{description}</p>
        </div>
    )
}