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

const IconWidget = ({ icon, className }) => {
    let html = '';

    switch (icon) {
        case "GoHomeFill":
            html = <GoHomeFill className={className} />;
            break;
        case "FaSearch":
            html = <FaSearch className={className} />;
            break;
        case "IoMdHelpCircleOutline":
            html = <IoMdHelpCircleOutline className={className} />;
            break;
        case "FaChevronRight":
            html = <FaChevronRight className={className} />;
            break;
        case "LiaGlobeSolid":
            html = <LiaGlobeSolid className={className} />;
            break;
        case "GoGear":
            html = <GoGear className={className} />;
            break;
        case "GoThumbsup":
            html = <GoThumbsup className={className} />;
            break;
        case "GoZap":
            html = <GoZap className={className} />;
            break;
        case "FaUser":
            html = <FaUser className={className} />;
            break;
        case "GoSignOut":
            html = <GoSignOut className={className} />;
            break;
        case "FiAlertCircle":
            html = <FiAlertCircle className={className} />;
            break;
        case "RiMoneyDollarCircleFill":
            html = <RiMoneyDollarCircleFill className={className} />;
            break;
        case "FaMoneyBillTrendUp":
            html = <FaMoneyBillTrendUp className={className} />;
            break;
        case "TbPigMoney":
            html = <TbPigMoney className={className} />;
            break;
        case "BsChatDots":
            html = <BsChatDots className={className} />;
            break;
        case "SiNaver":
            html = <SiNaver className={className} />;
            break;
        case "TfiReload":
            html = <TfiReload className={className} />;
            break;
        default:
            break;
    }

    return html;

};

export default IconWidget;