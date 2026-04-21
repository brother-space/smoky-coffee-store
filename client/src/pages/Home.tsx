/*
 * DESIGN: "الفحم والنار" — Dark Artisan Luxury
 * Brand: Ember Roastery - Craft Coffee Roasting
 * Colors: #232323 Charcoal | #C2784F Copper | #F2EFE9 Cream
 * Fonts: Tajawal (headings) | Noto Naskh Arabic (body)
 * Layout: Full-bleed asymmetric sections, smoke animations, copper accents
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/hero-banner-with-logo-MdDPQnqVwXVPYk2pv5QqRs.webp";
const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/product-closeup-2dw6RyPPGx74ThADMrrcxP.webp";
const PROCESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/process-image-6zVxqL7oFnPQ43QAjBygp3.webp";
const TEXTURE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/wood-texture-bg-LPvWFZwUN47rMCshm7HojM.webp";
const EMBER_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/Gemini_Generated_Image_nb3tqnb3tqnb3tqn_d0ece2ce.webp";

/* ─── Smoke Particle Component ─── */
function SmokeParticles({ count = 5 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="smoke-particle"
          style={{
            width: `${60 + i * 30}px`,
            height: `${60 + i * 30}px`,
            left: `${10 + i * 18}%`,
            bottom: `${5 + (i % 3) * 8}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${4 + i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Copper Divider ─── */
function CopperDivider() {
  return (
    <div className="container py-2">
      <div className="copper-divider" />
    </div>
  );
}

/* ─── Scroll Reveal Wrapper ─── */
function RevealSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(26, 22, 20, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(194,120,79,0.2)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img src={EMBER_LOGO} alt="Ember Roastery" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xl font-black tracking-widest" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
              Ember
            </div>
            <div className="text-xs tracking-wider" style={{ color: "#C2784F", fontFamily: "Tajawal" }}>
              ROASTERY
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {["الرئيسية", "منتجاتنا", "عن Ember", "عملية التحميص", "تواصل معنا"].map((item, i) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium transition-colors duration-300 hover:opacity-100"
              style={{
                fontFamily: "Tajawal",
                color: i === 0 ? "#C2784F" : "rgba(242,239,233,0.7)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C2784F")}
              onMouseLeave={e => (e.currentTarget.style.color = i === 0 ? "#C2784F" : "rgba(242,239,233,0.7)")}
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* CTA + Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <button
            className="btn-copper hidden md:block px-5 py-2 rounded-full text-sm font-bold"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
          >
            اطلب الآن
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#C2784F" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(26,22,20,0.98)", borderTop: "1px solid rgba(194,120,79,0.2)" }}
          >
            <div className="container py-4 flex flex-col gap-4">
              {["الرئيسية", "منتجاتنا", "عن Ember", "عملية التحميص", "تواصل معنا"].map(item => (
                <a key={item} href="#" className="text-base py-1"
                  style={{ fontFamily: "Tajawal", color: "rgba(242,239,233,0.8)" }}
                  onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="btn-copper w-full py-3 rounded-full text-sm font-bold mt-2"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                اطلب الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#141210" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="قهوة محمصة"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(20,18,16,0.9) 40%, rgba(20,18,16,0.5) 100%)" }} />
      </div>

      {/* Smoke Particles */}
      <SmokeParticles count={6} />

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(194,120,79,0.15)",
              border: "1px solid rgba(194,120,79,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#C2784F" }} />
            <span className="text-xs font-medium tracking-widest"
              style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              تقديم اجود انواع القهوة
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9", lineHeight: "1.15" }}
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
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: "rgba(242,239,233,0.7)", fontFamily: "Noto Naskh Arabic" }}
          >
            نحمص حبوب البن بعناية فائقة ثم نعالجها بالتدخين البارد باستخدام خشب الكرز الطبيعي.
            <br />
            تجربة حسية فريدة تجمع بين عمق النكهة وعبق الأخشاب الفاخرة.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              className="btn-copper px-8 py-4 rounded-full text-base font-bold"
              style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
            >
              اكتشف المجموعة
            </button>
            <button
              className="px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/10"
              style={{
                fontFamily: "Tajawal",
                color: "#F2EFE9",
                border: "1px solid rgba(242,239,233,0.3)",
              }}
            >
              قصتنا ←
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 mt-16 pt-8"
            style={{ borderTop: "1px solid rgba(194,120,79,0.2)" }}
          >
            {[
              { num: "١٠٠٪", label: "أخشاب طبيعية" },
              { num: "+٥٠", label: "تجربة تحميص" },
              { num: "١", label: "خشب كرز طبيعي" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-black" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                  {stat.num}
                </div>
                <div className="text-sm mt-1" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal" }}>
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
        <span className="text-xs tracking-widest" style={{ color: "rgba(194,120,79,0.6)", fontFamily: "Tajawal" }}>
          اكتشف المزيد
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1"
          style={{ borderColor: "rgba(194,120,79,0.4)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#C2784F" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Features Banner ─── */
function FeaturesBanner() {
  const features = [
    { icon: "🔥", title: "تحميص حرفي", desc: "نحمص الحبوب بدرجة حرارة محكومة لتحقيق التوازن المثالي" },
    { icon: "🍒", title: "خشب الكرز", desc: "نكهة حلوة وعطرية من أجود أخشاب الفواكه" },
    { icon: "☕", title: "محاصيل مختصة", desc: "نختار أجود المحاصيل المتخصصة من أفضل المزارع حول العالم" },
    { icon: "✨", title: "تجربة فريدة", desc: "افتح الكيس واستنشق الفرق قبل أول رشفة" },
  ];

  return (
    <section className="py-16 relative" style={{ background: "#1a1612" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <RevealSection key={f.title} delay={i * 0.1}>
              <div
                className="card-hover p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(194,120,79,0.06)",
                  border: "1px solid rgba(194,120,79,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-bold mb-2" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                  {f.title}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
                  {f.desc}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Products Section ─── */
function ProductsSection() {
  const products = [
    {
      name: "Ember كرز",
      subtitle: "Cherry Wood Roasted",
      desc: "حبوب بن إثيوبية محمصة بحرفية ومعالجة بالتدخين البارد بخشب الكرز. نكهة حلوة وعطرية مع لمسة من التوت.",
      price: "٨٥",
      weight: "٢٥٠ غرام",
      badge: "الأكثر مبيعاً",
      badgeColor: "#C2784F",
      img: PRODUCT_IMAGE,
    },
    {
      name: "Ember تفاح",
      subtitle: "Apple Wood Roasted",
      desc: "حبوب بن كولومبية مختارة محمصة وتدخينها بخشب التفاح. دخان ناعم وخفيف يكشف عن نكهات الكراميل والفانيليا.",
      price: "٩٠",
      weight: "٢٥٠ غرام",
      badge: "جديد",
      badgeColor: "#7B9E6B",
      img: PROCESS_IMAGE,
    },
    {
      name: "Ember بريميوم",
      subtitle: "Dual Wood Blend",
      desc: "مزيج حصري من خشبي الكرز والتفاح معاً. تجربة تحميص وتدخين متكاملة لعشاق القهوة المختصة.",
      price: "١١٠",
      weight: "٢٥٠ غرام",
      badge: "محدود",
      badgeColor: "#9B7B4F",
      img: HERO_IMAGE,
    },
  ];

  return (
    <section id="products" className="py-24 relative" style={{ background: "#141210" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <RevealSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(194,120,79,0.1)", border: "1px solid rgba(194,120,79,0.3)" }}>
            <span className="text-xs tracking-widest" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              مجموعتنا الحصرية
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
            اختر تجربتك
          </h2>
          <p className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
            كل منتج هو رحلة حسية مختلفة. اختر نكهة التحميص التي تناسب ذوقك.
          </p>
        </RevealSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <RevealSection key={product.name} delay={i * 0.15}>
              <div
                className="card-hover rounded-3xl overflow-hidden flex flex-col"
                style={{
                  background: "rgba(30,25,20,0.8)",
                  border: "1px solid rgba(194,120,79,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(20,18,16,0.8) 0%, transparent 50%)" }} />
                  {/* Badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: product.badgeColor,
                      color: "#F2EFE9",
                      fontFamily: "Tajawal",
                    }}
                  >
                    {product.badge}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-1 text-xs tracking-widest" style={{ color: "#C2784F", fontFamily: "Tajawal" }}>
                    {product.subtitle}
                  </div>
                  <h3 className="text-2xl font-black mb-3"
                    style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
                    {product.desc}
                  </p>

                  {/* Price + Weight */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-black" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                        {product.price}
                      </span>
                      <span className="text-sm mr-1" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal" }}>
                        ريال
                      </span>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(194,120,79,0.1)",
                        color: "rgba(242,239,233,0.6)",
                        fontFamily: "Tajawal",
                        border: "1px solid rgba(194,120,79,0.2)",
                      }}>
                      {product.weight}
                    </span>
                  </div>

                  <button
                    className="btn-copper w-full py-3 rounded-xl font-bold text-sm"
                    style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
                  >
                    أضف للسلة
                  </button>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    {
      num: "٠١",
      title: "اختيار الحبوب",
      desc: "نختار أجود حبوب البن من مزارع إثيوبيا وكولومبيا المعتمدة.",
    },
    {
      num: "٠٢",
      title: "التحميص الحرفي",
      desc: "نحمص الحبوب بدرجة حرارة محكومة بعناية للحصول على التوازن المثالي.",
    },
    {
      num: "٠٣",
      title: "التدخين البارد",
      desc: "نعالج الحبوب المحمصة بالتدخين البارد بأخشاب الكرز أو التفاح لساعات.",
    },
    {
      num: "٠٤",
      title: "التعتيق والتغليف",
      desc: "نترك الحبوب تتعتق في أوعية مغلقة لتمتص الزيوت العطرية قبل التغليف.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#1a1612" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <RevealSection>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
              >
                <img
                  src={PROCESS_IMAGE}
                  alt="عملية التحميص"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #C2784F, #8B4513)",
                  boxShadow: "0 20px 40px rgba(194,120,79,0.4)",
                }}
              >
                <div className="text-3xl font-black text-white" style={{ fontFamily: "Tajawal" }}>
                  ٤
                </div>
                <div className="text-sm text-white/80 mt-1" style={{ fontFamily: "Tajawal" }}>
                  مراحل حرفية
                </div>
              </motion.div>
            </div>
          </RevealSection>

          {/* Steps Side */}
          <div>
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(194,120,79,0.1)", border: "1px solid rgba(194,120,79,0.3)" }}>
                <span className="text-xs tracking-widest" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                  كيف نصنع الفرق
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                عملية التحميص
              </h2>
              <p className="text-base mb-10"
                style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
                كل كيس قهوة يمر بأربع مراحل دقيقة لضمان أن تجربتك لا تُنسى.
              </p>
            </RevealSection>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <RevealSection key={step.num} delay={i * 0.1}>
                  <div className="flex gap-5 group">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(194,120,79,0.15)",
                        border: "1px solid rgba(194,120,79,0.4)",
                        fontFamily: "Tajawal",
                        color: "#C2784F",
                      }}
                    >
                      {step.num}
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="font-bold mb-1 text-lg"
                        style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed"
                        style={{ color: "rgba(242,239,233,0.55)", fontFamily: "Noto Naskh Arabic" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mr-6 mt-3 mb-1 w-px h-4"
                      style={{ background: "rgba(194,120,79,0.2)", marginRight: "23px" }} />
                  )}
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const reviews = [
    {
      name: "محمد العتيبي",
      city: "الرياض",
      text: "فتحت الكيس وأنا ما صدقت! الرائحة مختلفة تماماً عن أي قهوة جربتها. الطعم فيه عمق ما وصفته الكلمات.",
      stars: 5,
    },
    {
      name: "سارة الشمري",
      city: "جدة",
      text: "أهديت كيس لصديقتي وكانت ردة فعلها رهيبة. الآن كلنا نطلب منه. منتج فاخر ومختلف.",
      stars: 5,
    },
    {
      name: "خالد المطيري",
      city: "الدمام",
      text: "أنا من عشاق القهوة المختصة وهذا المنتج أضاف بُعداً جديداً لتجربتي. تحميص الكرز هو الأفضل.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24" style={{ background: "#141210" }}>
      <div className="container">
        <RevealSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
            ماذا قالوا عنا
          </h2>
          <p className="text-lg" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Noto Naskh Arabic" }}>
            تجارب حقيقية من عملائنا الأوائل
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <RevealSection key={review.name} delay={i * 0.15}>
              <div
                className="card-hover p-7 rounded-3xl flex flex-col gap-4"
                style={{
                  background: "rgba(30,25,20,0.7)",
                  border: "1px solid rgba(194,120,79,0.12)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} style={{ color: "#C2784F" }}>★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base leading-relaxed flex-1"
                  style={{ color: "rgba(242,239,233,0.75)", fontFamily: "Noto Naskh Arabic" }}>
                  "{review.text}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-3"
                  style={{ borderTop: "1px solid rgba(194,120,79,0.15)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #C2784F, #8B4513)", color: "#F2EFE9", fontFamily: "Tajawal" }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                      {review.name}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(242,239,233,0.4)", fontFamily: "Tajawal" }}>
                      {review.city}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#1a1612" }}>
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }} />
      <SmokeParticles count={4} />

      <div className="container relative z-10 text-center">
        <RevealSection>
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">☕</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
              افتح الكيس..
              <br />
              <span className="text-copper-gradient">واستنشق الفرق</span>
            </h2>
            <p className="text-lg mb-10"
              style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
              نحن لا نبيع بنّاً، نحن نبيع تجربة حرفية وعطرية لا تُنسى.
              <br />
              جرب Ember Roastery اليوم وأخبرنا برأيك.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="btn-copper px-10 py-4 rounded-full text-lg font-bold"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
              >
                اطلب الآن
              </button>
              <button
                className="px-10 py-4 rounded-full text-lg font-medium"
                style={{
                  fontFamily: "Tajawal",
                  color: "#F2EFE9",
                  border: "1px solid rgba(242,239,233,0.3)",
                  transition: "background 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12" style={{ background: "#0e0c0a", borderTop: "1px solid rgba(194,120,79,0.15)" }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black mb-2" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
              Ember Roastery
            </div>
            <div className="text-xs tracking-widest mb-4" style={{ color: "#C2784F", fontFamily: "Tajawal" }}>
              CRAFT COFFEE ROASTERY
            </div>
            <p className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(242,239,233,0.45)", fontFamily: "Noto Naskh Arabic" }}>
              تحميص حرفي متخصص في إعادة صياغة مفهوم القهوة عبر معالجتها بالتدخين البارد بأجود أنواع أخشاب الفواكه الطبيعية.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-bold mb-4 text-sm" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              روابط سريعة
            </div>
            {["الرئيسية", "منتجاتنا", "عن Ember", "عملية التحميص"].map(link => (
              <a key={link} href="#"
                className="block text-sm py-1 transition-colors duration-300"
                style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C2784F")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,239,233,0.5)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold mb-4 text-sm" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              تواصل معنا
            </div>
            <div className="space-y-2">
              {[
                { icon: "📱", text: "واتساب" },
                { icon: "📸", text: "إنستغرام" },
                { icon: "🛒", text: "متجر سلة" },
              ].map(item => (
                <a key={item.text} href="#"
                  className="flex items-center gap-2 text-sm py-1"
                  style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C2784F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,239,233,0.5)")}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="copper-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs" style={{ color: "rgba(242,239,233,0.3)", fontFamily: "Tajawal" }}>
            © ٢٠٢٥ Ember Roastery. جميع الحقوق محفوظة.
          </div>
          <div className="text-xs" style={{ color: "rgba(242,239,233,0.3)", fontFamily: "Tajawal" }}>
            صُنع بشغف وحرفية في المملكة العربية السعودية 🇸🇦
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#141210" }}>
      <Navbar />
      <HeroSection />
      <CopperDivider />
      <FeaturesBanner />
      <CopperDivider />
      <ProductsSection />
      <CopperDivider />
      <ProcessSection />
      <CopperDivider />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
