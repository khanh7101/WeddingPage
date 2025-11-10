import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { headerMap } from "@/data/headerMap";
import { useHeaderContext } from "./HeaderContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const bg = headerMap[location.pathname];

  // get hero provided by current page
  const { hero, heroHeight } = useHeaderContext();

  // cập nhật CSS variable --header-height để main có thể đệm chính xác
  useEffect(() => {
    const height = bg ? "620px" : "64px";
    document.documentElement.style.setProperty("--header-height", height);
    return () => {
      // reset nếu component unmount
      document.documentElement.style.removeProperty("--header-height");
    };
  }, [bg]);

  /* ===========================================
   Types & Constants
   =========================================== */
  type Child = { to: string; key: string };
  type NavItem =
    | { to: string; key: string; children?: undefined }
    | { to: string; key: string; children: Child[] };

  const NAV: NavItem[] = [
    { to: "/", key: "header.nav.home" },
    { to: "/about", key: "header.nav.about" },
    { to: "/gallery", key: "header.nav.gallery" },
    { to: "/service", key: "header.nav.service" },
    { to: "/review", key: "header.nav.review" },
    { to: "/partner", key: "header.nav.partner" },
  ];

  return (
    <div
      className={`relative full-bleed overflow-hidden ${
        bg ? "h-[620px]" : "h-16"
      }`}
      aria-label="site header"
    >
      {/* Background Image */}
      {bg && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {bg && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 pointer-events-none" />
      )}

      {/* STICKY NAVBAR */}
      <nav
        className={`sticky top-0 z-50 flex h-16 items-center justify-between px-6 md:px-12 backdrop-blur-sm transition-colors
        ${
          bg ? "text-white bg-transparent" : "text-black bg-white/60 shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="text-xl font-semibold tracking-tight">ApexEstate</div>

        {/* Nav items */}
        <ul className="hidden lg:flex items-center text-center gap-2 xl:gap-8 text-base">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-2 py-1 transition duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white hover:opacity-90"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitch />
          <NavLink
            to="/contact"
            className={`px-4 py-2 rounded-lg text-sm transition w-28 text-center ${
              bg
                ? "border border-white hover:bg-white hover:text-black"
                : "border border-gray-300 bg-white text-black hover:bg-gray-100"
            }`}
          >
            {t("header.nav.contact")}
          </NavLink>
        </div>
      </nav>

      {/* render HERO supplied by page (positioned relative to header) */}
      {hero && (
        <div className="absolute inset-0 z-30 pointer-events-auto">{hero}</div>
      )}
    </div>
  );
}
