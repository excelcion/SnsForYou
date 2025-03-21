import React from "react";

import IconWidget from "../../../components/Icons/icon_widget";

const Addfunds = () => {
  return (
    <main className="min-h-screen ">

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 px-2 lg:px-5 w-full">

        <div className="flex flex-col bg-white rounded-2xl p-5 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">
              잔액충전
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

            <div className="col-span-1 border rounded-lg p-4 ">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-md">
                  <IconWidget icon="RiMoneyDollarCircleFill" className=" text-4xl fill-yellow-500" />
                </div>
                <div className="flex flex-col ml-4">
                  <h3 className="flex items-center font-bold">
                    충전 포인트
                    <IconWidget icon="IoMdHelpCircleOutline" className="ml-1" />
                  </h3>
                  <p className="">
                    <span className="font-bold">120,000</span>P
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border rounded-lg p-4 ">
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-md">
                  <IconWidget icon="TbPigMoney" className=" text-4xl stroke-purple-500" />
                </div>
                <div className="flex flex-col ml-4">
                  <h3 className="flex items-center font-bold">
                    적립 포인트
                    <IconWidget icon="IoMdHelpCircleOutline" className="ml-1" />
                  </h3>
                  <p className="">
                    <span className="font-bold">0</span>P
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border rounded-lg p-4 ">
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-md">
                  <IconWidget icon="FaMoneyBillTrendUp" className=" text-4xl fill-red-500" />
                </div>
                <div className="flex flex-col ml-4">
                  <h3 className="flex items-center font-bold">
                    소멸 포인트
                    <IconWidget icon="IoMdHelpCircleOutline" className="ml-1" />
                  </h3>
                  <p className="">
                    <span className="font-bold">0</span>P
                  </p>
                </div>
              </div>
            </div>

            <button type="button" className="col-span-1 flex items-center justify-center rounded-lg p-4 bg-main-900 transition-all hover:opacity-85">
              <span className="text-white font-bold text-xl">포인트 충전</span>
              <IconWidget icon="FaChevronRight" className=" fill-white text-sm ml-3 " />
            </button>



          </div>
        </div>

        <div className="flex flex-col bg-white rounded-2xl p-5 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">충전 방법 안내</h3>
          </div>
          <ul className="mt-5 flex flex-col">
            <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
              <p className="text-sm ">서울보증보험 대금보호 서비스</p>
              <IconWidget icon="FaChevronRight" className="text-sm" />
            </li>
            <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
              <p className="text-sm ">무통장 입금 안내</p>
              <IconWidget icon="FaChevronRight" className="text-sm" />
            </li>
            <li className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer">
              <p className="text-sm ">카드 충전 안내</p>
              <IconWidget icon="FaChevronRight" className="text-sm" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col bg-white rounded-2xl p-5 col-span-2">
          <div className="flex items-center">
            <h3 className="font-bold">
              충전내역
            </h3>
            <span className="ml-2 text-xs">* 충전/환불 내역만 표시됩니다.</span>
          </div>
          <div className="relative overflow-x-auto sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-3 py-3 text-center whitespace-nowrap w-16 " scope="col">번호</th>
                  <th className="px-6 py-3 text-center whitespace-nowrap" scope="col">충전일시</th>
                  <th className="px-6 py-3 text-center whitespace-nowrap w-32" scope="col">충전금액</th>
                  <th className="px-6 py-3 text-center whitespace-nowrap w-24" scope="col">결제 방식</th>
                  <th className="px-6 py-3 text-center whitespace-nowrap w-24" scope="col">상태</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">01</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-yellow-500">대기중</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">02</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600">환불</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">03</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600">환불</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">04</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-500">보류</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">05</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-teal-500">완료</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">06</th>
                  <td className="px-6 py-4 whitespace-nowrap">2025년 03월 01일 0시 0분 0초</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="text-red-500 font-bold">20,000</span>원</td>
                  <td className="px-6 py-4 whitespace-nowrap">무통장 결제</td>
                  <td className="px-6 py-4 whitespace-nowrap text-teal-500">완료</td>
                </tr>
                
              </tbody>
            </table>
            <nav
              aria-label="Table navigation"
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    2
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    href="/">
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    4
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    5
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </section>

    </main>
  );
};

export default Addfunds;
