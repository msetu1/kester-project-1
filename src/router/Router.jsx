import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";
import Shop from "../shop/Shop";
import Cart from "../shop/Cart";
import MyAccount from "../shop/MyAccount";
import OurTeam from "../page/OurTeam";
import Gallery from "../page/Gallery";
import MatchDetails from "../page/MatchDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
      element: <Home></Home>,
        },
        {
            path: "/about",
      element: <About></About>,
        },
        {
            path: "/contact",
      element: <Contact></Contact>,
        },
        {
            path: "/news",
      element: <News></News>,
        },
        {
            path: "/newsDetails",
      element: <NewsDetails></NewsDetails>,
        },
        {
            path: "/shop",
      element: <Shop></Shop>,
        },
        {
            path: "/cart",
      element: <Cart></Cart>,
        },
        {
            path: "/myAccount",
      element: <MyAccount></MyAccount>,
        },
        {
            path: "/ourTeam",
      element: <OurTeam></OurTeam>,
        },
        {
            path: "/gallery",
      element: <Gallery></Gallery>,
        },
        {
            path: "/matchDetail",
      element: <MatchDetails></MatchDetails>,
        },
       
      ]
    },
  ]);

export default router;