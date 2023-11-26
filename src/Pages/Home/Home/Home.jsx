import Payment from "../../Payments/Payment";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUS/WhyChooseUs";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Services></Services>
        <About></About>
        <WhyChooseUs></WhyChooseUs>
        <Payment></Payment>
        </div>
    );
};

export default Home;