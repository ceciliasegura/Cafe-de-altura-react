import { useContext } from "react";
import { CoffeContext } from "../../context/CoffeProvider";

export default function ShippingCard() {

    const {free, setFree} = useContext(CoffeContext)

    const updateShipping = (free) => {
       setFree(free);
    }

    return (
        <div className="flex flex-col mt-8">
            <p className="font-semibold	text-lg"> Seleccionar envío</p>

            <div className="flex flex-col">

                <div className="flex gap-4 p-4">
                    <input type="radio" name="envio" checked={free} onChange={() => updateShipping(true)} />
                    <div>
                        <p className="text-sm font-semibold	">Envío 5-7 días</p>
                        <p className="text-sm font-normal	">Opción estandar sin seguimiento</p>
                    </div>
                    <p className="ml-auto font-semibold text-lg	">Gratis</p>
                </div>

                <hr />
                <div className="flex gap-4 p-4">
                    <input type="radio" name="envio" checked={!free} onChange={() => updateShipping(false)} />
                    <div className="espace">
                        <p className="text-sm font-semibold">Envío urgente 24h</p>
                        <p className="text-sm font-normal">Recibe tú pedido en las siguientes 24h (para pedidos realizados antes de las
                            13:00). </p>
                    </div>
                    <p className="ml-auto font-semibold text-lg ">9,00 €</p>
                </div>
            </div>
        </div>
    )
}