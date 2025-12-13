import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BOT_TOKEN = "8565375529:AAGecSewxKBWrMBUYWwxEukIEuCch7Px5fw";
const CHAT_ID = "-1003257673634";

function Layout() {
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  const { t } = useTranslation();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const certificatesRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  отправка к телеграму
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const message = e.target.message.value;
    const file = e.target.file.files[0];

    const text = `
       📩 *Yangi xabar!*
       👤 *Ism:* ${name}
       📧 *Email:* ${email}
       🏢 *Kompaniya:* ${company}
       💬 *Xabar:* ${message}
        `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (file) {
        const formData = new FormData();
        formData.append("chat_id", CHAT_ID);
        formData.append("document", file);

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
          method: "POST",
          body: formData,
        });
      }

      alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
      e.target.reset();
    } catch (error) {
      console.error("Xatolik:", error);
      alert("❌ Xabar yuborishda xatolik yuz berdi!");
    }
  };

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (ref) => {
    setOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  // footer
  const faqs = [
    {
      question: t("faq.item1.question"),
      answers: [
        { text: t("faq.item1.home"), ref: homeRef },
        { text: t("faq.item1.about"), ref: aboutRef },
        { text: t("faq.item1.services"), link: "/dashboard" },
        { text: t("faq.item1.portfolio"), link: "/dashboard" },
        { text: t("faq.item1.certificates"), ref: certificatesRef },
        { text: t("faq.item1.contact"), ref: contactRef },
      ],
    },
    {
      question: t("faq.item2.question"),
      answers: [
        { text: t("faq.item2.software"), link: "/home" },
        { text: t("faq.item2.1cProduction"), link: "/register" },
        { text: t("faq.item2.bitrix"), link: "/dashboard" },
        { text: t("faq.item2.antivirus"), link: "/dashboard" },
        { text: t("faq.item2.automation"), link: "/dashboard" },
        { text: t("faq.item2.biometric"), link: "/dashboard" },
        { text: t("faq.item2.itservices"), link: "/dashboard" },
      ],
    },
    // {
    //     question: t("faq.item3.question"),
    //     answers: [
    //         { text: t("faq.item3.address") },
    //         { text: t("faq.item3.phone") },
    //         { text: t("faq.item3.email") },
    //     ]
    // }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  px-[20px] md:px-0  ${
          scrolled ? "bg-black/20 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-3 2xl:px-0">
          <Link to="/">
            <img
              src="/logo/tenzorsoft-logo.png"
              alt="logo"
              className="w-[94px] h-[60px] cursor-pointer"
              onClick={handleLogoClick}
            />
          </Link>
          <div className="flex gap-[58px] items-center">
            <div className="flex md:gap-[40px] xl:gap-[56px] text-white items-center hidden lg:flex">
              {[
                { label: t("navbar.home"), ref: homeRef },
                { label: t("navbar.about"), ref: aboutRef },
                { label: t("navbar.services"), ref: servicesRef },
                { label: t("navbar.portfolio"), ref: portfolioRef },
                { label: t("navbar.certificates"), ref: certificatesRef },
                { label: t("navbar.contact"), ref: contactRef },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="relative text-[18px] cursor-pointer px-1after:content-[''] after:block after:h-[2px] after:w-full after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-6 items-center">
              <LanguageSelector />
              <div className=" lg:hidden flex gap-[30px] justify-center items-center ">
                <button
                  className="text-white text-[24px]  "
                  onClick={() => setOpen(!open)}
                >
                  {open ? "X" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-black/60 backdrop-blur-lg text-white text-[18px] px-4 py-4 space-y-4 rounded-xl mx-2">
            <button onClick={() => scrollTo(homeRef)} className="block">
              {t("navbar.home")}
            </button>
            <button onClick={() => scrollTo(aboutRef)} className="block">
              {t("navbar.about")}
            </button>
            <button onClick={() => scrollTo(servicesRef)} className="block">
              {t("navbar.services")}
            </button>
            <button onClick={() => scrollTo(portfolioRef)} className="block">
              {t("navbar.portfolio")}
            </button>
            <button onClick={() => scrollTo(certificatesRef)} className="block">
              {t("navbar.certificates")}
            </button>
            <button onClick={() => scrollTo(contactRef)} className="block">
              {t("navbar.contact")}
            </button>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet
          context={{
            homeRef,
            aboutRef,
            contactRef,
            certificatesRef,
            servicesRef,
            portfolioRef,
          }}
        />
      </main>

      {/* Contact section  */}
      <section
        ref={contactRef}
        id="Contact"
        className="bg-[#F2F2F2] h-full flex flex-col justify-center items-center"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 xl:flex-row items-start justify-start md:justify-between md:w-full py-8 px-[4px] space-y-[20px] xl:space-y-0">
          <div className="w-full flex flex-col justify-between mt-2 gap-6 p-4">
            <div className="space-y-2 md:space-y-4 items-center justify-center flex flex-col text-center">
              <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[184px] md:w-[202px] h-[50px] md:h-[55px] text-center justify-center items-center">
                <img src="/logo/contact.png" className="w-[20px]" />
                <h1 className="text-2xl">{t("contactSection.badge")}</h1>
              </button>
              <h1 className="font-semibold text-[24px] md:text-4xl">
                {t("contactSection.title")}
              </h1>
              <p className="text-[16px] md:text-xl ">
                {t("contactSection.description")}
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-start justify-start mt-4">
              <div
                className="bg-white w-full rounded-[24px] flex justify-start items-center px-4"
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/search/Tashkent+city+Mirabad+district+st.+Sarbon+32A/@41.3260143,69.254832,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  );
                }}
              >
                <img src="/logo/location.svg" className="w-[32px]" />
                <p className="text-[#8D8D8D] font-medium text-[16px] md:text-[20px] p-4 cursor-pointer">
                  Tashkent city Mirabad district st. Sarbon 32A{" "}
                </p>
              </div>
              <div
                className="bg-white w-full rounded-[24px] flex justify-start items-center px-4"
                onClick={() => (window.location.href = "tel:+998954601010")}
              >
                <img src="/logo/phone.svg" className="w-[32px]" />
                <p className="text-[#8D8D8D] font-medium text-[16px] md:text-[20px] p-4 cursor-pointer">
                  +998 95 460 10 10
                </p>
              </div>
              <div
                className="bg-white w-full rounded-[24px] flex justify-start items-center px-4"
                onClick={() => (window.location.href = "tenzorsoft@gmail.com")}
              >
                <img src="/logo/email.svg" className="w-[32px]" />
                <p className="text-[#8D8D8D] font-medium text-[16px] md:text-[20px] p-4 cursor-pointer">
                  tenzorsoft.com
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:rounded-3xl p-[15px] md:p-[36px] shadow-2xl shadow-gray-200 bg-white space-y-6"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div className=" w-full">
                <label className="block text-xl mb-2" htmlFor="name">
                  {t("contactSection.form.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contactSection.form.namePlaceholder")}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="w-full">
                <label className="block text-xl mb-2" htmlFor="email">
                  {t("contactSection.form.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xl mb-2" htmlFor="phoneNumber">
                {t("contactSection.form.PhoneNumberLabel")}
              </label>

              <div
                className="flex rounded-lg border border-gray-300
               focus-within:border-blue-500
               focus-within:ring-2 focus-within:ring-blue-500
               overflow-hidden"
              >
                {/* Country code */}
                <span
                  className="flex items-center pl-4 pr-1 select-none"
                >
                  +998
                </span>

                {/* Phone input */}
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="flex-1 px-4 pl-0 py-2
                 outline-none border-none
                 focus:ring-0"
                />
              </div>
            </div>

            <div>
              <label className="block text-xl mb-2" htmlFor="message">
                {t("contactSection.form.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contactSection.form.messagePlaceholder")}
                rows="4"
                required
                className="w-full h-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <input
                type="file"
                name="file"
                className="flex items-center display:none w-full h-[48px] px-4 py-3 border border-gray-300 rounded-lg "
              />
            </div>

            <button
              type="submit"
              className="w-full h-[50px] bg-[#006DFF] border-2 border-[#006DFF] hover:text-[#006DFF] text-white py-2 px-4 rounded-lg hover:bg-white transition-colors"
            >
              {t("contactSection.submit")}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[rgb(0,17,40)]  text-white">
        <div className="max-w-[1440px] mx-auto flex flex-col py-[70px] space-y-[80px]  px-[20px] md:px-4 lg:px-3 2xl:px-0">
          <div className="flex flex-col sm:flex-row sm:justify-between md:items-start gap-3 space-y-6">
            <div className="flex flex-col space-y-[20px] md:space-y-[40px]">
              <img
                src="/logo/tenzorsoft-logo.png"
                className="w-[94px] h-[60px]"
              />
              <p className="text-xl md:w-[270px] lg:w-[290px] xl:w-[341px]">
                {t("footer.tagline")}
              </p>

              <div className="flex gap-[17px]">
                <a
                  href="https://www.youtube.com/@TENZORSOFT-ITCOMPANY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                    <img src="/logo/Facebook.png" className="w-[10px]" />
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/tenzor_soft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                    <img src="/logo/instagram.png" className="w-[22px]" />
                  </button>
                </a>

                <a
                  href="https://t.me/tenzor_soft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                    <img src="/logo/telegram.png" className="w-[22px]" />
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/tenzor-soft-396297329/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                    <img src="/logo/linkedin.png" className="w-[22px]" />
                  </button>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex flex-col space-y-[16px] text-[#c8c8c8]">
              <h1 className="text-xl font-semibold text-white">
                {t("footer.columns.template.title")}
              </h1>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(homeRef)}
              >
                {t("footer.columns.template.home")}
              </a>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(aboutRef)}
              >
                {t("footer.columns.template.about")}
              </a>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(servicesRef)}
              >
                {t("footer.columns.template.services")}
              </a>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(portfolioRef)}
              >
                {t("footer.columns.template.portfolio")}
              </a>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(certificatesRef)}
              >
                {t("footer.columns.template.certificates")}
              </a>
              <a
                className="hover:text-white cursor-pointer"
                onClick={() => scrollToSection(contactRef)}
              >
                {t("footer.columns.template.contact")}
              </a>
            </div>

            <div className="hidden lg:flex flex-col space-y-[16px] text-[#c8c8c8]">
              <h1 className="text-xl font-semibold text-white">
                {t("footer.columns.services.title")}
              </h1>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.software")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.1cProduction")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.bitrix")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.antivirus")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.automation")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.biometric")}
              </a>
              <a href="" className="hover:text-white">
                {t("footer.columns.services.itservices")}
              </a>
            </div>

            <div className="space-y-3">
              {/* фак */}
              <div className="block lg:hidden w-full">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 shadow-sm"
                    >
                      <button
                        className="text-left px-1 py-3 flex justify-between items-center w-full  md:w-[420px]"
                        onClick={() => toggleIndex(index)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <span className="text-xl">
                          {openIndex === index ? (
                            <i className="bi bi-chevron-up"></i>
                          ) : (
                            <i className="bi bi-chevron-down"></i>
                          )}
                        </span>
                      </button>

                      {openIndex === index && (
                        <div className="px-4 pb-4 pt-2 space-y-2">
                          {faq.answers.map((ans, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigate(ans?.link || "/");
                                ans.ref?.current?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }}
                              className="flex flex-col text-white py-2 text-start"
                            >
                              {ans.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* сабскрай */}
              <div className="flex flex-col space-y-[16px] text-white">
                <h1 className="text-xl font-semibold text-white">
                  {t("footer.subscribeHeading")}
                </h1>
                <input
                  type="text"
                  id="name"
                  placeholder={t("footer.subscribePlaceholder")}
                  className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[48px] px-4 py-2 border border-[#8D8D8D] rounded-lg placeholder-white"
                />
                <button className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[52px] hover:bg-white hover:text-[#006DFF] bg-[#006DFF] hover:border-2 hover:border-[#006DFF] rounded-[12px] font-medium text-white text-lg">
                  {t("footer.subscribeCta")}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-[40px] text-[#c8c8c8]">
            <hr className="border-t border-[#8D8D8D80]" />
            <div className="flex flex-col justify-between md:flex-row space-y-4 md:space-y-0 text-center">
              <p className="">{t("footer.rights")}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
