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

    const numberItemsInCart = cart.reduce((acc, coffee) => acc += coffee.count, 0)

    const getPrice = (total) => {
        return total + ",00 €";
    }

    const getSubTotal = (cart) => {
        return cart.reduce((acc, coffee) => acc += coffee.count * coffee.price, 0);
    }

    const getShippingPrice = (free) => {
        return free ? 0 : 9;
    }

    const getIva = (total) => {
        return (Math.round(total * 0.04 * 100) / 100).toFixed(2).replace('.', ',');
    }

    return (
        <>
            <CoffeContext.Provider value={{ coffeProducts, setCart, cart, getPrice, free, setFree, subTotalPrice, totalPrice, numberItemsInCart, iva }}>
                {children}
            </CoffeContext.Provider>
        </>
    )
}