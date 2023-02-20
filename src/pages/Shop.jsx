import CoffeCardShop from "../components/CoffeCard/CoffeCardShop";
import ConditionsCards from "../components/ConditionsCards/ConditionCards";
import FavCard from "../components/FavCard/FavCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Shop() {
    return (
        <>
            <Header />
            <CoffeCardShop />
            <ConditionsCards />
            <FavCard />
            <Footer />
        </>
    )
}