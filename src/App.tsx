// src/App.tsx
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import SectionTitle from './components/SectionTitle'
import AlbumsGrid from './components/AlbumsGrid'
import VideosGrid from './components/VideosGrid'
import ServicesColumns from './components/ServicesColumns'
import TestimonialsGrid from './components/TestimonialsGrid'
import PartnersGrid from './components/PartnersGrid'
import PressList from './components/PressList'
import ContactForm from './components/ContactForm'

export default function App() {
  const { t } = useTranslation()

  // đảm bảo body không cuộn, chỉ container cuộn
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Scroll-snap container */}
      <main id="page" className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* ABOUT */}
        <section id="about" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <SectionTitle>{t('aboutTitle')}</SectionTitle>
            <p className="text-lg text-gray-600">{t('aboutBody')}</p>
          </div>
        </section>

        {/* ALBUMS */}
        <section id="albums" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('albumsTitle')}</SectionTitle>
            <AlbumsGrid />
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('videosTitle')}</SectionTitle>
            <VideosGrid />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('servicesTitle')}</SectionTitle>
            <ServicesColumns />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('testiTitle')}</SectionTitle>
            <TestimonialsGrid />
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('partnersTitle')}</SectionTitle>
            <PartnersGrid />
          </div>
        </section>

        {/* PRESS */}
        <section id="press" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full">
            <SectionTitle>{t('pressTitle')}</SectionTitle>
            <PressList />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="snap-always snap-center min-h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl w-full">
            <SectionTitle>{t('contactTitle')}</SectionTitle>
            <p className="text-center text-gray-600 mb-6">{t('contactSub')}</p>
            <ContactForm /> {/* nền trắng, giữ mặc định */}
          </div>
        </section>
      </main>

      <footer className="py-5 text-center text-sm text-gray-500 border-t">© {new Date().getFullYear()} Wedding Planner</footer>
    </div>
  )
}
