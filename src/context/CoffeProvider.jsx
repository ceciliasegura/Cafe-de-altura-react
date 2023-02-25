import { createContext, useState, useEffect } from "react";

export const CoffeContext = createContext()

export const CoffeProvider = ({ children }) => {

    const realCart = JSON.parse(localStorage.getItem('cart')) || []

    const [coffeProducts, setCoffeProducts] = useState([]);
    const [cart, setCart] = useState(realCart);
    const [free, setFree] = useState(true);

    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [iva, setIva] = useState(0);

    const numberItemsInCart = cart.reduce((acc, coffee) => {

        return acc += coffee.count

    }, 0)

    const getPrice = (total) => {
        return total + ",00 €";
    }

    const getSubTotal = (cart) => {
        if (cart.length === 0) {
            return 0;
        }
        return cart.map(coffe => coffe.count * coffe.price).reduce((prev, next) => prev + next);
    }

    const getShippingPrice = (free) => {
        return free ? 0 : 9;
    }

    const getIva = (total)=>{
        return (Math.round(total * 0.04 * 100) / 100).toFixed(2).replace('.', ',');
    }

    useEffect(() => {
        fetch(`https://cafe-de-altura-api.vercel.app/api/products`)
            .then(res => res.json())
            .then(res => setCoffeProducts(res.products))
    }, [])

    useEffect(() => {
        console.clear()
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
        setSubTotalPrice(getSubTotal(cart));
    }, [cart])

    useEffect(() => {
        const total = subTotalPrice + getShippingPrice(free);

        setTotalPrice(total);
        setIva(getIva(total));
    }, [free, subTotalPrice])

    return (
        <>
            <CoffeContext.Provider value={{ coffeProducts, setCart, cart, getPrice, free, setFree, subTotalPrice, totalPrice, numberItemsInCart, iva }}>
                {children}
            </CoffeContext.Provider>
        </>
    )
}