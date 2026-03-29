import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Blog() {
  const posts = [
    {
      date: "25 Mar 2026",
      day: "25",
      monthYear: "Mar 2026",
      title: "Oman Vision 2040: A Strategic Roadmap for Sustainable Growth.",
      image: "https://images.unsplash.com/photo-1548611145-383792f58039?q=80&w=2070&auto=format&fit=crop"
    },
    {
      date: "10 Feb 2026",
      day: "10",
      monthYear: "Feb 2026",
      title: "Shomoukh Announces New Strategic Partnership in Renewable Energy.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
    },
    {
      date: "15 Jan 2026",
      day: "15",
      monthYear: "Jan 2026",
      title: "The Sultanate of Oman: A Premier Global Investment Hub.",
      image: "https://images.unsplash.com/photo-1512100356956-c1227c3317bb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      date: "05 Dec 2025",
      day: "05",
      monthYear: "Dec 2025",
      title: "Driving Innovation: Shomoukh's Role in Oman's Digital Transformation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-28 bg-dark text-white overflow-hidden">
      <div className="as-container-2">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.3fr_auto] items-start gap-10 mb-12">
          <div className="as-subtitle-2">Blog & News</div>
          <div className="max-w-[640px]">
            <h2 className="as-sec-title-2 mb-6 uppercase">
              Stay Informed with Shomoukh Insights.
            </h2>
            <p className="text-text-p1">
              Shomoukh International Investment shares insights, trends, and strategies, helping investors stay updated on the latest developments in Oman and global markets.
            </p>
          </div>
          <div className="pt-8">
            <a href="#" className="as-pr-btn-2 bg-dark-card hover:bg-primary transition-all">
              <span className="icon">
                <ArrowRight size={20} />
              </span>
              <span className="text">View All News</span>
            </a>
          </div>
        </div>

        <div className="max-w-[1280px] ml-auto">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {posts.map((post, i) => (
              <SwiperSlide key={i}>
                <div className="group cursor-pointer">
                  <div className="h-[304px] rounded-xl overflow-hidden mb-8 relative">
                    <img 
                      src={post.image} 
                      alt="" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex gap-10">
                    <div className="flex flex-col shrink-0">
                      <span className="text-4xl font-display font-semibold leading-none">{post.day}</span>
                      <span className="text-sm text-text-p1 mt-2">{post.monthYear}</span>
                    </div>
                    <div className="space-y-4 flex-grow">
                      <h4 className="text-2xl font-display font-semibold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <a href="#" className="flex items-center justify-between py-3 border-b border-white/10 text-text-p1 hover:text-primary transition-all relative group/btn">
                        Read More
                        <ArrowRight size={18} />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
