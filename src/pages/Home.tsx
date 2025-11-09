import { useEffect } from "react";
import { useHeaderContext } from "@/layout/HeaderContext";
import { useTranslation } from "react-i18next";
import IconFacebook, { IconInstagram } from "@/components/icons/Icons";
import i18n from "@/i18n";
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

  return (
    <div className="container">
      {/* HERO SECTION WITH HEADER OVERLAY */}

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

      {/* WHY US */}
      <section className="px-10 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Why US?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          {[
            "Exclusive Property",
            "Virtual Tour",
            "0% Brokerage",
            "Constant Communication",
            "Online Booking",
          ].map((item, i) => (
            <div key={i} className="opacity-80 hover:opacity-100 transition">
              <div className="text-3xl mb-2">🌐</div>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE PROPERTIES */}
      <section className="px-10 mt-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Exclusive Properties</h2>
          <a href="#" className="text-sm underline">
            See All
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
            >
              <img
                src="https://images.unsplash.com/photo-1529421308410-c3451f5269b1?auto=format&fit=crop&w=900&q=60"
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4 text-white text-lg font-semibold">
                Passcode Big Life City
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-10 mt-24 mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          People love us!
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((i) => (
            <div key={i} className="border p-6 rounded-xl shadow-sm">
              <p className="italic opacity-75 mb-4">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                possimus asperiores ducimus quam ex magni.”
              </p>
              <div className="font-semibold">John Carter</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
