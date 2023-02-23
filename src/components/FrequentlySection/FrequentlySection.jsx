import ButtonUnderline from "../Button/ButtonUnderline";
import { FrequentlyCard } from "../FrequentlyCard/FrequentlyCard";

export default function FrequentlySection() {
 return (
        <section className=" bg-green-coffe py-12 px-[306px] flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-4 text-white">
                <h2 className="font-semibold mb-8 text-2xl">Preguntas frecuentes</h2>
                
                <FrequentlyCard text1='¿Cómo hago el pedido?' text2='Selecciona el café que desees probar y completa el proceso de compra. Si lo
                        prefieres, te preguntaremos cada cuanto quieres que te lo mandemos a casa y asi nunca te quedarás sin café.'/>
                <FrequentlyCard text1='¿Por qué los precios son tan bajos?' text2='Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                        exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                        intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos
                        de café recibe el mayor beneficio posible. '/>
                <FrequentlyCard text1='¿Es posible enviar café a mi oficina?' text2='Selecciona el café que desees probar y completa el proceso de compra. Si lo
                        prefieres, te preguntaremos cada cuanto quieres que te lo mandemos a casa y asi nunca te quedarás sin café.'/>
                
                
            </div>
            <div className="flex justify-center items-center">
                <ButtonUnderline text={"Resolvemos tus dudas"} url={"/"} icon={"assets/arrow_white.png"} color={"text-white"} />
            </div>
        </section>
    )
}