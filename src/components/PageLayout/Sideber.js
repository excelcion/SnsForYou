import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "../Sidebar/Sideber_item";
import { useAuth } from "../../contexts/AuthContext";
import SidebarItemSub from "../Sidebar/Sideber_item_sub";
import IconWidget from "../Widget/icon_widget";
import { GoHomeFill, GoZap } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleOpen }) => {
    const { user } = useAuth();
    const loaction = useLocation();

    const [isOpens, setIsOpens] = useState(false);
    const [moOpen, setMoOpen] = useState();

    const toggleOpens = () => {
        setIsOpens((prev) => !prev);
    }

    const toggleMoOpen = () => {
        setMoOpen((prev) => !prev);
    }

    return (
        <>
            <aside id="sidebar" className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 h-[calc(100%-53px)] lg:h-full pt-16 lg:pt-[4.5em] font-normal duration-75 transition-width duration-200 w-full lg:w-64 ${ moOpen ? "flex" : "hidden"} lg:flex`}>
                <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white rounded-lg">
                    <div onClick={toggleMoOpen} className=" absolute right-2 top-2">
                        <IoCloseSharp className="text-xl" />
                    </div>
                    <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 divide-y divide-gray-200 ">
                            <ul className="pb-2">
                                <li>
                                    <SidebarItem href="#" name="서비스 소개" icon="" iconClassName={"w-6 mr-2"} textClassName={`font-bold text-lg`} textShow={isOpen} />
                                </li>
                                <li>
                                    <SidebarItem href={`/`} name="주문하기" icon="GoHomeFill" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/' ? true : false} />
                                </li>
                                <li>
                                    <SidebarItem href={`/guide`} name="상품안내 및 주문방법" icon="FaSearch" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/guide' ? true : false} />
                                </li>
                                <li>
                                    <SidebarItem href={`/faq`} name="자주 묻는 질문" icon="IoMdHelpCircleOutline" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/faq' ? true : false} />
                                </li>
                                <li>
                                    <SidebarItem href={`/addfunds`} name="충전하기" icon="GoZap" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/addfunds' ? true : false} />
                                </li>
                            </ul>
                            <ul className="pt-2">
                                <li>
                                    <SidebarItem href="#" name="사용자 메뉴" icon="" iconClassName={"text-base mr-2"} textClassName={`font-bold text-lg`} textShow={isOpen} />
                                </li>
                                <li>
                                    <SidebarItem href={`/setting`} name="설정" icon="GoGear" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/setting' ? true : false} />
                                </li>
                                <li>
                                    <SidebarItem href={`/mypage`} name="마이페이지" icon="FaUser" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/mypage' ? true : false} />
                                </li>
                                <li>
                                    <SidebarItem href={`/logout`} name="로그아웃" icon="GoSignOut" iconClassName={"text-base mr-2"} textClassName={`text-sm`} textShow={isOpen} chk={loaction.pathname == '/logout' ? true : false} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-white z-10 border-t">
                        <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpens}>
                            <span>사업자정보</span>
                            <IconWidget icon="FaChevronRight" className={`text-sm ${isOpens ? "-rotate-90" : "rotate-90"} `} />
                        </div>
                        <div className={`text-sm mt-3 ${isOpens ? "" : "hidden"}`} >
                            <p>스마일드래곤주식회사</p>
                            <p>대표 이상필, 문영화</p>
                            <address>경기 고양시 일산동구 백마로 195, SK엠시티타워 일반동 13F</address>
                            <p>사업자번호 813-87-01236</p>
                            <p>통신판매 제2019-고양일산동-1344</p>
                            <div>
                                <address>대표번호
                                    <a href="tel:1877-6533">1877-6533</a>
                                </address>
                                <address>이메일
                                    <a href="mailto:cs@snsshop.kr">cs@snsshop.kr</a>
                                </address>
                            </div>
                            <button>이용약관</button>
                            <button>개인정보취급방침</button>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="fixed bottom-0 left-0 z-10 bg-white w-full border-t block lg:hidden" >
                <ul className="py-2 flex grid grid-cols-5 gap-2">
                    <li className="flex items-center justify-center flex-col">
                        <Link to="/" className="flex items-center justify-center flex-col">
                            <GoHomeFill className={`text-gray-500 ${loaction.pathname == '/' ? "text-gray-800" : "text-gray-500"}`} />
                            <span className={`text-sm ${loaction.pathname == '/' ? "text-gray-800" : "text-gray-500"}`}>주문</span>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center flex-col">
                        <Link to="/guide" className="flex items-center justify-center flex-col">
                            <FaSearch className={`text-gray-500 ${loaction.pathname == '/guide' ? "text-gray-800" : "text-gray-500"}`} />
                            <span className={`text-sm ${loaction.pathname == '/guide' ? "text-gray-800" : "text-gray-500"}`}>안내</span>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center flex-col">
                        <Link to="/faq" className="flex items-center justify-center flex-col">
                            <IoMdHelpCircleOutline className={`text-gray-500 ${loaction.pathname == '/faq' ? "text-gray-800" : "text-gray-500"}`} />
                            <span className={`text-sm ${loaction.pathname == '/faq' ? "text-gray-800" : "text-gray-500"}`} >진문</span>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center flex-col">
                        <Link to="/addfunds" className="flex items-center justify-center flex-col">
                            <GoZap className={`text-gray-500 ${loaction.pathname == '/addfunds' ? "text-gray-800" : "text-gray-500"}`} />
                            <span className={`text-sm ${loaction.pathname == '/addfunds' ? "text-gray-800" : "text-gray-500"}`} >충전</span>
                        </Link>
                    </li>
                    <li onClick={toggleMoOpen} className="flex items-center justify-center flex-col">
                        <IoMenu className={`text-gray-500 ${moOpen ? "text-gray-800" : "text-gray-500"}`} />
                        <span className={`text-sm ${moOpen ? "text-gray-800" : "text-gray-500"}`} >메뉴</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;