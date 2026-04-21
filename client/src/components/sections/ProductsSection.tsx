import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { PRODUCT_IMAGE, PROCESS_IMAGE, PRODUCT_SHOWCASE, TEXTURE_BG, RevealSection, SectionBadge, SectionTitle, SectionSubtitle } from "./shared";

const products = [
  {
    name: "Ember كرز",
    subtitle: "Cherry Wood Roasted",
    desc: "حبوب بن إثيوبية محمصة بحرفية ومعالجة بالتدخين البارد بخشب الكرز. نكهة حلوة وعطرية مع لمسة من التوت.",
    price: "٨٥",
    weight: "٢٥٠ غرام",
    badge: "الأكثر مبيعاً",
    badgeColor: "#C2784F",
    img: PRODUCT_IMAGE,
  },
  {
    name: "Ember تفاح",
    subtitle: "Apple Wood Roasted",
    desc: "حبوب بن كولومبية مختارة محمصة وتدخينها بخشب التفاح. دخان ناعم وخفيف يكشف عن نكهات الكراميل والفانيليا.",
    price: "٩٠",
    weight: "٢٥٠ غرام",
    badge: "جديد",
    badgeColor: "#7B9E6B",
    img: PROCESS_IMAGE,
  },
  {
    name: "Ember بريميوم",
    subtitle: "Dual Wood Blend",
    desc: "مزيج حصري من خشبي الكرز والتفاح معاً. تجربة تحميص وتدخين متكاملة لعشاق القهوة المختصة.",
    price: "١١٠",
    weight: "٢٥٠ غرام",
    badge: "محدود",
    badgeColor: "#9B7B4F",
    img: PRODUCT_SHOWCASE,
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [addedToCart, setAddedToCart] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <RevealSection delay={index * 0.15}>
      <div
        className="product-card rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "rgba(30,25,20,0.8)",
          border: "1px solid rgba(194,120,79,0.12)",
          backdropFilter: "blur(10px)",
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.85) 0%, transparent 50%)" }} />
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: product.badgeColor, color: "#F2EFE9", fontFamily: "Tajawal" }}
          >
            {product.badge}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-1 text-xs tracking-widest" style={{ color: "#C2784F", fontFamily: "Tajawal" }}>
            {product.subtitle}
          </div>
          <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}>
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "rgba(242,239,233,0.55)", fontFamily: "Noto Naskh Arabic" }}>
            {product.desc}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-black" style={{ fontFamily: "Tajawal", color: "#C2784F" }}>
                {product.price}
              </span>
              <span className="text-sm mr-1" style={{ color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal" }}>
                ريال
              </span>
            </div>
            <span className="text-sm px-3 py-1 rounded-full"
              style={{ background: "rgba(194,120,79,0.08)", color: "rgba(242,239,233,0.5)", fontFamily: "Tajawal", border: "1px solid rgba(194,120,79,0.15)" }}>
              {product.weight}
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddToCart}
            className="btn-copper w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: "Tajawal", color: "#F2EFE9" }}
          >
            <ShoppingCart className="w-4 h-4" />
            {addedToCart ? "✓ تمت الإضافة" : "أضف للسلة"}
          </motion.button>
        </div>
      </div>
    </RevealSection>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative" style={{ background: "#141210" }}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${TEXTURE_BG})`, backgroundSize: "cover" }} />
      <div className="container relative z-10">
        <RevealSection className="text-center mb-16">
          <SectionBadge text="مجموعتنا الحصرية" />
          <SectionTitle>اختر تجربتك</SectionTitle>
          <SectionSubtitle className="max-w-xl mx-auto">
            كل منتج هو رحلة حسية مختلفة. اختر نكهة التحميص التي تناسب ذوقك.
          </SectionSubtitle>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
