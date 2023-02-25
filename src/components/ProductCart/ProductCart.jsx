import { useContext } from "react";
import { CoffeContext } from "../../context/CoffeProvider";

export default function ProductCart({ number, img, name, price, id }) {
    
    const { setCart, getPrice } = useContext(CoffeContext)

    const addItem = () => {
        setCart(prev => {
            const holdPrev = [...prev]
            const index = holdPrev.findIndex(coffee => coffee.id === id)
            holdPrev[index].count += 1
            return holdPrev
        })
    }

    const removeItem = () => {
        setCart(prev => {
            const holdPrev = [...prev]
            const index = holdPrev.findIndex(coffee => coffee.id === id)
            holdPrev[index].count -= 1
            if(holdPrev[index].count <= 0){
                return holdPrev.filter(coffee => coffee.count > 0)
            }
            return holdPrev
        })
    }

    return (
        <div className="flex gap-4 p-4">
            <p className=" cursor-pointer p-2" onClick={removeItem}>-</p>
            <p className="">{number}</p>
            <p className=" cursor-pointer p-2" onClick={addItem}>+</p>
            <img src={img} width="55px" height="55px" alt=""/>
            <p>{name}</p>
            <p className="ml-auto">{getPrice(price, number)}</p>
        </div>
    )
}



