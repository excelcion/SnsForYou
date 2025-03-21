import IconWidget from "../Icons/icon_widget";

const FooterAuth = () => {
    return (
        <>
            <div className="fixed bottom-20 lg:bottom-10 right-2 lg:right-10 z-10 ">
                <div className="bg-[#03c75a] p-3 lg:p-5 cursor-pointer rounded-full relative z-10">
                    <IconWidget icon="SiNaver" className="text-sm lg:text-2xl text-white relative" />
                </div>
                <div className="absolute w-[7em] lg:w-24 bg-white shadow-md px-4 py-[0.3em] lg:py-3 right-3/4 text-left top-1/2 -translate-y-1/2  text-[0.7em] lg:text-sm rounded-s-full whitespace-nowrap">1대1 문의</div>
            </div>
        </>
    );
}

export default FooterAuth;