export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-gray-900">
          Wedding<span className="text-blush-600">&</span>Us
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-blush-600 transition-colors">Trang chủ</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-blush-600 text-white hover:bg-blush-700 transition-colors">
            Contact
          </a>
        </nav>
        <a href="#contact" className="sm:hidden px-3 py-1.5 rounded-full bg-blush-600 text-white text-sm">Contact</a>
      </div>
    </header>
  );
}
