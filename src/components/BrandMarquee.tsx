import React from 'react';

export default function BrandMarquee() {
  const brands = [
    "OMAN VISION 2040",
    "SHOMOUKH",
    "STRATEGIC INVESTMENT",
    "FUTURE OF OMAN",
    "GLOBAL CONNECTIVITY",
    "SUSTAINABLE GROWTH"
  ];

  return (
    <section className="py-16 border-y border-white/10 bg-dark overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[1, 2, 3, 4].map((group) => (
          <div key={group} className="flex items-center">
            {brands.map((brand, i) => (
              <div key={i} className="mx-12 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-2xl md:text-4xl font-display font-bold text-white tracking-tighter uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
