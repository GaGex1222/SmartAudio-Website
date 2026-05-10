"use client";



import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import {

  Shield, Cpu, Wifi, Camera, Smartphone, Zap,

  CheckCircle2, Phone, Award, ArrowLeft,

  Plus, Settings, Activity, Users, MousePointer2

} from 'lucide-react';



// קומפוננטת רקע יצירתית - עיגולים נעים

const AnimatedBackground = () => (

  <div className="fixed inset-0 -z-10 overflow-hidden">

    <motion.div

      animate={{

        scale: [1, 1.2, 1],

        x: [0, 100, 0],

        y: [0, 50, 0]

      }}

      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

      className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]"

    />

    <motion.div

      animate={{

        scale: [1, 1.5, 1],

        x: [0, -100, 0],

        y: [0, -50, 0]

      }}

      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}

      className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]"

    />

  </div>

);



const LandingPage = () => {

  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);



  return (

    <div className="min-h-screen bg-white text-[#0F172A] font-['Heebo'] selection:bg-blue-600 selection:text-white" dir="rtl">

      <AnimatedBackground />

     

      {/* Progress Bar */}

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-right" style={{ scaleX }} />



      {/* --- Navigation --- */}

      <nav className="fixed w-full z-[100] px-6 py-4">

        <motion.div

          initial={{ y: -100 }}

          animate={{ y: 0 }}

          className="max-w-6xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-8 h-16 flex items-center justify-between"

        >

          <div className="flex items-center gap-2">

            <Zap className="text-blue-600 fill-blue-600" size={20} />

            <span className="text-xl font-black tracking-tighter">SMART<span className="text-blue-600">AUDIO</span></span>

          </div>

         

          <div className="hidden md:flex gap-8 font-bold text-sm uppercase">

            <a href="#services" className="hover:text-blue-600 transition-colors">שירותים</a>

            <a href="#about" className="hover:text-blue-600 transition-colors">עלינו</a>

            <a href="#contact" className="hover:text-blue-600 transition-colors">צור קשר</a>

          </div>



          <motion.button

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: 0.95 }}

            className="bg-black text-white px-5 py-2 rounded-full text-xs font-black"

          >

            בואו נדבר

          </motion.button>

        </motion.div>

      </nav>



      {/* --- Hero Section: Creative Layout --- */}

      <section className="relative pt-40 pb-20 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">

         

          <div className="lg:col-span-7 z-10 text-right">

            <motion.div

              initial={{ opacity: 0, x: 50 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.8 }}

            >

              <h1 className="text-7xl lg:text-[120px] font-black leading-[0.9] tracking-tighter text-black mb-8">

                SMART <br />

                <span className="text-blue-600">LIVING.</span>

              </h1>

              <p className="text-2xl text-slate-500 font-medium max-w-xl mb-12">

                אנחנו לא רק מתקינים מערכות, אנחנו מעצבים חוויות של <span className="text-black font-bold">ביטחון, נוחות וסאונד.</span>

              </p>

              <div className="flex flex-wrap gap-6">

                <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all">

                  התחילו פרויקט

                </button>

                <div className="flex items-center gap-4 text-slate-400 font-bold">

                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center">

                    <MousePointer2 size={20} />

                  </div>

                  <span>גללו למטה</span>

                </div>

              </div>

            </motion.div>

          </div>



          <div className="lg:col-span-5 relative mt-12 lg:mt-0">

            <motion.div

              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}

              animate={{ opacity: 1, scale: 1, rotate: 0 }}

              transition={{ duration: 1, ease: "circOut" }}

              className="relative z-10"

            >

              <img

                src="./landing_page.png"

                alt="Smart Home Tech"

                className="rounded-[4rem] shadow-2xl transition-all duration-1000 object-cover h-[500px] w-full"

              />

              {/* Floating Badge */}

              <motion.div

                animate={{ y: [0, -20, 0] }}

                transition={{ duration: 4, repeat: Infinity }}

                className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100"

              >

                <div className="text-4xl font-black text-blue-600">100%</div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Digital Precision</div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* --- Services: The "Cloud" Layout --- */}

      <section id="services" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">

            <h2 className="text-5xl font-black tracking-tight font-[Heebo]">מה אנחנו <br /><span className="text-blue-600 text-6xl italic">מתכננים?</span></h2>

            <p className="text-xl text-slate-400 max-w-md">כל פתרון נבחר בקפידה כדי להעניק לכם שליטה מלאה על הסביבה שלכם.</p>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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

                whileHover={{ y: -15, scale: 1.02 }}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: i * 0.1 }}

                className="group relative bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all overflow-hidden"

              >

                <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-[15deg] transition-transform`}>

                  {service.icon}

                </div>

                <h3 className="text-2xl font-black mb-4">{service.title}</h3>

                <p className="text-slate-400 leading-relaxed font-medium">הפתרונות המתקדמים ביותר בעולם המותאמים אישית לצרכים שלכם.</p>

                <div className="mt-8 flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">

                  קרא עוד <ArrowLeft size={16} />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* --- Stats: High Energy --- */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-black rounded-[4rem] p-16 grid md:grid-cols-3 gap-12 text-center relative overflow-hidden">

            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">

                <div className="absolute top-[-50%] left-[-10%] w-[100%] h-[200%] bg-blue-600 rotate-12 blur-[120px]" />

            </div>

            {[

              { val: "500+", lab: "לקוחות מרוצים" },

              { val: "12", lab: "שנות ניסיון" },

              { val: "24/7", lab: "שירות ותמיכה" },

            ].map((stat, i) => (

              <motion.div

                key={i}

                whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}

                className="relative z-10"

              >

                <div className="text-7xl font-black text-white mb-2 font-[Heebo]">{stat.val}</div>

                <div className="text-blue-500 font-black tracking-widest text-sm uppercase">{stat.lab}</div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* --- Why Choose Us: Creative Overlap --- */}

      <section id="about" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <div className="relative">

              <motion.div

                whileInView={{ x: [-50, 0], opacity: [0, 1] }}

                className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"

              />

              <div className="relative space-y-4">

                <div className="grid grid-cols-2 gap-4">

                  <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400" className="rounded-[2rem] w-full h-48 object-cover" alt="Detail" />

                  <div className="bg-blue-600 rounded-[2rem] p-8 text-white flex flex-col justify-end">

                    <Award size={40} className="mb-4" />

                    <div className="font-black text-xl leading-tight text-right">איכות ללא פשרות</div>

                  </div>

                </div>

                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] w-full h-80 object-cover" alt="Installation" />

              </div>

            </div>



            <div>

              <h2 className="text-5xl font-black mb-10 leading-[1.1]">למה הלקוחות שלנו <br /><span className="text-blue-600 italic">ישנים בשקט?</span></h2>

              <div className="space-y-8">

                {[

                  { t: "שירות אישי ומקצועי", d: "אנחנו מלווים אתכם משלב השרטוטים ועד להדרכה על המערכת בסיום ההתקנה." },

                  { t: "טכנולוגיה בחזית", d: "אנחנו משתמשים רק בציוד המתקדם ביותר בעולם, עם דגש על יציבות ושרידות." },

                  { t: "אמינות מעל הכל", d: "זמינות מלאה לכל תקלה או שאלה. אנחנו כאן כדי לוודא שהכל עובד חלק." }

                ].map((item, i) => (

                  <motion.div

                    initial={{ opacity: 0, x: -30 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ delay: i * 0.2 }}

                    key={i}

                    className="flex gap-6 border-b border-slate-100 pb-8 hover:border-blue-600 transition-colors group"

                  >

                    <div className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors italic">0{i+1}</div>

                    <div>

                      <h4 className="text-2xl font-black mb-2">{item.t}</h4>

                      <p className="text-slate-500 font-medium">{item.d}</p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* --- Footer CTA: Massive Impact --- */}

      <footer id="contact" className="bg-white pt-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">

            <motion.div

              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}

              className="relative z-10"

            >

              <h2 className="text-6xl md:text-[100px] font-black tracking-tighter leading-none mb-12">

                LET'S BUILD <br />

                <span className="text-blue-600">TOGETHER.</span>

              </h2>

              <div className="flex flex-col md:flex-row justify-center gap-6">

                <button className="bg-black text-white px-16 py-8 rounded-3xl font-black text-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-4">

                  <Phone size={32} /> בואו נתחיל

                </button>

              </div>

              <p className="mt-12 text-slate-400 font-bold text-lg italic">סמארטאודיו - פתרונות תקשורת, אבטחה וחשמל חכם</p>

            </motion.div>

          </div>

         

          <div className="py-12 border-t border-slate-100 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">

            <div>© 2026 SMART AUDIO DESIGN. ALL RIGHTS RESERVED</div>

            <div className="flex gap-8">

              <a href="#" className="hover:text-blue-600 transition-colors">INSTAGRAM</a>

              <a href="#" className="hover:text-blue-600 transition-colors">FACEBOOK</a>

              <a href="#" className="hover:text-blue-600 transition-colors">WHATSAPP</a>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );

};



export default LandingPage;