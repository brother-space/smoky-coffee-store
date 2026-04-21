import { Flame, TreePine, Coffee, Sparkles } from "lucide-react";
import { RevealSection } from "./shared";

const features = [
  { icon: Flame, title: "تحميص حرفي", desc: "نحمص الحبوب بدرجة حرارة محكومة لتحقيق التوازن المثالي" },
  { icon: TreePine, title: "خشب الكرز", desc: "نكهة حلوة وعطرية من أجود أخشاب الفواكه الطبيعية" },
  { icon: Coffee, title: "محاصيل مختصة", desc: "نختار أجود المحاصيل المتخصصة من أفضل المزارع حول العالم" },
  { icon: Sparkles, title: "تجربة فريدة", desc: "افتح الكيس واستنشق الفرق قبل أول رشفة" },
];

export function FeaturesBanner() {
  return (
    <section className="py-16 relative" style={{ background: "#1a1612" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <RevealSection key={f.title} delay={i * 0.1}>
              <div className="glass-card p-6 rounded-2xl text-center group">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(194,120,79,0.12)", border: "1px solid rgba(194,120,79,0.25)" }}
                >
                  <f.icon className="w-5 h-5" style={{ color: "#C2784F" }} />
                </div>
                <div className="font-bold mb-2 text-sm md:text-base" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                  {f.title}
                </div>
                <div className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Noto Naskh Arabic" }}>
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
