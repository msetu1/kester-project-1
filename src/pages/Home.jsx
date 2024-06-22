
import AboutThe from "../section/AboutThe";
import ImgSection from "../section/ImgSection";
import Members from "../section/Members";
import NewsLetter from "../section/NewsLetter";
import OurNews from "../section/OurNews";
import Premier from "../section/Premier";
import Sponsors from "../section/Sponsors";
import Youtube from "../section/Youtube";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImgSection></ImgSection>
            <Premier></Premier>
            <AboutThe></AboutThe>
            <Sponsors></Sponsors>
            <Youtube></Youtube>
            <Members></Members>
           <NewsLetter></NewsLetter>
           <OurNews></OurNews>
        </div>
    );
};

export default Home;