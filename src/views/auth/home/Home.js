import React, { useState } from "react";

import Icon1 from "../../../assets/images/icon1.png"
import Icon2 from "../../../assets/images/icon2.png"
import Icon3 from "../../../assets/images/icon3.png"
import Icon4 from "../../../assets/images/icon4.png"
import Icon5 from "../../../assets/images/icon5.png"
import Icon6 from "../../../assets/images/icon6.png"
import Icon7 from "../../../assets/images/icon7.png"
import IconWidget from "../../../components/Icons/icon_widget";

const Home = () => {
  const [isOpen1, setIsOpen1] = useState(0);
  const [isOpen2, setIsOpen2] = useState(0);
  const [serviceList] = useState([
    {
      id: 1, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 2, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 3, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 4, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 5, title: '틱톡', img: Icon5,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 6, title: '스레드', img: Icon6,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 7, title: 'X', img: Icon7,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 8, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 9, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 10, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 11, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 12, title: '틱톡', img: Icon5,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 13, title: '스레드', img: Icon6,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 14, title: 'X', img: Icon7,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 15, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 16, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 17, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 18, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
  ]);

  const toggleOpen1 = (id) => {
    setIsOpen1(id);
  }

  const toggleOpen2 = (id) => {
    setIsOpen2(id);
  }

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 lg:px-5 lg:gap-5">
      <section className="lg:col-span-1 ">
        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <h3 className="font-bold">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">1</span>
            원하는 서비스를 선택해주세요.
          </h3>
          <ul className=" grid grid-cols-4 gap-3 mt-5 lg:grid-cols-6">
            {
              serviceList?.map((e) => (
                <li key={e.id} onClick={() => toggleOpen1(e.id)} className={`flex flex-col items-center justify-center py-4 border col-span-1 rounded-lg cursor-pointer border-gray-300 hover:border-main-900 ${isOpen1 === e.id ? "border-main-900" : ""}`}>
                  <img src={e.img} className="w-5 lg:w-8" />
                  <span className="text-xs lg:text-sm mt-2">{e.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <h3 className="font-bold">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">2</span>
            원하는 작업을 선택해주세요.
          </h3>
          <ul className="mt-5">
            {
              serviceList[0]?.workList.map((e) => (
                <li key={e.id} onClick={() => toggleOpen2(e.id)} className={`border rounded-lg px-4 py-4 mb-4 border-gray-300 cursor-pointer hover:border-main-900 ${isOpen2 === e.id ? "border-main-900" : ""}`}>
                  <p className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">{e.title}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <h3 className="font-bold">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">3</span>
            원하는 옵션을 선택해 주세요.
          </h3>
          <div className=" relative mt-5">
            <select className="w-full border  px-4 py-3 rounded-lg text-sm appearance-none peer">
              {
                serviceList[0]?.optionList.map((e) => (
                  <option key={e.id} value={e.id}>{e.title}</option>
                ))
              }
            </select>
            <IconWidget icon="FaChevronRight" className=" absolute w-5 rotate-90 right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <h3 className="font-bold text-sm">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">4</span>
            해당 작업(옵션)에 대한 상세 설명입니다.
            <span className="bg-red-500  text-[0.7rem] text-white px-2 py-1 rounded-lg ml-2">필독</span>
          </h3>
          <div className="bg-gray-200 p-4 mt-5 rounded-lg">
            <div className="text-xm h-[50em] overflow-y-auto">
              <h3 className="text-2xl font-bold">📣 서비스 특징</h3>
              <p className="mt-2">광고주의 게시물을 ㈜스마일드래곤의 제휴사 및 자사 플랫폼 등을 적절히 활용하여 실제 유저들에게 홍보해 계정의 '진짜 성장'을 도와드립니다. 노출 효과를 극대화해 퍼포먼스 마케팅은 물론 브랜드 마케팅까지 고루할 수 있는 유일한 마케팅 서비스입니다.</p>
              <img src="https://assets.snsshop.kr/assets/img2/signin-banner-01.jpg" alt="" className="w-1/2 my-4" />

              <h3 className="text-center">📣 서비스 특징</h3>
              <p className="mt-2 text-center">광고주의 게시물을 ㈜스마일드래곤의 제휴사 및 자사 플랫폼 등을 적절히 활용하여 실제 유저들에게 홍보해 계정의 '진짜 성장'을 도와드립니다.
                노출 효과를 극대화해 퍼포먼스 마케팅은 물론 브랜드 마케팅까지 고루할 수 있는 유일한 마케팅 서비스입니다.</p>
              <img src="https://assets.snsshop.kr/assets/img2/signin-banner-02.png" alt="" className="w-1/2 my-4 mx-auto"></img>

              <p className="mt-2">광고주의 게시물을 ㈜스마일드래곤의 제휴사 및 자사 플랫폼 등을 적절히 활용하여 실제 유저들에게 홍보해 계정의 '진짜 성장'을 도와드립니다.
                노출 효과를 극대화해 퍼포먼스 마케팅은 물론 브랜드 마케팅까지 고루할 수 있는 유일한 마케팅 서비스입니다.</p>
            </div>
          </div>
          <h3 className="font-bold text-sm mt-5">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">5</span>
            인스타그램 게시물 휴대폰번호를 입력해주세요.
          </h3>
          <input type="text" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm" placeholder="예) 010-1234-1234" />
          <h3 className="font-bold mt-5">
            <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">6</span>
            구매하실 수량을 입력해주세요.
          </h3>
          <input type="number" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm" placeholder="예) 100" />
          <p className="text-left text-sm text-gray-500 mr-1 mt-1">최소 ~ 최대 주문수량 : 1 ~ 100</p>
          <h3 className="font-bold mt-5">
            결제 예상 금액
          </h3>
          <input type="text" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm font-bold" value={"0원"} readOnly min={1} max={100} />
          <button type="button" className="flex items-center justify-center bg-main-900 px-4 py-3 w-full rounded-lg mt-5">
            <IconWidget icon="Shop" className=" fill-white mr-2" />
            <span className="text-sm text-white font-bold">주문하기</span>
          </button>
        </div>
      </section>
      <section className="lg:col-span-1">

        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <div className="flex justify-between items-start flex-wrap lg:items-center">
            <h3 className="font-bold">
              실시간 주문 리스트
            </h3>
            <h4 className="flex items-center justify-between lg:justify-center text-gray-400 text-xs lg:text-sm w-full mt-1 lg:w-auto lg:mt-0">
              <span>
                최근 업데이트 시간:
                <span className="text-black ml-2">2025년 03월 15일 0시 0분 05초</span>
              </span>
              <IconWidget icon="TfiReload" className="ml-2 cursor-pointer hover:text-black animate-spin" />
            </h4>
          </div>
          <ul className="mt-5">
            {
              serviceList[0]?.workList.map((e) => (
                <li key={e.id} className="border rounded-lg px-4 py-4 mb-4 transition-all cursor-pointer hover:border-main-900">
                  <div className="flex items-center justify-between">
                    <h3>zzz***</h3>
                    <span className="text-sm text-gray-400">2025년 03월 15일 0시 0분 03초</span>
                  </div>
                  <p className="text-sm mt-2 whitespace-nowrap text-ellipsis overflow-hidden">{e.title}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-3 mb-5 lg:p-5">
          <h3 className="font-bold">
            주문방법 - 링크 입력 가이드
          </h3>
          <ul className="mt-5">
            {
              serviceList[0]?.workList.map((e) => (
                <li key={e.id} className="flex items-center justify-between border rounded-lg px-4 py-4 mb-4 transition-all  cursor-pointer hover:border-main-900">
                  <p className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">{e.title}</p>
                  <IconWidget icon="FaChevronRight" className="text-sm" />
                </li>
              ))
            }
          </ul>
        </div>

      </section>
    </main>
  );
};

export default Home;
