import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeProvider";

const ServicesCards = () => {
  const { t } = useTranslation();
  const {darkMode} = useTheme();
  const cardsData = [
    {
      title: "Карточка 1",
      icon: "/logo/Group.png",
      description: t("servicesSection.cards.0.title"),
      cardText: t("servicesSection.cards.0.body"),
    },
    {
      title: "Карточка 2",
      icon: "/logo/hugeicons.png",
      description: t("servicesSection.cards.1.title"),
      cardText: t("servicesSection.cards.1.body"),
    },
    {
      title: "Карточка 3",
      icon: "/logo/material-symbols_computer-outline-rounded.png",
      description: t("servicesSection.cards.2.title"),
      cardText: t("servicesSection.cards.2.body"),
    },
    {
      title: "Карточка 4",
      icon: "/logo/file-c.png",
      description: t("servicesSection.cards.3.title"),
      cardText: t("servicesSection.cards.3.body"),
    },
    {
      title: "Карточка 5",
      icon: "/logo/system-code.png",
      description: t("servicesSection.cards.4.title"),
      cardText: t("servicesSection.cards.4.body"),
    },
    {
      title: "Карточка 6",
      icon: "/logo/outline.png",
      description: t("servicesSection.cards.5.title"),
      cardText: t("servicesSection.cards.5.body"),
    },
    {
      title: "Карточка 7",
      icon: "/logo/tabler.png",
      description: t("servicesSection.cards.6.title"),
      cardText: t("servicesSection.cards.6.body"),
    },
    {
      title: "Карточка 8",
      icon: "/logo/monitor-mobile.png",
      description: t("servicesSection.cards.7.title"),
      cardText: t("servicesSection.cards.7.body"),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`relative flex flex-col h-[175px] w-[345px] md:h-[285px] p-[16px] md:p-6 rounded-2xl border border-white space-y-1 ${!darkMode ? 'shadow-xl shadow-gray-200 hover:bg-[#F3F8FF] ' : 'text-white shadow-xl shadow-gray-700 hover:bg-gray-700'}`}
        >
          <div className="flex gap-4 items-center">
            <span className="flex items-center shrink-0 justify-center w-[60px] h-[60px] rounded-full bg-[#006DFF]">
              <img src={card.icon} className="w-[34px]" />
            </span>
            <div className=" font-semibold text-[20px]  text-[#1B2845] block lg:hidden">
              {card.description}
            </div>
          </div>
          <h1 className={`mt-2 font-semibold text-2xl text-[#1B2845] hidden lg:block ${darkMode ? 'text-white' : 'text-[#8D8D8D]'}`}>
            {card.description}
          </h1>
          {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"></div> */}
          <p className={`text-[16px] md:text-lg  ${darkMode ? 'text-white' : 'text-[#8D8D8D]'}`}>
            {" "}
            {card.cardText}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ServicesCards;
