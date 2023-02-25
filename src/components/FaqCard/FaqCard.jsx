import ButtonIcon from "../Button/ButtonIcon";

export default function FaqCard() {
    return (

        <div className="text-white bg-black flex p-10 gap-14 justify-items-start">
            <div className="flex flex-col gap-2 pr-10">
                <div className="flex flex-row gap-4">
                    <p className="text-white font-outfit">cafedealtura.com</p>
                    <img src="assets/coffe-cap.png" alt="" />
                </div>
                <p className="text-xl">Te ayudamos en</p>
                <div className="flex flex-col gap-4">
                <ButtonIcon text={"+34 919490518"} icon={"assets/phone.png"} />
                <ButtonIcon text={"hola@cafedealtura.com"} icon={"assets/mail.png"} />
                </div>
            </div>
            <div className="flex ml-[320px] gap-32">
            <div className="flex flex-col gap-2 ">

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
        </div>

    )
}