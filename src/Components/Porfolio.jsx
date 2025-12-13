import { useTranslation } from "react-i18next";

function Porfolio() {
  const { t } = useTranslation();
  return (
    <div className='space-y-[30px] mb-10'>
      <div className=' h-[99px] bg-black/40'>

      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-w-[1440px] mx-auto ">
        <a href="https://logistx.uz" target="_blank" rel="noopener noreferrer" className="block">
          <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
            <div className="overflow-hidden rounded-xl">
              <img src="/image/LogistX.png" className="w-[591px] sm:w-[681px] md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center m-2">
              <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-2xl">
                  {t("portfolioSection.projects.0.title")}
                </h1>
                <p className="text-[#8D8D8D] text-base">
                  {t("portfolioSection.projects.0.body")}
                </p>
              </div>
              <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
            </div>
          </div>
        </a>

        <a href="https://bepulgps.uz" target="_blank" rel="noopener noreferrer" className="block">
          <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden ">
            <div className="overflow-hidden rounded-xl">
              <img src="/image/BepulGPS.png" className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center m-2">
              <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-2xl">{t("portfolioSection.projects.1.title")}</h1>
                <p className="text-[#8D8D8D] text-base">{t("portfolioSection.projects.1.body")}</p>
              </div>
              <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
            </div>
          </div>
        </a>

        <a href="https://xmed.uz/" target="_blank" rel="noopener noreferrer" className="block">
          <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden hidden lg:block">
            <div className="overflow-hidden rounded-xl">
              <img src="/image/Xmed.png" className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center m-2">
              <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-2xl">{t("portfolioSection.projects.2.title")}</h1>
                <p className="text-[#8D8D8D] text-base">{t("portfolioSection.projects.2.body")}</p>
              </div>
              <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Porfolio