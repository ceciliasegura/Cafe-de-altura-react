import CoffeCardsHome from "../components/CoffeCard/CoffeCardsHome";
import ConditionsCards from "../components/ConditionsCards/ConditionCards";
import FavCard from "../components/FavCard/FavCard";
import Footer from "../components/Footer/Footer";
import FrequentlySection from "../components/FrequentlySection/FrequentlySection";
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import CoffeShopInfo from "../components/CoffeShopInfo/CoffeShopInfo"
import ContacUs from "../components/ContacUs/ContacUs";

export default function Home() {
    return(
        <>
        <Header/>
        <HomeBanner/>
        <ConditionsCards/>
        <CoffeCardsHome/>
        <FrequentlySection/>
        <CoffeShopInfo/>
        <ContacUs/>
        <FavCard/>
        <Footer/>

        </>
    )
}