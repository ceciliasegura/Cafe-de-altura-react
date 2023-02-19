import ButtonIcon from "../Button/ButtonIcon";

export default function FavCard() {
    return (

        <div className="text-white bg-black flex  justify-between p-20 gap-14">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                    <p className="text-white">cafedealtura.com</p>
                    <img src="assets/coffe-cap.png" alt="" />
                </div>
                <p className="text-xl">Te ayudamos en</p>
                <ButtonIcon text={"+34 919490518"} icon={"assets/phone.png"} />
                <ButtonIcon text={"hola@cafedealtura.com"} icon={"assets/mail.png"} />
            </div>
            <div className="flex flex-col gap-2">

                <p>Tienda</p>
                <p>Suscripción</p>
                <p>Para empresas</p>
                <p>Sobre nosotros</p>
                <p>Contacto</p>

            </div>
            <div className="flex flex-col gap-2">
                <p>Política de privacidad</p>
                <p>Política de cookies</p>
                <p>Términos y condiciones</p>
            </div>
        </div>

    )
}