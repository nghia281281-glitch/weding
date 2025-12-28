
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur rounded-lg shadow-sm border border-gold-200 min-w-[80px]">
      <span className="text-3xl font-serif text-amber-700">{value}</span>
      <span className="text-xs uppercase tracking-widest text-gray-500">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 justify-center py-10">
      <Item label="Ngày" value={timeLeft.days} />
      <Item label="Giờ" value={timeLeft.hours} />
      <Item label="Phút" value={timeLeft.minutes} />
      <Item label="Giây" value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
