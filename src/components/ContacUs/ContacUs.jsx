export default function ContacUs() {
    return (
        <div className="flex flex-row bg-bg-contac justify-between bg-beige-coffe">

            <div className="flex flex-col justify-center p-10 gap-4 w-2/4	">

                <div className="flex flex-col justify-center items-start gap-5 text-grey ">
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

                <div className="flex gap-4">
                    <img src="assets/phonegrey.png" alt="" />
                    <p className="font-normal text-sm leading-4 text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="flex gap-4 w-4">
                    <img src="assets/mailgrey.png" alt="" />
                    <p className="font-normal text-sm leading-4 text-gray-600">suppor@xample.com</p>

                </div>
                <div className="flex  gap-4">
                    <p className="font-normal text-sm leading-4 text-gray-600">¿Buscas un trabajo?</p>
                    <a className="not-italic font-normal text-sm leading-4 underline" href="">Ver nuestras ofertas</a>
                </div>
            </div>

            <div className='bg-white p-8 w-2/5 flex justify-center items-center'> 

                <form className="flex flex-col gap-6 ">
                    <div className="form_fullname">
                        <label className="w-full font-normal text-xs leading-4 text-gray-800 block pb-1" htmlFor="fullname">Nombre completo</label>
                        <input className="w-full h-8 pt-1 rounded-md border w-96" type="text" id="fullname" />
                    </div>
                    <div className="form_email">
                        <label className="w-full font-normal text-xs leading-4 text-gray-800 block pb-1"htmlFor="email">Email</label>
                        <input className="w-fulw-full h-8 pt-1 rounded-md border w-96l h-8 pt-1" type="text" id="email" />
                    </div>

                    <div class="form_phone">
                        <label className="w-full font-normal text-xs leading-4 text-gray-800 block pb-1"for="phone">Teléfono</label>

                        <input className="w-w-full h-8 pt-1 rounded-md border w-96 h-8 pt-1" type="number" id="phone" placeholder="US +1 (555) 987-6543 " />
                    </div>
                    <div className="w-full h-40">
                        <textarea className="w-96 rounded-md border" placeholder="¿En que podemos ayudarte?"></textarea>
                    </div>
                    <div className="flex flex-row gap-1.5 ">
                        <input className="w-4 h-4 rounded-none flex flex-row" type="checkbox" id="checkbox" />
                        <label className="w-full font-normal text-xs leading-4 text-gray-800 block pb-1"htmlFor="terminos y condiciones">
                            Acepto la <a className="font-semibold" href="#"> Política de privacidad</a>
                            y los
                            <a className="font-semibold" href="#">Términos y condiciones</a>
                        </label>
                    </div>
                    <div className="btnIndex">
                        <button className="w-24 h-10 text-white border-none rounded bg-green-coffe">Enviar</button>
                    </div>
                </form>
            </div>

          






        </div>

    )
}