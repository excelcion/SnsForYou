import { Route, Routes } from "react-router-dom";

// contexts
import { useSidebar } from "../contexts/hooks/useSidebar";

// assets

// views
import HeaderAuth from "../components/Headers/HeaderAuth";
import FooterAuth from "../components/Footers/FooterAuth";
import SidebarAuth from "../components/Sidebar/SidebarAuth";
import Home from "../views/auth/home/Home";
import Guide from "../views/auth/guide/Guide";
import Faq from "../views/auth/faq/Faq";
import Affiliates from "../views/auth/affiliates/Affiliates";
import Addfunds from "../views/auth/addfunds/Addfunds";
import Contact from "../views/auth/faq/Contact";


// Theme 관련 라우트 컴포넌트 분리
const AuthRoutes = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();

    return (
        <div className="bg-[#F5F5F5]">
            <HeaderAuth />
            <main className="flex overflow-hidden min-h-screen pt-[4.5em]">
                <SidebarAuth isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/guide"} element={<Guide />} />
                        <Route path={"/faq"} element={<Faq />} />
                        <Route path={"/affiliates"} element={<Affiliates />} />
                        <Route path={"/addfunds"} element={<Addfunds />} />
                        <Route path={"/contact"} element={<Contact />} />
                    </Routes>
                    <FooterAuth />
                </div>
            </main>
        </div>
    );
}

export default AuthRoutes;