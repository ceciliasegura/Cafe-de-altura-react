import CartResume from "../components/CartResume/CartResume";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Checkout() {
    return (
        <>
            <Header />
            <CartResume isCeckout={true}/>
            <Footer />
        </>
    )
}