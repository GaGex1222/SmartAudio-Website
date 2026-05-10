"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Shield, Cpu, Wifi, Camera, Smartphone, Zap, 
  Phone, Award, ArrowLeft, MousePointer2, Menu, X
} from 'lucide-react';

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[5%] -right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/40 rounded-full blur-[80px] md:blur-[120px]" 
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[30%] -left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-50/50 rounded-full blur-[70px] md:blur-[100px]" 
    />
  </div>
);

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Heebo'] selection:bg-blue-600 selection:text-white overflow-x-hidden" dir="rtl">
      <AnimatedBackground />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-right" style={{ scaleX }} />

      {/* --- Navigation --- */}
      <nav className="fixed w-full z-[100] px-4 md:px-6 py-4">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="max-w-6xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/20 shadow-lg rounded-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Zap className="text-blue-600 fill-blue-600" size={18} />
            <span className="text-lg md:text-xl font-black tracking-tighter">SMART<span className="text-blue-600">AUDIO</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase">
            <a href="#services" className="hover:text-blue-600 transition-colors">שירותים</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">עלינו</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">צור קשר</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden xs:block bg-black text-white px-4 md:px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase">
              בואו נדבר
            </button>
            <button className="md:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4 font-bold text-center text-lg">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>שירותים</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>עלינו</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>צור קשר</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.95] tracking-tighter text-black mb-6 md:mb-8">
                SMART <br />
                <span className="text-blue-600">LIVING.</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-xl mb-8 md:mb-12 mx-auto lg:mr-0 lg:ml-auto">
                אנחנו לא רק מתקינים מערכות, אנחנו מעצבים חוויות של <span className="text-black font-bold">ביטחון, נוחות וסאונד.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:shadow-xl transition-all">
                  התחילו פרויקט
                </button>
                <div className="flex items-center gap-4 text-slate-400 font-bold">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-200 flex items-center justify-center">
                    <MousePointer2 size={18} />
                  </div>
                  <span className="text-sm">גללו למטה</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="/landing_page.png" 
                alt="Smart Home Tech" 
                className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl object-cover h-[350px] md:h-[500px] w-full"
              />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-4 md:-top-10 md:-left-10 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-slate-50"
              >
                <div className="text-2xl md:text-4xl font-black text-blue-600">100%</div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Digital Precision</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Services --- */}
      <section id="services" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">מה אנחנו <br /><span className="text-blue-600 text-5xl md:text-6xl italic">מתכננים?</span></h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-md">כל פתרון נבחר בקפידה כדי להעניק לכם שליטה מלאה על הסביבה שלכם.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <Camera />, title: "מצלמות אבטחה", color: "bg-blue-600" },
              { icon: <Wifi />, title: "רשתות תקשורת", color: "bg-black" },
              { icon: <Smartphone />, title: "בית חכם", color: "bg-blue-500" },
              { icon: <Zap />, title: "חשמל ואנרגיה", color: "bg-slate-900" },
              { icon: <Shield />, title: "מערכות אזעקה", color: "bg-blue-700" },
              { icon: <Cpu />, title: "אינטרקום ובקרה", color: "bg-slate-800" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all text-center md:text-right flex flex-col items-center md:items-start"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${service.color} text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">הפתרונות המתקדמים ביותר בעולם המותאמים אישית לצרכים שלכם.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Stats --- */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center relative overflow-hidden">
            {[
              { val: "500+", lab: "לקוחות מרוצים" },
              { val: "12", lab: "שנות ניסיון" },
              { val: "24/7", lab: "שירות ותמיכה" },
            ].map((stat, i) => (
              <div key={i} className="relative z-10">
                <div className="text-5xl md:text-7xl font-black text-white mb-1 md:mb-2">{stat.val}</div>
                <div className="text-blue-500 font-black tracking-widest text-xs md:text-sm uppercase">{stat.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Us --- */}
      <section id="about" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400" className="rounded-2xl md:rounded-[2rem] w-full h-32 md:h-48 object-cover" alt="Detail" />
              <div className="bg-blue-600 rounded-2xl md:rounded-[2rem] p-4 md:p-8 text-white flex flex-col justify-end">
                <Award size={30} className="mb-2 md:mb-4 mx-auto md:mr-0 md:ml-auto" />
                <div className="font-black text-sm md:text-xl leading-tight text-center md:text-right">איכות ללא פשרות</div>
              </div>
              <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600" className="col-span-2 rounded-[2rem] md:rounded-[3rem] w-full h-48 md:h-80 object-cover" alt="Installation" />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-black mb-8 md:mb-10 leading-tight">למה הלקוחות שלנו <br /><span className="text-blue-600 italic">ישנים בשקט?</span></h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { t: "שירות אישי ומקצועי", d: "אנחנו מלווים אתכם משלב השרטוטים ועד להדרכה על המערכת בסיום ההתקנה." },
                { t: "טכנולוגיה בחזית", d: "אנחנו משתמשים רק בציוד המתקדם ביותר בעולם, עם דגש על יציבות ושרידות." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 border-b border-slate-100 pb-6 md:pb-8">
                  <div className="text-3xl md:text-4xl font-black text-slate-100 italic">0{i+1}</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-sm md:text-base font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-white pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-4xl md:text-7xl lg:text-[90px] font-black tracking-tighter leading-none mb-8 md:mb-12 uppercase">
              LET'S BUILD <br />
              <span className="text-blue-600">TOGETHER.</span>
            </h2>
            <button className="w-full sm:w-auto bg-black text-white px-8 md:px-16 py-5 md:py-8 rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4 mx-auto">
              <Phone size={24} /> בואו נתחיל
            </button>
            <p className="mt-8 md:mt-12 text-slate-400 font-bold text-sm md:text-lg italic px-4 text-center">
              סמארטאודיו - פתרונות תקשורת, אבטחה וחשמל חכם
            </p>
          </div>
          
          <div className="py-8 border-t border-slate-100 mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-center text-slate-400 font-bold uppercase text-[10px] md:text-xs tracking-widest">
            <div>© 2026 SMART AUDIO DESIGN. ALL RIGHTS RESERVED</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600">INSTAGRAM</a>
              <a href="#" className="hover:text-blue-600">WHATSAPP</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;