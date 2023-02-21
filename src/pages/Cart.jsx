import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCart from "../components/ProductCart/ProductCart";

export default function Cart() {
   const [coffesStorage, setCoffesStorage] = useState([]);
   const [free, setFree] = useState(true);
   const [subTotalPrice, setSubTotalPrice] = useState(0);
   const [totalPrice, setTotalPrice] = useState(0);

   const getPrice = (total) => {
      return total + ",00 €";
   }

   const getShippingPrice = (free) => {
      return free ? 0 : 9;
   }

   const updateShipping = (free) => {
      setFree(free);
      setTotalPrice(subTotalPrice + getShippingPrice(free));
   }

   useEffect(() => {
      const cStorage = JSON.parse(localStorage.getItem('coffes'));

      if (cStorage !== null) {
         setCoffesStorage(cStorage);
         const subTotal = cStorage.map(coffe => coffe.count * coffe.price).reduce((prev, next) => prev + next);
         setSubTotalPrice(subTotal);
         setTotalPrice(subTotal + getShippingPrice(free));
      }

   }, [])

   return (
      <>
         <Header />
         <p className="text-center p-4">Cesta {"(" + coffesStorage.length + ")"}</p>

         <div className="flex">

            <div className="w-9/12 p-8">
               <div>
                  <p>Productos</p>
                  {
                     coffesStorage.map((coffe, i) => {
                        return (
                           <div key={i}>
                              <ProductCart number={coffe.count} img={coffe.img} name={coffe.text} price={coffe.price}/>
                              <hr />
                           </div>
                        )
                     })
                  }
               </div>
               <div className="flex flex-col mt-8">
                  <p> Seleccionar envío</p>

                  <div className="flex flex-col">

                     <div className="flex gap-4 p-4">
                        <input type="radio" name="envio" checked={free} onChange={() => updateShipping(true)} />
                        <div>
                           <p>Envío 5-7 días</p>
                           <p>Opción estandar sin seguimiento</p>
                        </div>
                        <p className="ml-auto">Gratis</p>
                     </div>

                     <hr />
                     <div className="flex gap-4 p-4">
                        <input type="radio" name="envio" checked={!free} onChange={() => updateShipping(false)} />
                        <div className="espace">
                           <p>Envío urgente 24h</p>
                           <p>Recibe tú pedido en las siguientes 24h (para pedidos realizados antes de las
                              13:00). </p>
                        </div>
                        <p className="ml-auto">9,00 €</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="p-8 bg-slate-100 h-4/6">
               <p>Total del carrito</p>
               <hr className="mt-4 mb-4" />
               <div className="flex justify-between gap-4">
                  <p>SUBTOTAL</p>
                  <p className="text-right">{getPrice(subTotalPrice)}</p>
               </div>

               <div className="flex justify-between gap-4">
                  <p>ENVÍO</p>
                  <p>{free ? 'Gratis' : '9,00€'}</p>
               </div>
               <hr className="mt-4 mb-4" />

               <div className="flex justify-between gap-4">
                  <p>TOTAL</p>
                  <p>{getPrice(totalPrice)}</p>
               </div>
               <p className="text-right">Incluye 3,78€ de IVA</p>

               <div className="flex gap-4 mt-4">
                  <Button text={"Ir a checkout"} color={"text-white"} url={"/resume"} background={"bg-green-900"} />
                  <a href="./shop.html">Seguir comprando</a>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
}