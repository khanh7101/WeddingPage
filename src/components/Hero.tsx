export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-white">MHS Planner</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white/90 text-gray-300">Giới thiệu</a>
          <a href="#albums" className="hover:text-white/90 text-gray-300">Sản phẩm</a>
          <a href="#videos" className="hover:text-white/90 text-gray-300">Wedding Films</a>
          <a href="#services" className="hover:text-white/90 text-gray-300">Dịch vụ</a>
          <a href="#testimonials" className="hover:text-white/90 text-gray-300">Lời khen</a>
          <a href="#partners" className="hover:text-white/90 text-gray-300">Đối tác</a>
          <a href="#press" className="hover:text-white/90 text-gray-300">Báo chí</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md border border-white/30 text-white">Liên hệ</a>
        </nav>
        <a href="#contact" className="md:hidden px-3 py-1.5 rounded-md border border-white/30 text-white">Liên hệ</a>
      </div>
    </header>
  )
}
