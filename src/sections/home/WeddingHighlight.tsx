import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./TabbedWeddingServices.css"; // Import CSS riêng cho pseudo-elements

// --- Định nghĩa Interface cho dữ liệu Tab ---
interface TabData {
  id: string;
  title: string;
  header: string;
  description: string;
  imageAlt: string;
  imagePlaceholderClass: string; // Class Tailwind
}

// --- Dữ liệu cho 4 tabs (KHÔNG TÁCH FILE) ---
const tabsData: TabData[] = [
  {
    id: "outdoor",
    title: "Tiệc Ngoài Trời",
    header: "🌴 TIỆC CƯỚI NGOÀI TRỜI",
    description:
      "Là lựa chọn lý tưởng cho những cặp đôi yêu thích không gian lãng mạn và gần gũi với thiên nhiên. Elite Planner sẽ giúp bạn lên kế hoạch chi tiết, đảm bảo không gian đẹp mắt, tiện nghi và có phương án dự phòng hoàn hảo trước mọi yếu tố thời tiết.",
    imageAlt: "Cặp đôi trong tiệc cưới ngoài trời lãng mạn",
    imagePlaceholderClass: "bg-green-100/50",
  },
  {
    id: "indoor",
    title: "Tiệc Trong Nhà",
    header: "🥂 TIỆC CƯỚI TRONG NHÀ",
    description:
      "Phù hợp với mọi phong cách từ cổ điển đến hiện đại, tiệc cưới trong nhà mang lại sự sang trọng và thoải mái bất kể thời tiết. Elite Planner sẽ hỗ trợ bạn lựa chọn địa điểm phù hợp, thiết kế không gian ấn tượng, đồng thời quản lý mọi khâu tổ chức để ngày cưới diễn ra suôn sẻ.",
    imageAlt: "Tiệc cưới trong nhà sang trọng",
    imagePlaceholderClass: "bg-red-100/50",
  },
  {
    id: "engagement",
    title: "Lễ Ăn Hỏi/Đón Dâu",
    header: "🏮 LỄ ĂN HỎI VÀ ĐÓN DÂU",
    description:
      "Là nghi thức quan trọng trong phong tục cưới hỏi của người Việt. Wedding Planner sẽ giúp bạn lên ý tưởng trang trí, sắp xếp lễ vật và điều phối buổi lễ để đảm bảo mọi nghi thức diễn ra đúng truyền thống nhưng vẫn tinh tế và hiện đại.",
    imageAlt: "Cặp đôi trong lễ ăn hỏi truyền thống",
    imagePlaceholderClass: "bg-yellow-100/50",
  },
  {
    id: "mass",
    title: "Lễ Nhà Thờ",
    header: "🕊️ LỄ NHÀ THỜ",
    description:
      "Với các cặp đôi theo đạo, lễ cưới tại nhà thờ là khoảnh khắc thiêng liêng, mang ý nghĩa gắn kết bền chặt trước Chúa. Elite Planner sẽ hỗ trợ chuẩn bị từ trang trí không gian, sắp xếp trình tự nghi thức đến điều phối thời gian, giúp cặp đôi có một buổi lễ trang trọng, ý nghĩa và trọn vẹn.",
    imageAlt: "Lễ cưới tại nhà thờ",
    imagePlaceholderClass: "bg-blue-100/50",
  },
];

// --- Định nghĩa kiểu cho style của indicator ---
interface IndicatorStyle {
  width: string;
  transform: string;
  left: string;
}

const WeddingHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle | null>(
    null
  );

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  const activeContent: TabData | undefined = tabsData.find(
    (tab) => tab.id === activeTab
  );

  // Tính toán vị trí mũi tên nhọn (caret) VÀ thanh indicator
  // useLayoutEffect để đo trước khi browser paint -> tránh vị trí sai/lần render nhấp nháy
  useLayoutEffect(() => {
    const update = () => {
      const activeIndex = tabsData.findIndex((tab) => tab.id === activeTab);
      if (activeIndex === -1) return;

      const activeTabElement = tabRefs.current[activeIndex];
      const navContainer = navRef.current;

      if (!activeTabElement || !navContainer) return;

      const containerRect = navContainer.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();

      // 1. Tính toán vị trí Caret (cho Speech Bubble) -> relative to container
      const centerPosition =
        (tabRect.left + tabRect.right) / 2 - containerRect.left;
      setCaretPosition(centerPosition);

      // 2. Tính toán vị trí và chiều rộng cho Sliding Indicator
      setIndicatorStyle({
        width: `${tabRect.width}px`,
        transform: `translateX(${tabRect.left - containerRect.left}px)`,
        left: "0px",
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab]);

  // Định nghĩa màu sắc chủ đạo
  //   const primaryBg = 'bg-pink-600';
  const primaryHover = "hover:bg-pink-100";

  return (
    <div className=" mx-auto  p-6 rounded-xl font-sans">
      {/* 1. Thanh Điều Hướng (Tab Navigation) */}
      <div
        ref={navRef}
        className="relative flex justify-center p-2 mx-auto rounded-lg bg-second items-center"
        role="tablist"
      >
        {/* Thanh Indicator chạy qua */}
        {indicatorStyle && (
          <div
            className={`tab-indicator absolute h-4/5 rounded-lg transition-all duration-300 ease-in-out bg-primary shadow-md top-1/2 -translate-y-1/2`}
            style={{
              width: indicatorStyle.width,
              transform: indicatorStyle.transform,
              left: indicatorStyle.left, // <-- đảm bảo left = 0 để transform dịch từ cạnh trái container
              top: "5px",
              zIndex: 0,
            }}
          ></div>
        )}

        {tabsData.map((tab: TabData, index: number) => (
          <button
            key={tab.id}
            ref={(el: HTMLButtonElement | null) => {
              tabRefs.current[index] = el;
            }}
            className={`
              relative px-5 py-2 mx-1 text-base font-medium transition-all duration-300 rounded-lg z-10 
              ${
                activeTab === tab.id
                  ? `text-gray-700`
                  : `text-white ${primaryHover} hover:bg-transparent`
              }
            `}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            id={`tab-${tab.id}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* 2. Khu vực Nội dung (Speech Bubble Content) */}
      <div className="mt-4">
        {activeContent && (
          <div
            id={`panel-${activeContent.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeContent.id}`}
            // Lớp CSS `tab-speech-bubble` và `animate-fadeIn` được định nghĩa trong file CSS
            className="tab-speech-bubble relative bg-white p-6 border-2 border-gray-100 rounded-xl shadow-xl animate-fadeIn"
            style={
              { "--caret-pos": `${caretPosition}px` } as React.CSSProperties
            }
          >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-3`}>
                  {activeContent.header}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {activeContent.description}
                </p>
              </div>

              <div
                className={`flex-1 min-h-64 w-full md:w-auto rounded-lg shadow-md bg-cover bg-center ${activeContent.imagePlaceholderClass}`}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingHighlights;
