import { motion } from "framer-motion";
import { BRAND_STORY_IMAGE, RevealSection, SectionBadge } from "./shared";

export function BrandStorySection() {
  return (
    <section id="story" className="py-24 relative overflow-hidden" style={{ background: "#141210" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <div>
            <RevealSection>
              <SectionBadge text="حكايتنا" />
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                من الجمر{" "}
                <span className="text-copper-gradient">إلى الفنجان</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: "rgba(242,239,233,0.65)", fontFamily: "Noto Naskh Arabic" }}>
                  بدأت رحلتنا من شغف بسيط: كيف نُضيف بُعداً جديداً لتجربة القهوة المختصة؟ الإجابة جاءت من التراث — من الجمر، ومن رائحة الخشب الطبيعي المحترق.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(242,239,233,0.65)", fontFamily: "Noto Naskh Arabic" }}>
                  نختار حبوب البن بعناية من أرقى المزارع في إثيوبيا وكولومبيا، ثم نحمصها بحرفية يدوية، وأخيراً نعالجها بالتدخين البارد بأخشاب الكرز والتفاح الطبيعية لساعات طويلة.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(242,239,233,0.65)", fontFamily: "Noto Naskh Arabic" }}>
                  النتيجة؟ قهوة بنكهة لا مثيل لها — عميقة، دافئة، وبعبق خشبي يجعل كل رشفة تجربة لا تُنسى.
                </p>
              </div>
              {/* Signature stat */}
              <div className="flex gap-8 mt-8 pt-8" style={{ borderTop: "1px solid rgba(194,120,79,0.15)" }}>
                {[
                  { value: "٢٠٢٣", label: "سنة التأسيس" },
                  { value: "+١٢", label: "ساعة تدخين" },
                  { value: "٣", label: "أنواع أخشاب" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-xl font-black" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>{s.value}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(242,239,233,0.4)", fontFamily: "Tajawal" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Image Side */}
          <RevealSection delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                <img src={BRAND_STORY_IMAGE} alt="قصة سموكي" className="w-full h-80 md:h-[480px] object-cover" loading="lazy" />
              </div>
              {/* Decorative copper corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl" style={{
                border: "2px solid rgba(194,120,79,0.25)",
                borderRadius: "1.5rem",
              }} />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #C2784F, #8B4513)", boxShadow: "0 15px 40px rgba(194,120,79,0.35)" }}
              >
                <div className="text-lg font-black text-white" style={{ fontFamily: "Tajawal" }}>حرفي</div>
                <div className="text-xs text-white/70" style={{ fontFamily: "Tajawal" }}>١٠٠٪ يدوي</div>
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
