// src/components/Navbar.tsx
import { useTranslation } from 'react-i18next'

const items = [
  { id: 'about', key: 'nav.about' },
  { id: 'albums', key: 'nav.albums' },
  { id: 'videos', key: 'nav.videos' },
  { id: 'services', key: 'nav.services' },
  { id: 'testimonials', key: 'nav.testi' },
  { id: 'partners', key: 'nav.partners' },
  { id: 'press', key: 'nav.press' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <a href="#" onClick={(e)=>{e.preventDefault();go('about')}} className="text-xl font-semibold">Wedding Planner</a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map(it => (
            <button key={it.id} onClick={()=>go(it.id)} className="text-gray-700 hover:text-gray-900">
              {t(it.key)}
            </button>
          ))}
          <button onClick={()=>go('contact')} className="px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50">
            {t('nav.contact')}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={()=>i18n.changeLanguage('en')}
            className={`px-2 py-1 rounded ${i18n.language==='en'?'bg-gray-900 text-white':'text-gray-700 hover:bg-gray-100'}`}
          >EN</button>
          <button
            onClick={()=>i18n.changeLanguage('vi')}
            className={`px-2 py-1 rounded ${i18n.language==='vi'?'bg-gray-900 text-white':'text-gray-700 hover:bg-gray-100'}`}
          >VI</button>
        </div>
      </div>
    </header>
  )
}
