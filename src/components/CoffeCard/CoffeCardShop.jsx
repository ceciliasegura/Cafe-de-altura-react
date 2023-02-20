import { useEffect, useState } from "react";
import CoffeCard from "./CoffeCard";

export default function CoffeCardShop() {
    const [coffeProducts, setCoffeProducts] = useState([]);
    
    useEffect(() => {
        fetch(`https://cafe-de-altura-api.vercel.app/api/products`)
        .then(res => res.json())
        .then(res => setCoffeProducts(res.products))
    }, [] )

    return (
        <div className="flex flex-col p-10 gap-10 justify-center ">
            <div>
                <p className="text-2xl font-medium text-lime-800 text-center">Últimos orígenes</p>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-6">
                {
                coffeProducts.map((coffe, i)=>{
                    return <CoffeCard imgSrc={coffe.img_url} text={coffe.brand} price={coffe.price} key={i} id={coffe._id}/>
                })
                }
            </div>
        

        </div>

    )
}