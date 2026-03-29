import React from 'react';

export default function MovingText() {
  return (
    <section className="py-20 bg-dark overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-10 mr-10">
            <h3 className="text-[140px] font-bold text-white/5 leading-none flex items-center gap-10">
              SHOMOUKH INTERNATIONAL INVESTMENT
              <span className="text-primary text-8xl">✿</span>
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
