import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EMBER_LOGO, NAV_ITEMS } from "./shared";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(20, 18, 16, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(194,120,79,0.15)" : "none",
        }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[rgba(194,120,79,0.5)] transition-all duration-300">
              <img src={EMBER_LOGO} alt="Ember Roastery" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xl font-black tracking-widest group-hover:text-copper-gradient transition-all duration-300" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
                Ember
              </div>
              <div className="text-xs tracking-wider" style={{ color: "#C2784F", fontFamily: "Tajawal" }}>
                ROASTERY
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-sm font-medium relative py-1 transition-colors duration-300"
                style={{
                  fontFamily: "Tajawal",
                  color: i === 0 ? "#C2784F" : "rgba(242,239,233,0.7)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C2784F")}
                onMouseLeave={e => (e.currentTarget.style.color = i === 0 ? "#C2784F" : "rgba(242,239,233,0.7)")}
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA + Mobile Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); scrollTo("#products"); }}
              className="btn-copper hidden md:block px-5 py-2.5 rounded-full text-sm font-bold"
              style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
            >
              اطلب الآن
            </a>
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "#C2784F" }}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              style={{ background: "rgba(20,18,16,0.98)", borderTop: "1px solid rgba(194,120,79,0.15)" }}
            >
              <div className="container py-6 flex flex-col gap-3">
                {NAV_ITEMS.map(item => (
                  <a key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="text-base py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-white/5"
                    style={{ fontFamily: "Tajawal", color: "rgba(242,239,233,0.8)" }}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#products"
                  onClick={(e) => { e.preventDefault(); scrollTo("#products"); }}
                  className="btn-copper w-full py-3 rounded-full text-sm font-bold mt-3 text-center"
                  style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
                >
                  اطلب الآن
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
