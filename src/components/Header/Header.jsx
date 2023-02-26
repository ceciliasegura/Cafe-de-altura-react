import { useContext } from "react";
import { CoffeContext } from "../../context/CoffeProvider";
import NavLink from "../NavLink/NavLink";


export default function Header() {

    const {numberItemsInCart} = useContext(CoffeContext)

    return (
        <div className="flex flex-row bg-black p-6">
            <div className="flex flex-row gap-4">
                <a href="/"><p className="text-white font-outfit font-normal text-2xl leading-4">cafedealtura.com</p></a>
                <a href="/"><img className="w-5 h-6 flex-none order-1 flex-grow-0 " src="assets/coffe-cap.png" alt="" /></a>
            </div>
            <NavLink />
            <div className="ml-auto flex flex-row gap-4">
                <img src="assets/phone.png" alt="" />
                <p className="text-white w-28">+34 62137842</p>
                <button className="w-28 text-white bg-grey-coffe rounded font-semibold text-sm box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Iniciar sesion</button>
                <div className="flex gap-1">
                    <a href="/cart"><img src="assets/cart.png" alt="" /></a>
                    <p className={`text-white ${numberItemsInCart === 0? 'hidden' : ''}`}>{numberItemsInCart}</p>
                </div>
            </div>
        </div>
    )
}