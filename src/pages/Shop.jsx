import CoffeCardShop from "../components/CoffeCard/CoffeCardShop";
import ConditionsCards from "../components/ConditionsCards/ConditionCards";
import FaqCard from "../components/FaqCard/FaqCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Shop() {
    return (
        <>
            <Header />
            <CoffeCardShop />
            <ConditionsCards />
            <FaqCard />
            <Footer />
        </>
    )
}