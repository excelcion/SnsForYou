import React, { useState } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import { useSidebar } from "../../contexts/hooks/useSidebar";

const Setting = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();

  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <main className="flex pt-[4.5em] overflow-hidden min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
            
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Setting;
