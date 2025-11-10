import { useEffect, useState } from "react";
import { useHeaderContext } from "@/layout/HeaderContext";
import { useTranslation } from "react-i18next";
import IconFacebook, { IconInstagram } from "@/components/icons/Icons";
import i18n from "@/i18n";
import WeddingHighlight from "@/sections/home/WeddingHighlight";
import { AlbumCard } from "@/features/albums/components";
import { albumsData } from "@/data";
import AlbumModalFactory from "@/features/albums/components/AlbumModalFactory";
import ModalShell from "@/features/albums/components/ModalShell";
// import { homeByName, getImageUrl, customReviewByName } from "@/utils/assetMaps";
// import Button from "@/components/Button";

export default function Home() {
  const { t } = useTranslation("home");
  const { setHero } = useHeaderContext();

  const SOCIALS = [
    {
      href: "https://www.facebook.com/profile.php?id=100068433330947",
      Icon: IconFacebook,
      label: "Facebook",
      className: "text-white",
    },
    {
      href: "https://www.instagram.com/123",
      Icon: IconInstagram,
      label: "Instagram",
      className: "text-black rounded-full bg-white p-1",
    },
    // thêm TikTok, YouTube sau nếu cần
  ];

  // Đưa heroNode ra ngoài useEffect để tránh re-render không cần thiết
  const heroNode = (
    <>
      <div className="absolute left-6 md:left-12 top-[20%] text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] drop-shadow-xl">
          Elite Wedding <br /> Planner
        </h1>

        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          {t("hero.buttonText")}
        </button>
      </div>

      <div className="absolute bottom-5 left-6 md:left-12 flex items-center gap-6">
        {SOCIALS.map(({ href, Icon, label, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon size={33} className={className} />
          </a>
        ))}
      </div>
    </>
  );

  useEffect(() => {
    setHero(heroNode, "620px");
    return () => setHero(null);
  }, [setHero, i18n.language]);

  const [openId, setOpenId] = useState<number | null>(null);
  const active = albumsData.find((a) => a.id === openId) ?? null;

  return (
    <div className="container">
      {/* HERO SECTION WITH HEADER OVERLAY */}
      <div className="container-wide prose-content">
        {/* ABOUT US */}
        <section className=" mt-28 grid md:grid-cols-2 gap-14 items-center section">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
            <p className="opacity-75 mb-6">{t("about.description")}</p>
            <button className="px-5 py-2 border border-gray-800 rounded-lg hover:bg-black hover:text-white transition">
              {t("hero.buttonText")}
            </button>
          </div>

          <div className="">
            <img
              className="inset-0 w-full aspect-auto object-cover rounded-lg "
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500"
            />
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold "> HIGHLIGHTS</h2>
          <WeddingHighlight />
        </section>

        {/* GALLERY */}
        <section className="section text-center">
          <h2 className="text-3xl font-bold ">GALLERY</h2>
          <div className="mx-auto  px-6">
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-24">
              {albumsData.map((a) => (
                <AlbumCard key={a.id} item={a} onViewMore={setOpenId} />
              ))}
            </div>
          </div>

          {active && (
            <ModalShell onClose={() => setOpenId(null)} lockBody={true}>
              <AlbumModalFactory album={active} />
            </ModalShell>
          )}
        </section>
      </div>
    </div>
  );
}
