import { useContext } from "react";
import { CoffeContext } from "../../context/CoffeProvider";
import Button from "../Button/Button";

export default function CartResume() {
    const {getPrice, free, subTotalPrice, totalPrice, iva} = useContext(CoffeContext)

    return (<div className="p-8 bg-beige-coffe h-4/6">
        <p>Total del carrito</p>
        <hr className="mt-4 mb-4" />
        <div className="flex justify-between gap-4">
            <p>SUBTOTAL</p>
            <p className="text-right">{getPrice(subTotalPrice)}</p>
        </div>

        <div className="flex justify-between gap-4">
            <p>ENVÍO</p>
            <p>{free ? 'Gratis' : '9,00 €'}</p>
        </div>
        <hr className="mt-4 mb-4" />

        <div className="flex justify-between gap-4">
            <p>TOTAL</p>
            <p>{getPrice(totalPrice)}</p>
        </div>
        <p className="text-right">Incluye {iva} € de IVA</p>

        <div className="flex gap-4 mt-4">
            <Button text={"Ir a checkout"} color={"text-white"} url={"/resume"} background={"bg-green-900"} />
            <a href="./shop.html">Seguir comprando</a>
        </div>
    </div>
    );
}
