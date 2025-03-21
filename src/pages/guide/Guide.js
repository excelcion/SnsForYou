import React, { useState } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import { useSidebar } from "../../contexts/hooks/useSidebar";

import Icon1 from "../../assets/images/icon1.png"
import Icon2 from "../../assets/images/icon2.png"
import Icon3 from "../../assets/images/icon3.png"
import Icon4 from "../../assets/images/icon4.png"
import Icon5 from "../../assets/images/icon5.png"
import Icon6 from "../../assets/images/icon6.png"
import Icon7 from "../../assets/images/icon7.png"
import IconWidget from "../../components/Widget/icon_widget";

const Guide = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();


  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <main className="flex pt-[4.5em] overflow-hidden min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 px-2 lg:px-5">
            <section className="lg:col-span-1 ">
              <div className="bg-white rounded-2xl p-3 lg:p-5 mb-5">
                <h3 className="font-bold">
                  상품/가격 안내 및 상품활용 TIP
                </h3>
                <select className="w-full border mt-5 px-4 py-3 rounded-lg text-sm">
                  <option value={0}>서비스 전체</option>
                  <option value="ig">인스타그램</option>
                  <option value="yt">유튜브</option>
                  <option value="fb">페이스북</option>
                </select>
                <div className="grid pt-8 text-left md:gap-5 dark:border-gray-700 md:grid-cols-1">
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <IconWidget icon="FiAlertCircle" className="mr-2" />
                      인스타그램 좋아요 늘리기 서비스란?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      게시물에 좋아요를 늘려주는 서비스 입니다. 인스타그램에서 좋아요는, 게시물의 신뢰도 및 인기도를 나타내는 수치이며 개수가 많을수록 인기게시물에 선정될 확률이 증가합니다.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <IconWidget icon="FiAlertCircle" className="mr-2" />
                      인스타그램 자동 좋아요 늘리기 서비스란?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      인스타그램에서 사진을 올릴 때마다 좋아요가 자동으로 늘어나는 서비스 입니다.기존에 이미 올라가있는 게시물에는 해당되지 않으며, 앞으로 올리는 게시물에만 좋아요가 증가합니다.자동으로 좋아요가 늘어나기 때문에 게시물 관리가 편리하여 인기가 많은 서비스 입니다.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <IconWidget icon="FiAlertCircle" className="mr-2" />
                      인스타그램 무제한 자동 좋아요 늘리기 서비스란?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      인스타그램에서 사진을 올릴 때마다 좋아요가 자동으로 늘어나는 서비스 이며, 기간제한이 있는 기간제 서비스 입니다. 서비스 기간동안 올리는 게시물마다 좋아요가 자동으로 늘어나며, 하루에 10개, 20개, 30개 등 갯수제한 없이 올리는 게시물마다 구매한 수량만큼 좋아요가 증가합니다.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <IconWidget icon="FiAlertCircle" className="mr-2" />
                      인스타그램 조회수 늘리기 서비스란?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      동영상 게시물에 조회수를 증가시키는 서비스 입니다.동영상 게시물에 조회수가 많을수록 인기게시물에 선정될 확률이 증가합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-3 lg:p-5 mb-5">
                <h3 className="font-bold">
                  주문방법 - 링크 입력 가이드
                </h3>
                <ul className="mt-5">
                  <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
                    <p className="text-sm ">📝 SNS샵 주문하기 이용 가이드</p>
                    <IconWidget icon="FaChevronRight" className="text-sm" />
                  </li>
                  <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
                    <p className="text-sm ">인스타 인기게시물 상위노출 주문방법</p>
                    <IconWidget icon="FaChevronRight" className="text-sm" />
                  </li>
                  <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
                    <p className="text-sm ">인스타 팔로워 주문방법</p>
                    <IconWidget icon="FaChevronRight" className="text-sm" />
                  </li>
                  <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
                    <p className="text-sm ">인스타 좋아요 주문방법</p>
                    <IconWidget icon="FaChevronRight" className="text-sm" />
                  </li>
                  <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
                    <p className="text-sm ">인스타 자동좋아요 주문방법</p>
                    <IconWidget icon="FaChevronRight" className="text-sm" />
                  </li>
                </ul>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Guide;
