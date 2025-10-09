import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <section id="contact" className="py-20 bg-blush-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-gray-900">
              Liên hệ lên kế hoạch đám cưới
            </h2>
            <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
              Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Wedding Planner. All rights reserved.
      </footer>
    </div>
  );
}
