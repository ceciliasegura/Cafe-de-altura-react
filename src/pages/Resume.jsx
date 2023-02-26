import { useContext } from "react";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CoffeContext } from "../context/CoffeProvider";

export default function Resume() {

    const { cart, free, getPrice, iva, totalPrice, subTotalPrice } = useContext(CoffeContext)

    return (
        <>
            <Header />
            <div className="p-6">
                <div className="flex flex-col justify-center items-center p-8 gap-4">
                    <img className="w-16 h-16 p-3 rounded-2xl bg-green-coffe" src="assets/task.png" alt="" />
                    <p className="text-green-coffe font-medium">El pedido ha sido realizado con éxito</p>
                    <p className="w-4/12 text-center font-normal text-sm">El pedido #12387 se encuentra en preparación.
                        Lo recibirás dentro de las fechas acordadas en tu envío.
                        Hemos enviado un ticket a tu correo electrónico.</p>
                </div>
                <div className="p-8 bg-white-coffe h-4/6">
                    <p className="text-lg font-semibold	">Tu pedido</p>
                    {
                        cart.map((coffe, i) => {
                            return (
                                <div className="flex justify-between gap-4 p-2" key={i}>
                                    <img src={coffe.img} width="55px" height="55px" alt="" />
                                    <p>{coffe.text}</p>
                                    <p className="ml-auto">{getPrice(coffe.price, coffe.number)}</p>
                                </div>
                            )
                        })
                    }
                    <hr className="mt-4 mb-4" />
                    <div className="flex justify-between gap-4">
                        <p className="font-normal text-sm">SUBTOTAL</p>
                        <p className="text-right">{getPrice(subTotalPrice)}</p>
                    </div>

                    <div className="flex justify-between gap-4">
                        <p className="font-normal text-sm">ENVÍO</p>
                        <p>{free ? 'Gratis' : '9,00 €'}</p>
                    </div>
                    <hr className="mt-4 mb-4" />

                    <div className="flex justify-between gap-4">
                        <p className="font-semibold text-sm">TOTAL</p>
                        <p>{getPrice(totalPrice)}</p>
                    </div>
                    <p className="text-right font-normal text-sm">Incluye {iva} € de IVA</p>
                </div>
                <div className="p-4 flex justify-center items-center">
                <Button text={"Volver a tienda"} color={"text-white"} url={"/shop"} background={"bg-green-coffe"}/>

                </div>
            </div>
            <Footer />
        </>
    )
}