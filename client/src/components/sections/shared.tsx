/* Shared image constants and utility components for the Ember Roastery site */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Image URLs ─── */
export const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/hero-banner-with-logo-MdDPQnqVwXVPYk2pv5QqRs.webp";
export const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/product-closeup-2dw6RyPPGx74ThADMrrcxP.webp";
export const PROCESS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/process-image-6zVxqL7oFnPQ43QAjBygp3.webp";
export const TEXTURE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/wood-texture-bg-LPvWFZwUN47rMCshm7HojM.webp";
export const EMBER_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663550548100/DMAzJxAMhQ7eFUqrkqpqNz/Gemini_Generated_Image_nb3tqnb3tqnb3tqn_d0ece2ce.webp";
export const BRAND_STORY_IMAGE = "/brand-story.png";
export const PRODUCT_SHOWCASE = "/product-showcase.png";

/* ─── Navigation Items ─── */
export const NAV_ITEMS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "منتجاتنا", href: "#products" },
  { label: "قصتنا", href: "#story" },
  { label: "عملية التحميص", href: "#process" },
  { label: "تواصل معنا", href: "#contact" },
];

/* ─── Smoke Particles ─── */
export function SmokeParticles({ count = 5 }: { count?: number }) {
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

/* ─── Ember Particles ─── */
export function EmberParticles({ count = 8 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="ember-particle"
          style={{
            left: `${5 + (i * 13) % 90}%`,
            bottom: `${2 + (i * 7) % 20}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + (i % 4) * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Copper Divider ─── */
export function CopperDivider() {
  return (
    <div className="container py-2">
      <div className="copper-divider" />
    </div>
  );
}

/* ─── Scroll Reveal Wrapper ─── */
export function RevealSection({ children, className = "", delay = 0 }: {
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

/* ─── Section Badge ─── */
export function SectionBadge({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
      style={{ background: "rgba(194,120,79,0.1)", border: "1px solid rgba(194,120,79,0.3)" }}
    >
      <span className="text-xs tracking-widest" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
        {text}
      </span>
    </div>
  );
}

/* ─── Section Title ─── */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl md:text-5xl font-black mb-4"
      style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
    >
      {children}
    </h2>
  );
}

/* ─── Section Subtitle ─── */
export function SectionSubtitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-lg ${className}`}
      style={{ color: "rgba(242,239,233,0.6)", fontFamily: "Noto Naskh Arabic" }}
    >
      {children}
    </p>
  );
}
