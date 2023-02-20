import ButtonUnderline from "../Button/ButtonUnderline";

export default function FrequentlySection() {
    return (
        <section className="qa bg-green-900	 py-12 px-[306px]">
        <div className="flex flex-col justify-center items-center gap-4 text-white">
            <h2 className="font-semibold mb-8 text-2xl">Preguntas frecuentes</h2>
            <div className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-black w-full">
                <div className="qa-div-click flex justify-between items-center">
                    <p className="text-lg font-semibold">¿Cómo hago el pedido?</p>
                    <img src="/assets/icons/upArrow.png" alt="" className=""/>
                </div>
                <div className="w-full h-px bg-grey opacity-30"></div>
                <p className="text-xs">Selecciona el café que desees probar y completa el proceso de compra. Si lo
                    prefieres, te
                    preguntaremos cada cuanto quieres que te lo mandemos a casa y asi nunca te quedarás sin café.
                </p>
            </div>
            <div className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-black w-full">
                <div className="qa-div-click flex justify-between items-center">
                    <p className="text-lg font-semibold">¿Por qué los precios son tan bajos?</p>
                    <img src="/assets/icons/upArrow.png" alt="" className=""/>
                </div>
                <div className="w-full h-px bg-grey opacity-30"></div>
                <p className="text-xs">Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                    exigentes. Si
                    podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                    intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos
                    de
                    café recibe el mayor beneficio posible. </p>
            </div>
            <div className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-black w-full">
                <div className="qa-div-click flex justify-between items-center">
                    <p className="text-lg font-semibold">¿Es posible enviar café a mi oficina?</p>
                    <img src="/assets/icons/upArrow.png" alt="" className=""/>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
                <ButtonUnderline text={"Resolvemos tus dudas"} url={"/"} icon={"assets/arrow_white.png"} color={"text-white"}/>
            </div>
    </section>
    )
}