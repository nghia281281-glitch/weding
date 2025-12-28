
import React, { useState } from 'react';
import { generateWeddingPoem } from '../services/geminiService';
import { WEDDING_INFO } from '../constants';

const AIWishes: React.FC = () => {
  const [style, setStyle] = useState('lãng mạn');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateWeddingPoem(WEDDING_INFO.groom, WEDDING_INFO.bride, style);
    setPoem(result);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-4">Gửi Lời Chúc AI</h2>
        <p className="text-gray-600 mb-8">Hãy chọn phong cách và để trí tuệ nhân tạo viết tặng đôi bạn trẻ một bài thơ nhé!</p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['lãng mạn', 'hài hước', 'hiện đại', 'cổ điển'].map(s => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`px-4 py-2 rounded-full border transition-all ${
                style === s ? 'bg-amber-700 text-white border-amber-700' : 'bg-white text-amber-700 border-amber-200 hover:border-amber-700'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative mb-8">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-8 py-3 bg-white text-amber-700 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-amber-100 disabled:opacity-50"
          >
            {loading ? 'Đang viết...' : 'Tạo lời chúc bằng AI'}
          </button>
        </div>

        {poem && (
          <div className="p-8 bg-white/50 backdrop-blur rounded-2xl border-2 border-dashed border-amber-300 animate-fade-in">
            <pre className="font-serif italic text-xl text-gray-800 whitespace-pre-wrap leading-loose">
              {poem}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIWishes;
