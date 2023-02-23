export default function ConditionsCard({text, icon, description}){
    return(

        <div className="bg-white flex flex-col justify-center items-center gap-4 rounded-md p-8 ">
            <img className="w-16 h-16 p-3 rounded-2xl bg-green-coffe" src={icon} alt=""/>
            <h2 className="text-base font-semibold h-6 w-64 flex justify-center ">{text}</h2>
            <p className="text-sm w-64 h-16 font-normal leading-4 flex text-center">{description}</p>
        </div>
        
    )
}