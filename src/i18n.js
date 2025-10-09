// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: { about: 'About', albums: 'Albums', videos: 'Wedding Films', services: 'Services', testi: 'Testimonials', partners: 'Partners', press: 'Press', contact: 'Contact' },
      aboutTitle: 'About Us',
      aboutBody: 'We craft elegant, romantic and modern weddings — from concept to execution.',
      albumsTitle: 'Albums',
      videosTitle: 'Videos',
      servicesTitle: 'Services',
      testiTitle: 'Testimonials',
      partnersTitle: 'Partners',
      pressTitle: 'Press',
      contactTitle: 'Contact',
      contactSub: 'Leave your info. We will get back within 24–48 hours.',
    }
  },
  vi: {
    translation: {
      nav: { about: 'Giới thiệu', albums: 'Sản phẩm', videos: 'Wedding Films', services: 'Dịch vụ', testi: 'Lời khen', partners: 'Đối tác', press: 'Báo chí', contact: 'Liên hệ' },
      aboutTitle: 'Giới thiệu',
      aboutBody: 'Chúng tôi thiết kế & tổ chức đám cưới hiện đại, lãng mạn — từ ý tưởng đến vận hành.',
      albumsTitle: 'Albums',
      videosTitle: 'Videos',
      servicesTitle: 'Dịch vụ',
      testiTitle: 'Testimonials',
      partnersTitle: 'Partners',
      pressTitle: 'Báo chí',
      contactTitle: 'Liên hệ',
      contactSub: 'Điền thông tin, chúng tôi sẽ phản hồi trong 24–48 giờ.',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
