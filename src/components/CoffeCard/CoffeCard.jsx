import { useContext } from "react";
import { CoffeContext } from "../../context/CoffeProvider";

export default function CoffeCard({ imgSrc, text, price, id }) {
    
    const {setCart} = useContext(CoffeContext)



    const addCoffe = () => {
       setCart(prev => {
        const holdPrev = [...prev]
        const index = holdPrev.findIndex(coffee => coffee.id === id) 
            if(index !== -1){
                holdPrev[index].count += 1
            }else{
                holdPrev.push({
                    "id": id,
                    "text": text,
                    "price": price,
                    "img": imgSrc,
                    "count": 1
                });
            }
            return holdPrev
       })
            
    }
    return (
        <div className="flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-beige-coffe transition-colors duration-500">
            <img src={imgSrc} alt="" />
            <h4>{text}</h4>
            <p><span>{price}</span>€</p>
            <button className="w-16 h-8 text-sm text-white rounded bg-green-coffe" onClick={(event) => addCoffe(event, id, text, price, imgSrc)}>Añadir</button>
        </div>
    )
}