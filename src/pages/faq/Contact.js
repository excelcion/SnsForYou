import React, { useState } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import { useSidebar } from "../../contexts/hooks/useSidebar";
import IconWidget from "../../components/Widget/icon_widget";

const Contact = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();

    return (
        <div className="bg-[#F5F5F5]">
            <Header />
            <main className="flex pt-[4.5em] overflow-hidden min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="grid grid-cols-1 lg:grid-cols-4 gap-3 px-5">
                        <section className="col-span-1 h-auto">
                            <div className="flex flex-col bg-white rounded-2xl p-5 h-full">

                                <div className="relative w-full">
                                    <IconWidget icon="FaSearch" className=" text-sm absolute fill-gray-500 top-1/2 left-3 -translate-y-1/2" />
                                    <input type="text" placeholder="사람, 그룹 및 메시지" className="bg-gray-100 w-full pl-8 py-2 rounded-lg border text-sm" />
                                </div>

                                <select id="countries" class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>모두</option>
                                    <option value="US">읽음</option>
                                    <option value="CA">읽지 않는</option>
                                </select>

                                <div className="mt-5 h-[43em] overflow-y-auto">
                                    <div className="flex items-left px-3 py-3 bg-gray-200 rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/20.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/21.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/22.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/23.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/24.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/25.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/26.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/27.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/28.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/29.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/30.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/31.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                    <div className="flex items-left px-3 py-3 transition-all rounded-lg cursor-pointer">
                                        <div className="mr-2 rounded-full overflow-hidden w-12">
                                            <img class="rounded-circle " src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/32.webp" alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-base text-gray-700">관리자님</h3>
                                            <p className="text-xs text-gray-500">지금 새로운 메시지를 보냈습니다.</p>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-auto">방금</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="col-span-3 h-auto">
                            <div className="flex flex-col bg-white rounded-2xl h-full">
                                <div className="p-5 border-b">
                                    <h3>관리자님</h3>
                                </div>
                                <div className="flex-auto px-3 py-2">
                                    <div className="flex">
                                        <div className="flex items-left px-3 py-3 rounded-lg">
                                            <div className="mr-2  w-12">
                                                <img class="rounded-circle rounded-full overflow-hidden" src="https://prium.github.io/phoenix/v1.20.1/assets/img/team/20.webp" alt="" />
                                            </div>
                                            <div className="flex flex-col justify-center ">
                                                <p className="text-base border px-4 py-2 rounded-lg">안녕하세요.</p>
                                                <span className="text-xs text-gray-500 mt-1 ml-1">어제 오전 10시</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="flex items-left px-3 py-3 rounded-lg">
                                            <div className="flex flex-col justify-center ">
                                                <p className="text-base border px-4 py-2 rounded-lg">안녕하세요.</p>
                                                <span className="text-xs text-gray-500 mt-1 text-end">어제 오전 10시</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t">
                                    <textarea placeholder="메시지를 입력해주세요." className="w-full resize-none" ></textarea>
                                    <button type="button" className="flex items-center justify-center bg-main-900 px-4 py-3 w-full rounded-lg mt-5">
                                        <span className="text-sm text-white font-bold">보내기</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Contact;
