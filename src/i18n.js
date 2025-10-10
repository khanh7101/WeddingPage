// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: { about: 'About', albums: 'Albums', videos: 'Wedding Films', services: 'Services', testi: 'Testimonials', partners: 'Partners', press: 'Press', contact: 'Contact' },
      aboutTitle: 'About Us',
      aboutBody: 'Elite Wedding Planner is an expert in designing, planning, and organizing weddings. Chosen by busy couples, Elite handles every aspect from selecting venues and partners to executing events with professionalism. Committed to respecting client opinions and optimizing costs, Elite ensures couples have a perfect wedding that meets all their expectations.', 
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
      aboutBody: 'Elite Wedding Planner là chuyên gia trong việc thiết kế, lập kế hoạch và tổ chức đám cưới. Elite được các cặp đôi bận rộn lựa chọn để điều hành mọi thủ tục từ việc chọn địa điểm, đối tác đến tổ chức sự kiện một cách chuyên nghiệp. Với cam kết tôn trọng ý kiến của khách hàng và tối ưu hóa chi phí, Elite cam kết mang đến cho các cặp đôi một đám cưới hoàn hảo, đáp ứng đầy đủ những mong đợi.',
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
