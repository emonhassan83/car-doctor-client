import ProductSection from "../../ProductSection/ProductSection";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import InfoSection from "../InfoSection/InfoSection";
import Services from "../Services/Services";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <InfoSection/>
            <ProductSection/>
            <TeamSection/>
            <CoreFeatures/>
            <TestimonialSection/>
        </div>
    );
};

export default Home;