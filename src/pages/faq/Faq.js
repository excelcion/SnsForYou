import React, { useEffect, useState } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import { useSidebar } from "../../contexts/hooks/useSidebar";
import IconWidget from "../../components/Widget/icon_widget";

const Faq = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();

  const [originList, setOriginList] = useState([
    { id: 1, title: '취소,환불,AS' },
    { id: 2, title: 'SNS 포유 서비스' },
    { id: 3, title: '인스타그램' },
  ]);

  const [list, setList] = useState([
    {
      id: 11,
      title: "주문 취소 가능한가요?",
      origin: 1,
      body: `주문 하시면 주문정보는 SNS샵 시스템으로 자동 전송되어 주문을 처리하게 됩니다. 따라서, 주문 취소 및 환불은 시스템이 주문을 이행 못한다고 판단될 때 자동으로 취소/환불 처리 됩니다.
      시스템이 정상적으로 작업이 불가하다고 판단될 경우(시스템오류), 작업 취소되는 즉시 사용자의 잔액으로 자동 환불 처리됩니다. 또한, 정상적인 주문임에도 48시간 이내에 작업이 시작되지 않을 경우, 고객센터로 문의주시면 확인 후 처리 해드립니다. 다만, 작업이 이미 시작(진행)되었을 경우에는 취소 및 환불이 불가능합니다.
      *환불 확인은 주문내역에서 사용금액으로 확인할 수 있습니다.(취소시 0원으로 표시됨)
      *단, 주문상태가 '부분실패'일 경우 실패된 만큼만 환불됩니다.`,
    },
    {
      id: 12,
      title: "주문이 취소되었는데 어떻게 환불 받나요?",
      origin: 1,
      body: `SNS샵의 모든 상품은 24시간 자동주문처리 시스템입니다.
작업 도중 취소되거나 완료되지 않은 상태에서 실패될 경우에는
즉시 사용자의 잔액으로 자동 환불 처리됩니다.
*환불 확인은 주문내역에서 사용금액으로 확인할 수 있습니다.(취소시 0원으로 표시됨)
*단, 주문상태가 '부분실패'일 경우 실패된 만큼만 환불됩니다.`,
    },
    {
      id: 13,
      title: "A/S 규정은 어떻게 되나요?",
      origin: 1,
      body: `SNS샵의 모든 상품은 24시간 자동주문처리 시스템입니다.
작업 도중 취소되거나 완료되지 않은 상태에서 실패될 경우에는
즉시 사용자의 잔액으로 자동 환불 처리됩니다.
*환불 확인은 주문내역에서 사용금액으로 확인할 수 있습니다.(취소시 0원으로 표시됨)
*단, 주문상태가 '부분실패'일 경우 실패된 만큼만 환불됩니다.`,
    },
    {
      id: 14,
      title: "포인트 환불 절차가 어떻게 되나요?",
      origin: 1,
      body: `SNS샵의 모든 상품은 24시간 자동주문처리 시스템입니다.
작업 도중 취소되거나 완료되지 않은 상태에서 실패될 경우에는
즉시 사용자의 잔액으로 자동 환불 처리됩니다.
*환불 확인은 주문내역에서 사용금액으로 확인할 수 있습니다.(취소시 0원으로 표시됨)
*단, 주문상태가 '부분실패'일 경우 실패된 만큼만 환불됩니다.`,
    },
    {
      id: 15,
      title: "충전은 어떻게 하나요?",
      origin: 2,
      body: `'잔액충전' 메뉴에서 충전이 가능하며, 충전방식으로는 현재
'무통장입금 / 카드결제' 방식이 있습니다.
자세한 사항은 잔액충전 메뉴의 설명을 참고해주세요.`,
    },
    {
      id: 16,
      title: "가격이 왜 이렇게 저렴한가요?",
      origin: 2,
      body: `SNS샵은 세계 모든 주문을 대량으로 처리하기 때문에 작업 시 필요한 트래픽비용을 저렴하게 확보할 수 있습니다. 또한 최초로 자동으로 주문처리하는 시스템을 구축하여 인건비 부분을 크게 절약할 수 있었습니다.`,
    },
    {
      id: 17,
      title: "제공되는 서비스는 안전한가요?",
      origin: 2,
      body: `SNS샵의 작업방식은 실제 트래픽을 이용합니다. 실제 트래픽이란, 전 세계의 각각 다른 유효한 IP를 이용하는 것으로 실제 계정을 통해서 작업을 하기 때문에 안전합니다`,
    },
    {
      id: 18,
      title: "서비스 운영시간은 어떻게 되나요?",
      origin: 2,
      body: `SNS샵의 모든 서비스는 자동주문 처리 시스템으로 24시간 언제든지 이용가능 합니다.`,
    },
    {
      id: 19,
      title: "모바일 이용이 가능한가요?",
      origin: 2,
      body: `네, 가능합니다.
모바일로 인터넷 접속 후 주소창에 snsshop.kr 을 입력하여 서비스 이용이 가능합니다.
모바일 최적화가 되어 있어서 언제 어디서든지 PC처럼 손쉽게 이용하실 수 있습니다.`,
    },
    {
      id: 110,
      title: "고객센터 운영시간은 어떻게 되나요?",
      origin: 2,
      body: `- 월 ~ 금(10:00 - 19:00)
- 국가공휴일 및 대체 휴일 준수합니다
- 점심시간(13:00 - 14:00)
- 모든 문의는 24시간 이내에 답변드릴 수 있도록 노력하겠습니다
- 긴급문의 : 1877 - 6533
홈페이지 실시간 문의 카카오톡 1:1 상담`,
    },
    {
      id: 111,
      title: "서비스 사용중 다른 매체로 동시에 광고해도 되나요?",
      origin: 2,
      body: `SNS샵 서비스를 이용함과 동시에 다른 매체를 통해 작업 및 광고를 하게되면 작업이 중복 처리되어 누락이 발생할 수 있습니다. 이렇게 중복처리로 인해 발생된 누락에 대해서는 따로 추가작업을 해드리지 않습니다..
원활한 작업을 위해 SNS샵에서 주문하신 작업이 아직 "진행중"이라면 다른 매체를 통해 광고를 진행하지 않는것을 권장합니다.`,
    },
    {
      id: 112,
      title: "주문을 했는데 주문확인은 언제 되나요?",
      origin: 2,
      body: `SNS샵 서비스는 구매자님이 주문을 하시는 순간 SNS샵 메인시스템을 통해 자동으로 주문 처리됩니다. 따라서 24시간 언제든지 정확하고 빠르게 작업이 진행됩니다.`,
    },
    {
      id: 113,
      title: "같은 링크를 중복해서 또 주문할 수 있나요?",
      origin: 2,
      body: `네, 가능합니다.
단, 재주문 전에 주문상태가 '진행중'일 때는 불가능 하며, 반드시 주문상태가 '완료'상태가 되었을 때 원하시는 만큼 다시 주문을 하실 수 있습니다.
주문상태가 "진행중"인 상태에서 추가로 주문시 작업이 누락될 수 있으며, 누락된 부분은 주문자의 실수로 발생되는 문제이기 때문에 해당 부분에 대해서는 보상을 해드리지 않습니다.`,
    },
    {
      id: 114,
      title: "주문을 했는데 주문상태가 '주문접수/주문대기'로 나와요.",
      origin: 2,
      body: `주문을 하시면 주문정보가 자동으로 SNS샵 시스템으로 전달되며, 전달된 주문은 시스템에서 자동으로 '주문접수'or'주문대기'상태를 거쳐서 작업을 진행합니다. 작업은 '주문준비중 또는 가동중'단계를 거쳐서 '주문완료' 또는 '주문실패'의 결과로 마무리 됩니다.`,
    },
    {
      id: 115,
      title: "주문이 진행되다가 '주문실패'로 바뀌면 어떻게 되나요?",
      origin: 2,
      body: `주문하신 수량에서 실패된 수량만큼 사용자의 잔액으로 자동 환불 됩니다.
*환불 확인은 주문내역에서 사용금액으로 확인할 수 있습니다.(취소시 0원으로 표시됨)
*단, 주문상태가 '부분실패'일 경우 실패된 만큼만 환불됩니다.`,
    },
    {
      id: 116,
      title: "자동좋아요 입력란에 최소/최대 수량은 뭔가요?",
      origin: 2,
      body: `자동좋아요의 "최소/최대" 수량은 설정 범위 내에서 좋아요가 랜덤하게 유입되도록 설정하는 기능입니다.`,
    },
    {
      id: 117,
      title: "작업 속도를 조절할 수 있을까요?",
      origin: 2,
      body: `아쉽게도 작업속도 설정은 불가합니다.
다만, 자동좋아요 서비스의 경우 '지연설정' 옵션을 설정하여 게시물을 올린 후 00분(시간) 후에 좋아요가 유입될 수 있도록 설정 가능합니다.`,
    },
    {
      id: 118,
      title: "실제 유저로 작업이 되나요?",
      origin: 3,
      body: `실제 유저로 작업되는 상품과 그렇지 않은 상품으로 구분해서 판매하고 있습니다. 따라서 원하시는 상품을 구매하시면 됩니다.`,
    },
    {
      id: 119,
      title: "유령팔로워 주문하기 전에 알아야 할 사항이 있나요?",
      origin: 3,
      body: `작업 완료 후 팔로워 이탈률이 최초 작업 이후 클 수 있으므로 이탈률에 대한 컴플레인은 자제하여 주시기 바랍니다`,
    },
    {
      id: 210,
      title: "팔로워 or 좋아요가 주문수량보다 적게 들어왔는데, 주문내역 상태창에는 '주문완료'로 되어있습니다",
      origin: 3,
      body: `보통 이런 경우는 이전 주문이 완료 되기 전에 동일 계정 or 동일 게시물 or 동일 상품 or 동일 서버 주문을 하는 경우에 발생합니다.(중복주문)`,
    },
    {
      id: 211,
      title: "인스타그램 작업 기간은 얼마나 걸리나요?",
      origin: 3,
      body: `각 상품을 주문하는 화면의 상품설명을 참조하시기 바랍니다.`,
    },
    {
      id: 212,
      title: "좋아요를 신청하면 몇 분만에 숫자가 올라가나요?",
      origin: 3,
      body: `좋아요 서비스는 주문 후 평균 1분~60분내 자동으로 작업이 시작됩니다. (평균 시작시간일 뿐 서버 상황에 따라 지연될 수 있습니다.)`,
    },
  ]);

  const [ isOpen, setIsOpen ] = useState(originList !== null ? 'all' : null);

  const [ isViewOpen, setIsViewOpen ] = useState(list !== null ? list[0].id : null);


  const toggleOpen = (e) => {
    setIsOpen((prev) => prev == e ? null : e);
  }

  const toggleViewOpen = (e) => {
    setIsViewOpen((prev) => e );
  }

  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <main className="flex pt-[4.5em] overflow-hidden min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen grid grid-cols-1 gap-2 lg:gap-5 px-2 lg:px-5">
            <section className="lg:col-span-1">

              <div className="flex flex-col bg-white rounded-2xl p-3 lg:p-5 mb-5 h-full">

                <div className="flex lg:items-center justify-between flex-col lg:flex-row">
                  <h3 className="font-bold">
                    자주 묻는 질문
                  </h3>
                  <div className="relative w-60 mt-2 lg:mt-0">
                    <IconWidget icon="FaSearch" className=" text-sm absolute fill-gray-500 top-1/2 left-3 -translate-y-1/2" />
                    <input type="text" placeholder="질문을 입력해주세요." className="bg-gray-100 w-full pl-8 py-2 rounded-lg border text-sm" />
                  </div>
                </div>

                <div className="flex flex-col-reverse lg:grid grid-cols-3  lg:grid-cols-4 gap-0 border mt-5 ">

                  <div className="col-span-3 lg:col-span-1 border-r bg-[#f4f7ff] ">
                    <ul className="p-4 h-[50em] overflow-y-auto">
                      <li>
                        <div onClick={() => toggleOpen('all')} className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-[#e1e6f3]" >
                          <span className={`text-sm ${isOpen === 'all' ? 'text-main-900 font-bold' : 'text-gray-900'}`}>전체 보기</span>
                          <IconWidget icon="FaChevronRight" className={`text-sm ${isOpen === 'all' ? 'fill-main-900 -rotate-90' : 'text-gray-900 rotate-90'}`} />
                        </div>
                        <ul className={isOpen === 'all' ? 'h-auto' : 'h-0 overflow-hidden'}>
                          {
                            list.map((j, i) => {
                              return (
                                <li key={i} onClick={() => toggleViewOpen(j.id)} className="flex items-center px-5 py-3 rounded-lg cursor-pointer hover:bg-[#e1e6f3]">
                                  <div className={`w-2 h-2 rounded-full ${isViewOpen === j.id ? 'bg-main-900' : 'bg-gray-300'}`}></div>
                                  <p className={`text-sm ml-2 text-gray-700 font-bold truncate ${isViewOpen === j.id ? 'text-main-900 font-bold' : 'text-gray-900'}`} >{j.title}</p>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      {
                        originList.map((e, i) => (
                          <li key={e.id}>
                            <div onClick={() => toggleOpen(e.id)} className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-[#e1e6f3]" >
                              <span className={`text-sm truncate ${isOpen === e.id ? 'text-main-900 font-bold' : 'text-gray-900'}`} >{e.title}</span>
                              <IconWidget icon="FaChevronRight" className={`text-sm ${isOpen === e.id ? 'fill-main-900 -rotate-90' : 'text-gray-900 rotate-90'}`} />
                            </div>
                            <ul className={isOpen === e.id ? 'h-auto' : 'h-0 overflow-hidden'}>
                              {
                                list.filter((jo) => {
                                  return jo.origin == e.id;
                                }).map((j, ji) => {
                                  return (
                                    <li key={ji} onClick={() => toggleViewOpen(j.id)} className="flex items-center px-5 py-3 rounded-lg cursor-pointer hover:bg-[#e1e6f3]">
                                      <div className={`w-2 h-2 rounded-full ${isViewOpen ===  j.id ? 'bg-main-900' : 'bg-gray-300'}`}></div>
                                      <p className={`text-sm ml-2 text-gray-700 font-bold truncate ${isViewOpen === j.id ? 'text-main-900 font-bold' : 'text-gray-900'}`} >{j.title}</p>
                                    </li>
                                  )
                                })
                              }

                            </ul>
                          </li>
                        ))
                      }

                    </ul>
                  </div>

                  <div className="col-span-3 px-5 py-6">
                    <div className=" max-w-2xl mx-auto">
                      <div>

                        <p
                          style={{
                            textAlign: "center",
                          }}>
                          <span
                            style={{
                              fontSize: "24px",
                            }}>
                            <span
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontFamily: "Arial",
                              }}>
                              <strong>{list.find((e) => e.id == isViewOpen)?.title}</strong>
                            </span>
                          </span>
                        </p>

                        <p
                          style={{
                            textAlign: "center",
                          }}>
                          <span
                            style={{
                              color: "rgb(0, 0, 0)",
                              fontFamily: "Arial",
                              fontSize: "18px",
                            }}>
                            <strong>
                              <br />
                            </strong>
                          </span>
                        </p>
                        
                        <div>
                          <span
                            style={{
                              color: "rgb(53, 53, 53)",
                            }}>
                            <span
                              style={{
                                backgroundColor: "rgb(249, 249, 249)",
                                color: "rgb(0, 0, 0)",
                                fontSize: "14px",
                              }}>
                              <br />
                            </span>
                            {list.find((e) => e.id == isViewOpen)?.body}
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>

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

export default Faq;
