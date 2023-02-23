import Button from "../Button/Button";

export default function HomeBanner() {
    return (
        <div className="flex gap-6 py-12 px-10 font-semibold justify-center">

            <div className="head-article flex flex-col justify-center gap-4 [text-shadow:_0px_3px_3px_rgba(0,0,0,0.25)]">
                <h2 className="text-green-coffe text-lime-800">De la planta a tú casa</h2>
                <h1 className="text-[40px]">El mejor café del mundo, ahora en tú casa.</h1>
                <p className="text-sm font-normal"> Trabajamos con agricultores de todo el mundo para seleccionar
                    los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                <div className="flex gap-4">
                    <Button text={"Descubrir origenes"} color={"text-white"} url={"/"} background={"bg-black-coffe"} rounded={"rounded"} />
                    <Button text={"Comprar café"} color={"text-white"} url={"/shop"} background={"bg-green-coffe"} rounded={"rounded"}/>
                </div>
            </div>
            <img src="assets/Hero.jpeg" alt="" className="rounded-3xl shadow-normal" />
        </div>
    )
}