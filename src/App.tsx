import Fullpage from '@/fullpage/Fullpage'
import Navbar from '@/layout/Navbar'
import SectionTitle from '@/shared/SectionTitle'
import { AlbumsGrid } from '@/features/albums/components'
import { VideosGrid } from '@/features/videos'
import { ServicesColumns } from '@/features/services'
import { TestimonialsGrid } from '@/features/testimonials'
import { PartnersGrid } from '@/features/partners'
import ContactForm from '@/contact/ContactForm'
import { useTranslation } from 'react-i18next'
import ConnectFab from '@/contact/ConnectFab'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Fullpage
        overlay={<Navbar />}                 // ⬅️ Navbar nằm trong context nhưng không thành section
        duration={1500}
        easing="cubic-bezier(0.22, 0.61, 0.36, 1)"
      >
        {/* 0 – ABOUT */}
        <div className="px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>{t('aboutTitle')}</SectionTitle>
            <p className="text-lg text-gray-600">{t('aboutBody')}</p>
          </div>
        </div>

        {/* 1 – ALBUMS */}
        <div className="px-6 w-full">
          <div className="mx-auto w-full ">
            <SectionTitle>{t('albumsTitle')}</SectionTitle>
            <AlbumsGrid />
          </div>
        </div>

        {/* 2 – VIDEOS */}
        <div className="px-6 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <SectionTitle>{t('videosTitle')}</SectionTitle>
            <VideosGrid />
          </div>
        </div>

        {/* 3 – SERVICES */}
        <div className="px-6 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <SectionTitle>{t('servicesTitle')}</SectionTitle>
            <ServicesColumns />
          </div>
        </div>

        {/* 4 – TESTIMONIALS */}
        <div className="px-6 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <SectionTitle>{t('testiTitle')}</SectionTitle>
            <TestimonialsGrid />
          </div>
        </div>

        {/* 5 – PARTNERS */}
        <div className="px-6 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <SectionTitle>{t('partnersTitle')}</SectionTitle>
            <PartnersGrid />
          </div>
        </div>

        {/* 6 – CONTACT (nếu bạn đã bỏ “Báo chí”) */}
        <div className="px-6 w-full">
          <div className="max-w-3xl mx-auto w-full">
            <SectionTitle>{t('contactTitle')}</SectionTitle>
            <p className="text-center text-gray-600 mb-6">{t('contactSub')}</p>
            <ContactForm />
          </div>
        </div>
      </Fullpage>
      <ConnectFab />

      <footer className="py-5 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Wedding Planner
      </footer>
    </div>
  )
}
