
import {  FaLinkedinIn, FaBehance, FaPhone ,FaFacebook, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaYoutube, FaRegClock } from "react-icons/fa6";



const socialData ={
    letfContacts : [
        {detail : '+923455555396', icon : <FaPhone size={14} />},
        {detail : 'Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan', icon : <MdLocationOn size={14}/>},
        {detail : 'Mon - Fri 8.00 - 20.00', icon : <FaRegClock size={14}/>}
    ],
    rightContacts : [
        {url : 'https://www.facebook.com/ezitech', icon : <FaFacebook size={14}/>},
        {url : 'https://www.instagram.com/ezitechpk/', icon : <FaInstagram size={14}/>},
        {url : 'https://www.behance.net/ezitech', icon : <FaBehance size={14}/>},
        {url : 'https://www.linkedin.com/company/eziline-technologies/', icon : <FaLinkedinIn size={14}/>},
        {url : 'https://youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg', icon : <FaYoutube size={14}/>},
    ]
}

export default socialData;