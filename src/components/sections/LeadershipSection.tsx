import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { User } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

interface Member {
  name: string;
  position: string;
  photo: string | null;
  key: string;
  special?: boolean;
}

const ProfileCard = ({ member }: { member: Member }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative flex flex-col items-center bg-white p-[28px] rounded-[24px] border border-black/[0.05] transition-all duration-[0.35s] ease-in-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 ${
        member.special 
          ? 'scale-100 md:scale-[1.05] shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-accent/20' 
          : 'shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
      }`}
    >
      {/* Profile Image with soft glow shadow */}
      <div className={`relative w-[140px] h-[140px] rounded-full overflow-hidden mb-6 bg-neutral-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(var(--accent-rgb),0.25)] ${
        member.special ? 'ring-4 ring-accent/10 shadow-[0_12px_30px_rgba(0,0,0,0.15)]' : 'shadow-[0_12px_30px_rgba(0,0,0,0.12)]'
      }`}>
        {member.photo ? (
          <img 
            src={member.photo} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-[0.35s] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-neutral-50 flex items-center justify-center text-neutral-300">
            <User className="w-16 h-16 opacity-30" />
          </div>
        )}
        
        {/* Subtle glow overlay on hover */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      <div className="text-center">
        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1 leading-tight transition-colors duration-[0.35s] group-hover:text-accent">
          {member.name}
        </h3>
        <p className="text-[12px] font-semibold text-[#777] uppercase tracking-[1.5px]">
          {member.position}
        </p>
      </div>

      {/* Luxury highlight for chairman */}
      {member.special && (
        <div className="absolute inset-0 rounded-[24px] pointer-events-none border border-accent/5 group-hover:border-accent/20 transition-colors duration-300" />
      )}
    </motion.div>
  );
};

export const LeadershipSection = () => {
  const { t } = useTranslation();

  const chairman = {
    name: t("leadership.chairman.name"),
    position: t("leadership.chairman.title"),
    photo: "https://ges.om/assets/img/chirman.png",
    key: "chairman",
    special: true
  };

  const otherMembers = [
    {
      name: t("leadership.ceo.name"),
      position: t("leadership.ceo.title"),
      photo: "https://ges.om/assets/img/members/Jannat.jpg",
      key: "ceo"
    },
    {
      name: t("leadership.vp.name"),
      position: t("leadership.vp.title"),
      photo: "https://ges.om/assets/img/members/julanda.jpg",
      key: "vp"
    },
    {
      name: t("leadership.md1.name"),
      position: t("leadership.md1.title"),
      photo: null,
      key: "md1"
    },
    {
      name: t("leadership.md2.name"),
      position: t("leadership.md2.title"),
      photo: "https://ges.om/assets/img/members/jinan.jpg",
      key: "md2"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)' }}>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a] tracking-tight"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-[18px] text-[#666] max-w-2xl mx-auto leading-relaxed"
          >
            Meet the experienced leadership guiding Shomoukh International Investment.
          </motion.p>
        </motion.div>

        {/* Chairman - Centered and Larger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex justify-center mb-16 md:mb-20"
        >
          <div className="w-full max-w-[320px]">
            <ProfileCard member={chairman} />
          </div>
        </motion.div>

        {/* Other Leadership - Row layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {otherMembers.map((member, idx) => (
            <ProfileCard key={idx} member={member} />
          ))}
        </motion.div>
      </div>
      
      {/* Subtle decorative elements for luxury feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
};
