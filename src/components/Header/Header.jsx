import NavLink from "../NavLink/NavLink";


export default function Header() {
    return (
        <div className="flex flex-row bg-black p-6">
            <div className="flex flex-row gap-4">
                <a href="/"><p className="text-white">cafedealtura.com</p></a>
                <a href="/"><img src="assets/coffe-cap.png" alt="" /></a>
            </div>
            <NavLink/>
            <div className="ml-auto flex flex-row gap-4">
                <img src="assets/phone.png" alt="" />
                <p className="text-white w-28">+34 62137842</p>
                <button className="w-28 text-white bg-grey-coffe rounded font-semibold text-sm ">Iniciar sesion</button>
                <a href="/cart"><img src="assets/cart.png"  alt="" /></a>
            </div>
        </div>
    )
}