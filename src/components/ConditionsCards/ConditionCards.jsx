import ConditionsCard from "./ConditionCard";

export default function ConditionsCards() {
    return (
        <div className="bg-background bg-center p-20 gap-10 flex flex-col bg-cover">
            <h1 className="text-white text-center text-2xl">Café con las mejores condiciones</h1>

            <div className="text-black flex  justify-center items-center gap-10" >
                <ConditionsCard icon={"assets/task.png" } text={"Recibe tu pedido sin preocuparte"} description={"Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana. "}/>
                <ConditionsCard icon={"assets/truck.png"} text={"Envío en 24/48h"} description={"Pide tu café antes de las 12h y lo recibirás al día siguiente."}/>
                <ConditionsCard icon={"assets/gift.png"}text={"Descuentos y beneficios"} description={"Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."}/>
            </div>
        </div>
    )

}