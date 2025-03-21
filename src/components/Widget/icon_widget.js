import React from 'react';
import { BsChatDots } from 'react-icons/bs';
import { FaChevronRight, FaSearch, FaUser } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FiAlertCircle } from 'react-icons/fi';
import { GoGear, GoHomeFill, GoSignOut, GoThumbsup, GoZap } from 'react-icons/go';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { LiaGlobeSolid } from 'react-icons/lia';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { TbPigMoney } from 'react-icons/tb';
import { TfiReload } from 'react-icons/tfi';

const IconWidget = (props) => {
    let html = '';

    switch (props.icon) {
        case "GoHomeFill":
            html = <GoHomeFill className={props.className} />;
            break;
        case "FaSearch":
            html = <FaSearch className={props.className} />;
            break;
        case "IoMdHelpCircleOutline":
            html = <IoMdHelpCircleOutline className={props.className} />;
            break;
        case "FaChevronRight":
            html = <FaChevronRight className={props.className} />;
            break;
        case "LiaGlobeSolid":
            html = <LiaGlobeSolid className={props.className} />;
            break;
        case "GoGear":
            html = <GoGear className={props.className} />;
            break;
        case "GoThumbsup":
            html = <GoThumbsup className={props.className} />;
            break;
        case "GoZap":
            html = <GoZap className={props.className} />;
            break;
        case "FaUser":
            html = <FaUser className={props.className} />;
            break;
        case "GoSignOut":
            html = <GoSignOut className={props.className} />;
            break;
        case "FiAlertCircle":
            html = <FiAlertCircle className={props.className} />;
            break;
        case "RiMoneyDollarCircleFill":
            html = <RiMoneyDollarCircleFill className={props.className} />;
            break;
        case "FaMoneyBillTrendUp":
            html = <FaMoneyBillTrendUp className={props.className} />;
            break;
        case "TbPigMoney":
            html = <TbPigMoney className={props.className} />;
            break;
        case "BsChatDots":
            html = <BsChatDots className={props.className} />;
            break;
        case "SiNaver":
            html = <SiNaver className={props.className} />;
            break;
        case "TfiReload":
            html = <TfiReload className={props.className} />;
            break;

    }

    return html;

};

export default IconWidget;