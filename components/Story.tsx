
import React from 'react';
import { HEART_SVG } from '../constants';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">{HEART_SVG}</div>
        <h2 className="font-serif text-4xl md:text-5xl mb-12">Câu Chuyện Của Chúng Mình</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-right">
            <h3 className="font-serif text-2xl mb-4 text-gray-800">Lần đầu gặp gỡ</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Vào một buổi chiều thu nhẹ nhàng, chúng mình vô tình chạm mặt nhau tại một quán cà phê nhỏ. Ánh mắt ấy đã khiến trái tim mình loạn nhịp ngay từ giây phút đầu tiên."
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl transform rotate-3">
            <img src="https://picsum.photos/id/64/600/400" alt="Meeting" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="rounded-2xl overflow-hidden shadow-xl transform -rotate-3">
            <img src="https://picsum.photos/id/82/600/400" alt="Engagement" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h3 className="font-serif text-2xl mb-4 text-gray-800">Lời cầu hôn ngọt ngào</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Dưới ánh hoàng hôn lãng mạn trên bãi biển, anh đã quỳ xuống và trao cho em chiếc nhẫn đính hôn. Đó là khoảnh khắc chúng mình biết rằng chúng mình thuộc về nhau mãi mãi."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
