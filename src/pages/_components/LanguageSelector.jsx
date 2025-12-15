import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import languages from "../../data/languages.json";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];
  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative w-fit">
      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-white hover:border hover:border-[#0349A7] rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all"
      >
        <img src={currentLang.flag} className="w-[15px] mr-1" />

        <span className="text-sm font-medium text-gray-700">
          {currentLang.label}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden z-50">
          {languages
            .filter((l) => l.code !== currentLang.code)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLang(lang.code)}
                className="flex gap-4 py-2 px-6 hover:bg-gray-50 transition-colors"
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-5" />

                <span className="text-sm font-medium text-gray-700">
                  {lang.name}
                </span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
