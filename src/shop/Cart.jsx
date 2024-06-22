import { Helmet } from "react-helmet-async";
import ImgSection from "../section/ImgSection";
import BannerImg from "../shared/BannerImg";

const Cart = () => {
    return (
        <div>
            <Helmet>
      <title>Kester | CART
      </title>
      </Helmet>
           <BannerImg
           subHeading={"home | Cart"} heading={"cart"}
           ></BannerImg> 
           <div className="">
<ImgSection></ImgSection>
           </div>
        </div>
    );
};

export default Cart;