/*
 * DESIGN: "الفحم والنار" — Dark Artisan Luxury
 * Brand: Ember Roastery — سموكي - Craft Smoked Coffee
 * Salla Portal Ready
 */

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesBanner } from "@/components/sections/FeaturesBanner";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { BrandStorySection } from "@/components/sections/BrandStory";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection, NewsletterSection } from "@/components/sections/CTASection";
import { Footer, WhatsAppFloat, BackToTop } from "@/components/sections/Footer";
import { CopperDivider } from "@/components/sections/shared";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#141210" }}>
      <Navbar />
      <HeroSection />
      <CopperDivider />
      <FeaturesBanner />
      <CopperDivider />
      <ProductsSection />
      <CopperDivider />
      <BrandStorySection />
      <CopperDivider />
      <ProcessSection />
      <CopperDivider />
      <TestimonialsSection />
      <CopperDivider />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
