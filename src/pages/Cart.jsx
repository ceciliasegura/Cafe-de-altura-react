import { useContext } from "react";
import CartResume from "../components/CartResume/CartResume";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCart from "../components/ProductCart/ProductCart";
import ShippingCard from "../components/ShippingCard/ShippingCard";
import { CoffeContext } from "../context/CoffeProvider";

export default function Cart() {

   const {cart, numberItemsInCart} = useContext(CoffeContext)

   return (
      <>
         <Header />
         <p className="text-center p-4 text-green-coffe font-medium text-2xl pt-10">Cesta {"(" + numberItemsInCart + ")"}</p>

         <div className="flex">

            <div className="w-9/12 p-8">
               <div>
                  <p className="text-lg font-semibold	">Productos</p>
                  {
                     cart.map((coffe, i) => {
                        return (
                           <div key={i}>
                              <ProductCart number={coffe.count} img={coffe.img} name={coffe.text} price={coffe.price} id={coffe.id}  />
                              <hr />
                           </div>
                        )
                     })
                  }
               </div>
               <ShippingCard/>
            </div>
            <CartResume/>
         </div>
         
         <Footer />
      </>
   );
}