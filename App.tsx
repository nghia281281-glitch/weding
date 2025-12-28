
import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import RSVPForm from './components/RSVPForm';
import { WEDDING_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfaf6] selection:bg-amber-100">
      {/* 1. Hero Section - The big announcement */}
      <Hero info={WEDDING_INFO} />

      {/* 2. Invitation Text & Countdown */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif italic text-xl text-gray-600 mb-8 leading-relaxed">
            "Trân trọng kính mời bạn đến dự buổi tiệc thân mật mừng lễ thành hôn của chúng mình."
          </p>
          <div className="w-12 h-px bg-amber-300 mx-auto mb-10"></div>
          <Countdown targetDate={WEDDING_INFO.date} />
        </div>
      </section>

      {/* 3. Details & Map - Clear information */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-gray-800 uppercase tracking-widest">Thời Gian & Địa Điểm</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-amber-700 font-bold uppercase text-xs tracking-[0.3em] mb-3">Lễ Thành Hôn</h3>
              <p className="text-2xl font-serif text-gray-800 mb-1">Thứ Bảy, ngày 25 tháng 10 năm 2025</p>
              <p className="text-gray-500 uppercase text-sm tracking-widest">Vào lúc 18:00 PM</p>
            </div>

            <div className="pt-4">
              <h3 className="text-amber-700 font-bold uppercase text-xs tracking-[0.3em] mb-3">Tại Nhà Hàng</h3>
              <p className="text-3xl font-cursive text-gray-800 mb-2">{WEDDING_INFO.venue}</p>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">{WEDDING_INFO.address}</p>
              
              <a 
                href={WEDDING_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-800 text-white rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-amber-900 transition-all shadow-xl shadow-amber-100"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Xem bản đồ Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RSVP Section - The only interactive part */}
      <section className="py-24 px-4">
        <div className="max-w-md mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl mb-4 text-gray-800">Xác Nhận Tham Dự</h2>
          <p className="text-gray-500 text-sm italic">Vui lòng phản hồi trước ngày 15/10 để chúng mình chuẩn bị chu đáo nhất.</p>
        </div>
        <RSVPForm />
      </section>

      {/* 5. Minimal Footer */}
      <footer className="py-20 text-center bg-gray-50 border-t border-gray-100">
        <p className="font-cursive text-4xl text-amber-800 mb-4">Trân trọng cảm ơn!</p>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-medium">Minh & Lan • Wedding Invitation</p>
      </footer>
    </div>
  );
};

export default App;
