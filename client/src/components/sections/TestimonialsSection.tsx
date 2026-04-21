import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { RevealSection, SectionTitle, SectionSubtitle } from "./shared";

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
  {
    name: "نورة القحطاني",
    city: "الرياض",
    text: "قهوة Ember صارت جزء من روتيني اليومي. كل كوب يحكي قصة مختلفة. ما أقدر أرجع للقهوة العادية.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24" style={{ background: "#141210" }}>
      <div className="container">
        <RevealSection className="text-center mb-16">
          <SectionTitle>ماذا قالوا عنا</SectionTitle>
          <SectionSubtitle>تجارب حقيقية من عملائنا</SectionSubtitle>
        </RevealSection>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <RevealSection key={review.name} delay={i * 0.1}>
              <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 h-full">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#C2784F" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(242,239,233,0.7)", fontFamily: "Noto Naskh Arabic" }}>
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(194,120,79,0.12)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{ background: "linear-gradient(135deg, #C2784F, #8B4513)", color: "#F2EFE9", fontFamily: "Tajawal" }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>{review.name}</div>
                    <div className="text-xs" style={{ color: "rgba(242,239,233,0.35)", fontFamily: "Tajawal" }}>{review.city}</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-7 rounded-2xl"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: reviews[active].stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#C2784F" }} />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(242,239,233,0.7)", fontFamily: "Noto Naskh Arabic" }}>
                "{reviews[active].text}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(194,120,79,0.12)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #C2784F, #8B4513)", color: "#F2EFE9", fontFamily: "Tajawal" }}>
                  {reviews[active].name[0]}
                </div>
                <div>
                  <div className="font-bold" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>{reviews[active].name}</div>
                  <div className="text-xs" style={{ color: "rgba(242,239,233,0.35)", fontFamily: "Tajawal" }}>{reviews[active].city}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: i === active ? "#C2784F" : "rgba(194,120,79,0.2)",
                  transform: i === active ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`تقييم ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-between mt-4">
            <button onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
              className="p-2 rounded-full" style={{ color: "#C2784F", border: "1px solid rgba(194,120,79,0.3)" }}>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => setActive((active + 1) % reviews.length)}
              className="p-2 rounded-full" style={{ color: "#C2784F", border: "1px solid rgba(194,120,79,0.3)" }}>
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
