import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { RevealSection, SectionBadge, SectionTitle, SectionSubtitle } from "./shared";

const faqs = [
  {
    q: "ما هي القهوة المدخنة؟",
    a: "القهوة المدخنة هي حبوب بن مختصة يتم تحميصها بالطريقة التقليدية أولاً، ثم معالجتها بالتدخين البارد باستخدام أخشاب فواكه طبيعية مثل خشب الكرز أو التفاح. هذه العملية تضيف بُعداً جديداً من النكهة والعطر.",
  },
  {
    q: "هل التدخين يغيّر نسبة الكافيين؟",
    a: "لا، عملية التدخين البارد لا تؤثر على نسبة الكافيين في القهوة. التأثير يكون فقط على النكهة والرائحة، حيث تُضاف طبقة من العمق العطري دون تغيير التركيبة الأساسية.",
  },
  {
    q: "كيف أحضّر أفضل فنجان من قهوة Ember؟",
    a: "ننصح باستخدام طريقة V60 أو الفلتر للحصول على أفضل نكهة. استخدم ماء بدرجة حرارة 92-96 مئوية، ونسبة 1:15 (قهوة:ماء). اطحن الحبوب طحن متوسط قبل التحضير مباشرة.",
  },
  {
    q: "ما هي مدة صلاحية المنتج؟",
    a: "نوصي بتناول القهوة خلال 30 يوماً من تاريخ التحميص للحصول على أفضل نكهة. المنتج يأتي مغلف بعناية في أكياس بصمام أحادي الاتجاه للحفاظ على الطازجة.",
  },
  {
    q: "هل يتوفر شحن لجميع مناطق المملكة؟",
    a: "نعم، نوفر شحن سريع لجميع مناطق المملكة العربية السعودية. التوصيل يستغرق من 2-4 أيام عمل حسب المنطقة. الشحن مجاني للطلبات فوق 200 ريال.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ background: "#1a1612" }}>
      <div className="container max-w-3xl">
        <RevealSection className="text-center mb-14">
          <SectionBadge text="أسئلة شائعة" />
          <SectionTitle>كل ما تريد معرفته</SectionTitle>
          <SectionSubtitle>إجابات على أكثر الأسئلة شيوعاً حول قهوتنا المدخنة</SectionSubtitle>
        </RevealSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openIndex === i ? "rgba(194,120,79,0.08)" : "rgba(30,25,20,0.5)",
                  border: `1px solid ${openIndex === i ? "rgba(194,120,79,0.3)" : "rgba(194,120,79,0.1)"}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-right"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-bold text-base" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mr-4"
                  >
                    <ChevronDown className="w-5 h-5" style={{ color: "#C2784F" }} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
