import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Partners from "../_components/Partners";
import Carousel from "../_components/Carousel";
import Gallery from "../_components/Gallery";
import ServicesCards from "../_components/ServicesCards";
import { useTheme } from "../../contexts/ThemeProvider";

function All() {
  const { t } = useTranslation();
  const { homeRef, aboutRef, certificatesRef, servicesRef, portfolioRef, galleryRef } =
    useOutletContext();
    
  const { darkMode } = useTheme();
  

  return (
    <div>
      <header className="relative bg-[url('/baground/bgHope.avif')] bg-cover bg-center h-screen ">
        <section
          id="hero"
          ref={homeRef}
          className="flex items-center text-white h-screen pt-[100px] max-w-[1350px] mx-auto px-[20px] md:px-2 lg:px-3 2xl:px-0"
        >
          {/* */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl  font-semibold">
              {" "}
              <Trans i18nKey="hero.title" />{" "}
            </h1>

            <p className="text-[20px] md:text-[25px] w-full xl:w-[600px]">
              {" "}
              <Trans i18nKey="hero.description" />{" "}
            </p>
            <button
              className="
                    relative
                    bg-[#236fda] 
                    text-white 
                    font-semibold 
                    text-lg 
                    rounded-[56px] 
                    px-5 md:px-12 
                    py-4 
                    transition-all 
                    duration-300 
                    ease-in-out 
                    cursor-pointer 
                    select-none
                    active:scale-95
                    hover:scale-105
                    hover:shadow-[inset_0_3px_15px_rgba(255,255,255,0.2),0_3px_5px_rgba(0,0,0,0.1),0_10px_13px_rgba(0,0,0,0.1)]"
            >
              {t("hero.cta")}
              <span className="absolute top-0 left-[4%] w-[92%] h-1/2 rounded-[125px] bg-gradient-to-b from-white/50 to-white/0 opacity-50 pointer-events-none"></span>
            </button>
          </div>
        </section>
      </header>

      <main className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} transition-colors duration-500`}>
        <section id="partners" className={`py-12 ${darkMode ? 'bg-gray-700' : ''} transition-colors duration-500`}>
          <Partners />
        </section>

        <section
          ref={aboutRef}
          id="AboutUs"
          className={`flex `}
        >
          <div className="max-w-[1200px]  mx-auto space-y-[40px] md:space-y-[120px] my-[80px] px-[20px] md:px-2 lg:px-3 2xl:px-0">
            <div className="space-y-4 items-center justify-center flex flex-col text-center">
              <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                <img src="/logo/aboutUs.png" className="w-[24px]" />
                <h1 className="text-2xl"> {t("aboutSection.badge")}</h1>
              </button>

              <h1 className=" font-semibold text-[28px] md:text-4xl w-[335px] md:w-[600px] xl:w-[900px]">
                {t("aboutSection.title")}
              </h1>
              <p className="text-xl w-[335px] md:w-[600px] lg:w-[800px]">
                {t("aboutSection.subtitle")}
              </p>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center gap-[49px]">
              <img
                src="/image/AboutUs.avif"
                className="h-[335px] md:h-[687px] w-[335px] md:w-[680px] lg:w-[600px] 2xl:w-[690px] rounded-3xl "
              />

              <div className="space-y-[20px]">
                <div className="space-y-[12px]">
                  <h1 className="font-medium text-center text-4xl">
                    {t("aboutSection.whyTitle")}
                  </h1>

                  <p className="text-lg text-center w-[335px] sm:w-[360px] md:w-[580px] 2xl:w-[693px]">
                    {" "}
                    {t("aboutSection.whyDescription")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[50px] justify-items-center md:justify-items-start">
                  <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                      <img
                        src="/logo/services.png"
                        className="w-[32px] h-[27px]"
                      />
                    </div>
                    <div className="space-y-[8px]  w-[260px]">
                      <h1 className="font-medium text-xl">
                        {t("aboutSection.features.0.title")}
                      </h1>
                      <p className="text-lg">
                        {t("aboutSection.features.0.body")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                    <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                      <img
                        src="/logo/services4.png"
                        className="w-[32px] h-[27px]"
                      />
                    </div>
                    <div className="space-y-[8px]">
                      <h1 className="font-medium text-xl">
                        <Trans i18nKey="aboutSection.features.1.title">
                          <br className="hidden md:block" />
                        </Trans>
                      </h1>
                      <p className="text-lg">
                        <Trans i18nKey="aboutSection.features.1.body">
                          <br className="hidden md:block" />
                        </Trans>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                    <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                      <img
                        src="/logo/services2.png"
                        className="w-[32px] h-[27px]"
                      />
                    </div>
                    <div className="space-y-[8px]">
                      <h1 className="font-medium text-xl">
                        <Trans i18nKey="aboutSection.features.2.title">
                          <br className="hidden md:block" />
                        </Trans>
                      </h1>
                      <p className="text-lg">
                        <Trans i18nKey="aboutSection.features.2.body">
                          <br className="hidden md:block" />
                        </Trans>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                    <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                      <img
                        src="/logo/services3.png"
                        className="w-[32px] h-[27px]"
                      />
                    </div>
                    <div className="space-y-[8px]">
                      <h1 className="font-medium text-xl">
                        <Trans i18nKey="aboutSection.features.3.title">
                          <br className="hidden md:block" />
                        </Trans>
                      </h1>
                      <p className="text-lg">
                        <Trans i18nKey="aboutSection.features.3.body">
                          <br className="hidden md:block" />
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          ref={servicesRef}
          id="Services"
          className={`w-full mx-auto flex flex-col items-center justify-center space-y-[70px] py-6`}
        >
          <div className="space-y-4 items-center justify-center flex flex-col text-center">
            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
              <i className="bi bi-gear text-2xl"></i>
              <h1 className="text-2xl">{t("servicesSection.badge")}</h1>
            </button>
            <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[600px] xl:w-[900px]">
              {t("servicesSection.description")}{" "}
            </p>
          </div>
          <ServicesCards/>
        </section>

        <section
          ref={portfolioRef}
          id="Porfolio"
          className={`pt-16 flex items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} transition-colors duration-500`}
        >
          <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center my-[20px] md:my-[70px] space-y-2 md:space-y-4 px-[20px] md:px-2 lg:px-3 2xl:px-0">
            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
              <img src="/logo/uil.png" className="w-[20px]" />
              <h1 className="text-2xl">{t("portfolioSection.badge")}</h1>
            </button>
            <h1 className="font-semibold text-[24px] md:text-4xl  text-center  w-[335px] md:w-[600px] xl:w-[900px]">
              {t("portfolioSection.title")}
            </h1>
            <p className=" text-center text-[16px] md:text-xl w-[335px] md:w-[700px]">
              {t("portfolioSection.description")}
            </p>
            {/* <Link to="/portfolio" className="rounded-[12px] bg-[#006DFF] hover:bg-white hover:border-2 hover:border-[#5492E4] hover:text-[#5492E4] text-white flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link> */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              <a
                href="https://logistx.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/LogistX.avif"
                      className="w-[591px] sm:w-[681px] md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
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

              <a
                href="https://bepulgps.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden ">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/BepulGPS.avif"
                      className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between items-center m-2">
                    <div className="flex flex-col items-start space-y-2">
                      <h1 className="font-bold text-2xl">
                        {t("portfolioSection.projects.1.title")}
                      </h1>
                      <p className="text-[#8D8D8D] text-base">
                        {t("portfolioSection.projects.1.body")}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                  </div>
                </div>
              </a>

              <a
                href="https://xmed.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden hidden lg:block">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/Xmed.avif"
                      className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between items-center m-2">
                    <div className="flex flex-col items-start space-y-2">
                      <h1 className="font-bold text-2xl">
                        {t("portfolioSection.projects.2.title")}
                      </h1>
                      <p className="text-[#8D8D8D] text-base">
                        {t("portfolioSection.projects.2.body")}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          ref={certificatesRef}
          id="Certificats"
          className="max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-3.5 md:space-y-5 my-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0"
        >
          <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px]  h-[50px] md:h-[55px] text-center justify-center items-center">
            <img src="/logo/phcertificate.png" className="w-[20px]" />
            <h1 className="text-2xl">{t("certificateSection.badge")}</h1>
          </button>
          <h1 className=" font-bold text-[24px] md:text-4xl text-center">
            {t("certificateSection.title")}
          </h1>
          <p className="text-center text-[16px] md:text-xl w-[295px] md:w-[690px] ">
            {t("certificateSection.description")}
          </p>
          <Carousel />
        </section>

        <section id="gallery" className="mt-20" ref={galleryRef}>
          <Gallery />
        </section>
      </main>
    </div>
  );
}

export default All;

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {certificates.map((card) => (
                            <div key={card.id}>
                                <div onClick={() => setOpenId(card.id)} className="cursor-pointer shadow-lg shadow-gray-300 px-7 py-8 rounded-3xl border border-[#0349A71A] w-[335px] h-[320px] xl:w-[415px] xl:h-[370px] hover:bg-[#F8FBFF]" >
                                    <div className="space-y-[20px] md:space-y-5">
                                        <div className="flex justify-between">
                                            <div className="bg-[#e0ecfb] w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] flex items-center justify-center rounded-xl">
                                                <img src={card.icon} className="w-[24px] h-[28px]" />
                                            </div>
                                            <div className="flex items-center justify-center rounded-full px-3 bg-[#006DFF] text-white text-sm w-[68px] xl:w-[67px] h-[28px] xl:h-[35px]">
                                                {t(card.badge)}
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-medium text-[20px] xl:text-[28px]">
                                                {t(card.title)}
                                            </h1>
                                            <p className="text-[16px] xl:text-lg text-[#8D8D8D]">
                                                {t(card.subtitle)}
                                            </p>
                                        </div>

                                        <p className="font-dmsans font-light italic text-[16px] xl:text-[22px]">
                                            {t(card.focus)}
                                        </p>

                                        <div className="flex gap-2.5">
                                            <img src="/logo/certificateSuccess.png" className="w-[24px] h-[24px] mt-0.5" />
                                            <p className="text-[#8D8D8D] text-[16px] xl:text-xl">{t(card.status)}</p>
                                        </div>
                                    </div>
                                </div>

                                {openId === card.id && (
                                    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="p-2 md:p-4 rounded-xl relative flex flex-col">
                                            <div className="flex justify-end items-end mb-2">

                                                <button onClick={() => setOpenId(null)} className="text-xl text-white hover:text-gray-500 border border-white hover:border-gray-500 py-0.5 rounded-full px-1.5 flex items-center justify-center" >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>

                                            <img
                                                src={card.modalImage}
                                                className="w-[300px] md:w-[800px] h-[200px] md:h-[600px] object-contain rounded-lg"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div> */
}
