export default function Hero() {
  return (
    <section className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-white/60" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900">
          Kế hoạch cho ngày <span className="text-blush-700">trọn vẹn</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Từ ý tưởng đến hiện thực – chúng tôi đồng hành để đám cưới của bạn
          thật tinh tế, lãng mạn và mang dấu ấn riêng.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-blush-600 px-6 py-3 text-white hover:bg-blush-700 transition-colors"
          >
            Bắt đầu liên hệ
          </a>
        </div>
      </div>
    </section>
  );
}
