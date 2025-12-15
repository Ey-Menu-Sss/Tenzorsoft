import { useTheme } from "../../contexts/ThemeProvider";

export default function CompanyInfo () {
      const { darkMode } = useTheme();
  const data = [
    {
      href: "https://www.google.com/maps/search/Tashkent+city+Mirabad+district+st.+Sarbon+32A/@41.3260143,69.254832,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      img: "/logo/location.svg",
      text: "Tashkent city Mirabad district st. Sarbon 32A",
    },
    {
      href: "tel:+998954601010",
      img: "/logo/phone.svg",
      text: "+998 95 460 10 10",
    },
    {
      href: "https://info@tenzorsoft.com",
      img: "/logo/email.svg",
      text: "tenzorsoft.com",
    },
  ];
  return (
    <div className="space-y-4 flex flex-col items-start w-full">
      {data.map((h) => {
        return (
          <a
            key={h.text}
            href={h.href}
            target="_blank"
            className={`w-full rounded-3xl flex items-center gap-4 px-6 py-4 hover:shadow-md transition-shadow ${ darkMode ? 'bg-gray-300 text-black': 'bg-white text-[#8D8D8D]'}`}
          >
            <img src={h.img} className="w-8 h-8" />
            <p className="font-medium text-sm md:text-lg">
              {h.text}
            </p>
          </a>
        );
      })} 
    </div>
  );
};