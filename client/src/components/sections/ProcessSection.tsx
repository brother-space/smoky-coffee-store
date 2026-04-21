import { motion } from "framer-motion";
import { PROCESS_IMAGE, RevealSection, SectionBadge, SectionTitle, SectionSubtitle } from "./shared";

const steps = [
  { num: "٠١", title: "اختيار الحبوب", desc: "نختار أجود حبوب البن من مزارع إثيوبيا وكولومبيا المعتمدة." },
  { num: "٠٢", title: "التحميص الحرفي", desc: "نحمص الحبوب بدرجة حرارة محكومة بعناية للحصول على التوازن المثالي." },
  { num: "٠٣", title: "التدخين البارد", desc: "نعالج الحبوب المحمصة بالتدخين البارد بأخشاب الكرز أو التفاح لساعات." },
  { num: "٠٤", title: "التعتيق والتغليف", desc: "نترك الحبوب تتعتق في أوعية مغلقة لتمتص الزيوت العطرية قبل التغليف." },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden" style={{ background: "#1a1612" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <RevealSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                <img src={PROCESS_IMAGE} alt="عملية التحميص" className="w-full h-96 md:h-[500px] object-cover" loading="lazy" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{ background: "linear-gradient(135deg, #C2784F, #8B4513)", boxShadow: "0 20px 40px rgba(194,120,79,0.4)" }}
              >
                <div className="text-3xl font-black text-white" style={{ fontFamily: "Tajawal" }}>٤</div>
                <div className="text-sm text-white/80 mt-1" style={{ fontFamily: "Tajawal" }}>مراحل حرفية</div>
              </motion.div>
            </div>
          </RevealSection>

          {/* Steps */}
          <div>
            <RevealSection>
              <SectionBadge text="كيف نصنع الفرق" />
              <SectionTitle>عملية التحميص</SectionTitle>
              <SectionSubtitle className="mb-10">
                كل كيس قهوة يمر بأربع مراحل دقيقة لضمان أن تجربتك لا تُنسى.
              </SectionSubtitle>
            </RevealSection>

            <div className="space-y-1">
              {steps.map((step, i) => (
                <RevealSection key={step.num} delay={i * 0.1}>
                  <div className="flex gap-5 group relative">
                    {/* Timeline line */}
                    {i < steps.length - 1 && (
                      <div className="absolute right-[23px] top-[52px] w-[2px] h-[calc(100%+4px)]"
                        style={{ background: "linear-gradient(180deg, rgba(194,120,79,0.3), rgba(194,120,79,0.05))" }} />
                    )}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        background: "rgba(194,120,79,0.12)",
                        border: "1px solid rgba(194,120,79,0.35)",
                        fontFamily: "Tajawal",
                        color: "#C2784F",
                      }}
                    >
                      {step.num}
                    </div>
                    <div className="flex-1 pb-8 pt-2">
                      <h4 className="font-bold mb-1 text-lg" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Noto Naskh Arabic" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
