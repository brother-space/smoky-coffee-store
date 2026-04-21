import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Coffee } from "lucide-react";
import { TEXTURE_BG, SmokeParticles, RevealSection } from "./shared";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#141210" }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }} />
      <SmokeParticles count={4} />

      <div className="container relative z-10 text-center">
        <RevealSection>
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: "rgba(194,120,79,0.12)", border: "1px solid rgba(194,120,79,0.3)" }}>
              <Coffee className="w-8 h-8" style={{ color: "#C2784F" }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
              افتح الكيس..
              <br />
              <span className="text-copper-gradient">واستنشق الفرق</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(242,239,233,0.55)", fontFamily: "Noto Naskh Arabic" }}>
              نحن لا نبيع بنّاً، نحن نبيع تجربة حرفية وعطرية لا تُنسى.
              <br />
              جرب Ember Roastery اليوم وأخبرنا برأيك.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-copper px-10 py-4 rounded-full text-lg font-bold"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                اطلب الآن
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/8"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9", border: "1px solid rgba(242,239,233,0.25)" }}>
                تواصل معنا
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="py-16" style={{ background: "#1a1612" }}>
      <div className="container max-w-2xl text-center">
        <RevealSection>
          <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
            انضم لعائلة Ember
          </h3>
          <p className="text-sm mb-6" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Noto Naskh Arabic" }}>
            اشترك ليصلك كل جديد عن إصداراتنا والعروض الحصرية
          </p>
          {submitted ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="py-4 px-6 rounded-full inline-flex items-center gap-2"
              style={{ background: "rgba(194,120,79,0.15)", border: "1px solid rgba(194,120,79,0.3)" }}>
              <span style={{ color: "#C2784F", fontFamily: "Tajawal" }}>✓ تم الاشتراك بنجاح!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                className="newsletter-input flex-1"
                required
                dir="ltr"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-copper px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 flex-shrink-0"
                style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
              >
                <Send className="w-4 h-4" />
                اشترك
              </motion.button>
            </form>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
