import { motion } from "framer-motion";
import { Coffee, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ background: "#141210" }}
    >
      {/* Smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="smoke-particle"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${20 + i * 20}%`,
              bottom: "10%",
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10 px-6"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full"
          style={{
            background: "rgba(194,120,79,0.1)",
            border: "1px solid rgba(194,120,79,0.3)",
          }}
        >
          <Coffee className="w-12 h-12" style={{ color: "#C2784F" }} />
        </motion.div>

        <h1
          className="text-8xl font-black mb-4 text-copper-gradient"
          style={{ fontFamily: "Tajawal" }}
        >
          ٤٠٤
        </h1>

        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
        >
          الصفحة غير موجودة
        </h2>

        <p
          className="text-base mb-10 max-w-md mx-auto leading-relaxed"
          style={{
            color: "rgba(242,239,233,0.5)",
            fontFamily: "Noto Naskh Arabic",
          }}
        >
          يبدو أن هذه الصفحة قد تبخرت مع الدخان.
          <br />
          دعنا نعيدك إلى مكان أكثر دفئاً.
        </p>

        <button
          onClick={() => setLocation("/")}
          className="btn-copper inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold"
          style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
        >
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </button>
      </motion.div>
    </div>
  );
}
