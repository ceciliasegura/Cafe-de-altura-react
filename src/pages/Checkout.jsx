import CartResume from "../components/CartResume/CartResume";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Checkout() {
    return (
        <>
            <Header />
            <div className="flex p-4">

                <div className="w-9/12">

                </div>
                <div className="h-full w-96">
                    <CartResume isCeckout={true} />
                </div>
            </div>


            <Footer />
        </>
    )
}