import { useState } from 'react'

// Thêm SOCIAL trực tiếp trong file để luôn có sẵn
const SOCIAL = {
  zalo: 'https://zalo.me/0123456789',
  messenger: 'https://m.me/yourpage',
  phone: 'tel:+84123456789'
}

function Btn({ href, label, bg, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center ${bg}`}
    >
      {children}
    </a>
  )
}

export default function ConnectFab() {         
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed left-3 bottom-3 z-50 flex flex-col items-center gap-3">
      {/* nhóm nút */}
      <div className={`flex flex-col items-center gap-3 transition-all ${open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-3'}`}>
        <Btn href={SOCIAL.zalo} label="Zalo" bg="bg-[#0068FF] text-white">
          <span className="text-sm font-bold">Za</span>
        </Btn>
        <Btn href={SOCIAL.messenger} label="Messenger" bg="bg-[#00B2FF] text-white">
          {/* biểu tượng chat đơn giản */}
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6 2 11.33c0 2.78 1.38 5.27 3.62 6.93V22l3.3-1.81c.98.27 2.02.41 3.08.41 5.52 0 10-4 10-9.27C22 6 17.52 2 12 2Z"/></svg>
        </Btn>
        <Btn href={SOCIAL.phone} label="Gọi điện" bg="bg-[#FF7A00] text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C11.85 21 3 12.15 3 1a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
        </Btn>
      </div>
      {/* nút toggle */}
      <button
        aria-label={open ? 'Đóng liên hệ' : 'Mở liên hệ'}
        onClick={() => setOpen(v => !v)}
        className="w-11 h-11 rounded-full bg-white/90 border border-gray-300 shadow-lg flex items-center justify-center"
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700">
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
          </svg>
        )}
      </button>
    </div>
  )
}
