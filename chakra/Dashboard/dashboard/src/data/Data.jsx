import { IoHomeOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

import { FaClipboardList } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
// import {
//     UilEstate,
//     UilClipboardArt,
//     UilUsersAlt,
//     UilPackage,
//     UilChart
// } from '@iconscout/react-unicons'

export const SidebarData = [{
    icon: IoHomeOutline,
    heading : "Dashboard",
    key: "234@#"
},
    {
        icon: FaBook,
        heading: "Orders",
        key: "j3t@#"
    },
    {
        icon: FaPeopleGroup,
        heading: "Customers",
        key:"Y%65Wi"
    },
    {
        icon: FaClipboardList,
        heading: "Products",
        key:"Yh^*5Wi"
    },
    {
        icon: SiSimpleanalytics,
        heading: "Analytics",
        key: "-&7h5Wi"
    }
];

// CardData 


import { AiOutlineDollar } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
export const CardData = [
    {icon: AiOutlineDollar,
    title: "Sales",
    per: "70",
    amount: "$2345",
    hours: "24",
    back: 'Purple',
    series :[{
        name:"Sales",
        stats:[10, 40, 56, 45,78,85,45]
    }]
    },
    {icon: GiTakeMyMoney,
        title: "Revenue",
        per: "50",
        amount: "$25545",
        hours: "20",
        back:'pink',
        series :[{
            name:"Revenue",
            stats:[10, 40, 56, 45,78,85,45]
        }]    
        },
    {icon: GiExpense,
        title: "Expenses",
        per: "60",
        amount: "$6788",
        hours: "14",
        back: "orange",
        series :[{
            name:"Expenses",
            stats:[10, 40, 56, 45,78,85,45]
        }]    
        }
];