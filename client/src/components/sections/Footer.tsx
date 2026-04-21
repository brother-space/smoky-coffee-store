import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, ShoppingCart, MessageCircle, ArrowUp } from "lucide-react";
import { CopperDivider } from "./shared";

export function Footer() {
  return (
    <footer id="contact" className="py-14" style={{ background: "#0e0c0a", borderTop: "1px solid rgba(194,120,79,0.1)" }}>
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
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(242,239,233,0.4)", fontFamily: "Noto Naskh Arabic" }}>
              تحميص حرفي متخصص في إعادة صياغة مفهوم القهوة عبر معالجتها بالتدخين البارد بأجود أنواع أخشاب الفواكه الطبيعية.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-bold mb-4 text-sm" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              روابط سريعة
            </div>
            {["الرئيسية", "منتجاتنا", "قصتنا", "عملية التحميص"].map((link, i) => {
              const hrefs = ["#hero", "#products", "#story", "#process"];
              return (
                <a key={link} href={hrefs[i]}
                  onClick={(e) => { e.preventDefault(); document.querySelector(hrefs[i])?.scrollIntoView({ behavior: "smooth" }); }}
                  className="block text-sm py-1.5 transition-colors duration-300 hover:text-[#C2784F]"
                  style={{ color: "rgba(242,239,233,0.45)", fontFamily: "Tajawal" }}>
                  {link}
                </a>
              );
            })}
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold mb-4 text-sm" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
              تواصل معنا
            </div>
            <div className="space-y-2">
              {[
                { icon: Phone, text: "واتساب", href: "https://wa.me/966500000000" },
                { icon: Instagram, text: "إنستغرام", href: "#" },
                { icon: ShoppingCart, text: "متجر سلة", href: "#" },
              ].map(item => (
                <a key={item.text} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm py-1.5 transition-colors duration-300 hover:text-[#C2784F]"
                  style={{ color: "rgba(242,239,233,0.45)", fontFamily: "Tajawal" }}>
                  <item.icon className="w-4 h-4" style={{ color: "#C2784F" }} />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <CopperDivider />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <div className="text-xs" style={{ color: "rgba(242,239,233,0.25)", fontFamily: "Tajawal" }}>
            © ٢٠٢٥ Ember Roastery. جميع الحقوق محفوظة.
          </div>
          <div className="text-xs" style={{ color: "rgba(242,239,233,0.25)", fontFamily: "Tajawal" }}>
            صُنع بشغف وحرفية في المملكة العربية السعودية 🇸🇦
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
