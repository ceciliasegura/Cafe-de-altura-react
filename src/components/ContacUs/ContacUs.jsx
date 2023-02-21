export default function ContacUs() {
    return (
        <div className="flex flex-row bg-yellow-50 justify-between">

            <div className="flex flex-col justify-center p-10 gap-4">

                <div className="flex flex-col justify-center items-start gap-5 text-grey">
                    <h2 className="text-lg leading-6 font-semibold">Entra en contacto con nosotros.</h2>
                    <p className="font-normal text-sm leading-4 text-gray-600">Si tienes dudas ponte en contacto con nosotros a través del formulario y te responderemos lo
                        antes
                        posible.
                    </p>
                    <p className="font-normal text-sm leading-4 text-gray-600">Tambien puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de
                        la
                        tienda.</p>
                </div>
                <div>
                    <p className="font-normal text-sm leading-4 text-gray-600">742 Evergreen terrace</p>
                    <p className="font-normal text-sm leading-4 text-gray-600">Springfield, OR 1234</p>
                </div>

                <div className="phone">
                    <img src="assets/phonegrey.png" alt="" />
                    <p className="font-normal text-sm leading-4 text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="mail">
                    <img src="assets/mailgrey.png" alt="" />
                    <p className="font-normal text-sm leading-4 text-gray-600">suppor@xample.com</p>

                </div>
                <div className="flex gap-2">
                    <p>¿Buscas un trabajo?</p>
                    <a href="">Ver nuestras ofertas</a>
                </div>
            </div>
            <div className="py-8 pl-16 pr-[51px] bg-white">

                <div className="">
                    <form>
                        <div className="flex flex-col gap-6">
                            <label className="w-full font-normal text-xs leading-4 text-gray-800 block pb-1
                     " htmlFor="fullname">Nombre completo</label>
                            <input className="w-full h-8 pt-1 border-inherit	" type="text" id="fullname" />
                        </div>
                        <div className="form_email">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" />
                        </div>

                        <div className="form_phone">
                            <label htmlFor="phone">Teléfono</label>

                            <input type="number" id="phone" placeholder="US +1 (555) 987-6543 " />
                        </div>
                        <div className="w-full h-40a">
                            <textarea placeholder="¿En que podemos ayudarte?"></textarea>
                        </div>
                        <div className="flex flex-row gap 1.5 w-full">
                            <input type="checkbox" id="checkbox" />
                            <label className="text-sm leading-4 font-normal text-gray-800 pt-2" htmlFor="terminos y condiciones">
                                Acepto la <a className="font-semibold" href="#"> Política de privacidad</a>
                                y los
                                <a className="font-semibold" href="#">Términos y condiciones</a>
                            </label>
                        </div>
                        <div className="btnIndex">
                            <button className="sendbutton">Enviar</button>
                        </div>
                    </form>

                </div>

            </div>


        </div>)
}