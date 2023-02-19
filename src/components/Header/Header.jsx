import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";


export default function Header() {
    return (
        <div className="flex flex-row bg-black p-6">
            <div className="flex flex-row gap-4">
                <p className="text-white">cafedealtura.com</p>
                <img src="assets/coffe-cap.png" className="" alt="" />
            </div>
            <NavLink/>
            <div className="ml-auto flex flex-row gap-4">
                <img src="assets/phone.png" alt="" />
                <p className="text-white w-28">+34 62137842</p>
                <Button text={"Iniciar sesion"} width={"w-28"} color={"text-white"} url={"/"}/>
                <a href="/cart"><img src="assets/cart.png"  alt="" /></a>
            </div>
        </div>
    )
}