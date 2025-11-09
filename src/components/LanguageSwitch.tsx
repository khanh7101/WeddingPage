import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggle = () => {
    i18n.changeLanguage(isEnglish ? "vi" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="
        relative flex items-center w-[70px] h-[36px] rounded-full
        bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-white/40
        hover:bg-[rgba(255,255,255,0.35)]
        transition-all duration-300
      "
    >
      {/* Nút trượt */}
      <div
        className={`
          absolute top-0.4 left-1 w-[28px] h-[28px] rounded-full
          bg-white shadow-md transform transition-all duration-300
          ${isEnglish ? "translate-x-[32px]" : "translate-x-0"}
        `}
      />

      {/* Label VI */}
      <span className="absolute left-3 text-[12px] font-semibold transition-opacity opacity-100">
        VI
      </span>

      {/* Label EN */}
      <span className="absolute right-2.5 text-[12px] font-semibold transition-opacity opacity-100">
        EN
      </span>
    </button>
  );
}
