import { useContext } from 'react'
import { FullpageContext } from '@/fullpage/Fullpage'
import { useTranslation } from 'react-i18next'

const NAV = [
  { i: 0, key: 'nav.about' },
  { i: 1, key: 'nav.albums' },
  { i: 2, key: 'nav.videos' },
  { i: 3, key: 'nav.services' },
  { i: 4, key: 'nav.testi' },
  { i: 5, key: 'nav.partners' },
  // nếu bỏ "Báo chí" thì đừng thêm mục press ở đây
  { i: 6, key: 'nav.contact' }, // chú ý index khớp với App.tsx
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const fp = useContext(FullpageContext)

  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <button onClick={() => fp?.goTo(0)} className="text-xl font-semibold">
          Wedding Planner
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map(item => (
            <button
              key={item.i}
              onClick={() => fp?.goTo(item.i)}
              className={`transition-colors ${
                fp?.index === item.i ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage('vi')}
            className={`px-2 py-1 rounded ${i18n.language === 'vi' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            VI
          </button>
        </div>
      </div>
    </header>
  )
}
