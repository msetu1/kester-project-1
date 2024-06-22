import { Helmet } from "react-helmet-async";
import AboutThe from "../section/AboutThe";
import Sponsors from "../section/Sponsors";
import BannerImg from "../shared/BannerImg";

const About = () => {
  return (
    <section>
      <Helmet>
      <title>Kester | ABOUT
      </title>
      </Helmet>
        <BannerImg 
        subHeading={'home | About'}
        heading={'about'}
        ></BannerImg>
      <div className="">
        <AboutThe></AboutThe>
        <Sponsors></Sponsors>
      </div>
    </section>
  );
};

export default About;
