import icon1 from "../img/cart.png"
import icon2 from "../img/favorites.png"

import { FaPinterest, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Navname = [
    {
        name: "HOME",
        path:"/"
    },
    {
        name: "SHOP",
        path:"/shopp"
    },
    {
        name: "PRODUCT",
        path:"/product"
    },
    {
        name: "CART",
        path:"/cart"
    },
    {
        name: "CHECKOUT",
        path:"/checkout"
    },
]

export const NavBut = [
    {
        name: "%Discount%",
        rang: "#fbb710",
        hov: "#131212",
        pad: "15px 30px"
    },
    {
        name: "New this week",
        rang: "#131212",
        hov: "#131212",
        pad: "15px 22px"
    },
]

export const NavIcon = [
    {
        img: icon1,
        name: " Cart ",
        spa: "(0)",
        path:"/cart"
    },
    {
        img: icon2,
        name: " Favourite",
    },
   
]

export const NavIcons = [
    {
        icon: <FaPinterest />
    },
    {
        icon: <FaInstagram />
    },
    {
        icon: <FaFacebookF />
    },
    {
        icon: <FaTwitter />
    },
]