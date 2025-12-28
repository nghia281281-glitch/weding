
import React from 'react';
import { CoupleInfo } from '../types';

interface HeroProps {
  info: CoupleInfo;
}

const Hero: React.FC<HeroProps> = ({ info }) => {
  const weddingDate = new Date(info.date);
  
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://picsum.photos/id/111/1600/900')` }}
      />
      <div className="z-10 px-4 animate-fade-in space-y-8">
        <p className="text-amber-700 uppercase tracking-[0.6em] text-xs font-semibold">The Wedding Celebration</p>
        
        <div className="space-y-2">
          <h1 className="font-cursive text-7xl md:text-8xl text-gray-800 leading-tight">
            {info.groom}
          </h1>
          <p className="font-cursive text-5xl text-amber-500">&</p>
          <h1 className="font-cursive text-7xl md:text-8xl text-gray-800 leading-tight">
            {info.bride}
          </h1>
        </div>

        <div className="w-16 h-px bg-amber-200 mx-auto"></div>
        
        <p className="font-serif italic text-2xl text-gray-600">
          {weddingDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 bg-gray-400 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
