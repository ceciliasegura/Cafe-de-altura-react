export default function coffeShopInfo() {
    return (
        <div className="flex gap-3 justify-cente">
            <div className="ocation-article flex flex-col justify-center gap-4 p-10">
                <h2 className="text-2xl font-medium leading-7 text-green-coffe">Pruébalo en nuestro coffe shop</h2>
                <p className="text-text-sm font-normal leading-4">Visita nuestra cafeteria en el centro de la ciudad para probar
                    nuestro café antes de hacer tu pedido y llevate un descuento. </p>
            </div>

            <img className="flex flex-col justify-center p-10" src="/assets/coffeShop.png" alt="" />
        </div>
        
    )
}