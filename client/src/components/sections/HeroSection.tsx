import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HERO_IMAGE, EmberParticles, SmokeParticles } from "./shared";

/* Animated counter hook */
function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });
  const stat1 = useCountUp(100, statsInView);
  const stat2 = useCountUp(50, statsInView);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#141210" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="قهوة محمصة" className="w-full h-full object-cover" style={{ opacity: 0.4 }} loading="eager" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,18,16,0.92) 30%, rgba(20,18,16,0.6) 70%, rgba(20,18,16,0.85) 100%)" }} />
      </div>

      <SmokeParticles count={5} />
      <EmberParticles count={10} />

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(194,120,79,0.12)", border: "1px solid rgba(194,120,79,0.35)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#C2784F" }} />
            <span className="text-xs font-medium tracking-widest" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              تقديم اجود انواع القهوة
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9", lineHeight: "1.1" }}
          >
            قهوة{" "}
            <span className="text-copper-gradient">محمصة</span>
            <br />
            بالجمر
            <br />
            والحرفية
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg"
            style={{ color: "rgba(242,239,233,0.65)", fontFamily: "Noto Naskh Arabic" }}
          >
            نحمص حبوب البن بعناية فائقة ثم نعالجها بالتدخين البارد باستخدام خشب الكرز الطبيعي.
            <br />
            تجربة حسية فريدة تجمع بين عمق النكهة وعبق الأخشاب الفاخرة.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-copper px-8 py-4 rounded-full text-base font-bold"
              style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
            >
              اكتشف المجموعة
            </a>
            <a href="#story" onClick={(e) => { e.preventDefault(); document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/10"
              style={{ fontFamily: "Tajawal", color: "#F2EFE9", border: "1px solid rgba(242,239,233,0.25)" }}
            >
              قصتنا ←
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 mt-16 pt-8"
            style={{ borderTop: "1px solid rgba(194,120,79,0.2)" }}
          >
            {[
              { num: `${stat1}٪`, label: "أخشاب طبيعية" },
              { num: `+${stat2}`, label: "تجربة تحميص" },
              { num: "١", label: "خشب كرز طبيعي" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                  {stat.num}
                </div>
                <div className="text-sm mt-1" style={{ color: "rgba(242,239,233,0.45)", fontFamily: "Tajawal" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest" style={{ color: "rgba(194,120,79,0.5)", fontFamily: "Tajawal" }}>
          اكتشف المزيد
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(194,120,79,0.35)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#C2784F" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
