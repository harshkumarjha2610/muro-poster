import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Heart, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Check 
} from "lucide-react";

// --- Local Asset Imports ---
import heroBanner from "@/assets/hero-banner.jpg"; 
import abc from './Unstoppable Mindset - Built for storms, not silence. A4Poster.com (1).jpg';
import def from './Unstoppable Mindset - Born tired, trained relentless. 1 A4Poster.com.jpg';
import ghi from './Unstoppable Mindset - Action over anxiety. Always.2 A4Poster.com.jpg';
import jkl from './Unstoppable Mindset - Built for storms, not silence.1 A4Poster.com.jpg';

// --- Hero Animations ---
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; 
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

// --- Mood Data for Section 3 ---
const moods = [
  {
    label: "Express Yourself",
    cat: "Aesthetic & Vibe",
    img: abc,
  },
  {
    label: "Find Calm",
    cat: "Calm & Inner Balance",
    img: def,
  },
  {
    label: "Get Focused",
    cat: "Motivational & Mindset",
    img: ghi,
  },
  {
    label: "Feel Put-Together",
    cat: "Aesthetic & Vibe",
    img: jkl,
  },
  {
    label: "Be Inspired",
    cat: "Motivational & Mindset",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop",
  },
  {
    label: "Feel At Home",
    cat: "Kitchen & Dining",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
  },
];

const Index: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const bestsellers = [
    { id: 1, title: "Coco Poster",      salePrice: "₹1,299", originalPrice: "₹2,165", discount: "-40%*", img: abc },
    { id: 2, title: "Leopard Poster",   salePrice: "₹1,999", originalPrice: "₹3,330", discount: "-40%*", img: def },
    { id: 3, title: "Soft Brown Pack",  salePrice: "₹2,810", originalPrice: "₹4,685", discount: "-40%*", img: ghi },
    { id: 4, title: "Marble Balcony",   salePrice: "₹1,299", originalPrice: "₹2,165", discount: "-40%*", img: jkl },
    { id: 5, title: "Amalfi Coast",     salePrice: "₹1,299", originalPrice: "₹2,165", discount: "-40%*", 
      img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <main className="bg-white text-[#222] font-sans selection:bg-[#a0b695] selection:text-white overflow-x-hidden">

      {/* ── 1. HERO SECTION ── */}
    <section className="flex h-[60vh] min-h-[380px] overflow-hidden">

  <div className="w-1/2 relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop"
      alt="Gallery Wall"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ✅ bg-black → bg-[#57663D] olive green */}
  <div className="w-1/2 bg-[#57663D] flex items-center justify-center px-10 md:px-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="max-w-md"
    >
      <motion.h1
        variants={fadeInUp}
        className="font-serif text-4xl md:text-6xl text-white mb-6 leading-[1.15]"
      >
        It starts with art
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-white/70 text-base md:text-lg mb-10 font-light leading-relaxed"
      >
        Refresh your space with made-to-order art from the world's best independent artists.
      </motion.p>

      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/gallery-walls"
          className="flex-1 text-center border border-white text-white px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white hover:text-[#57663D] transition-all duration-300"
        >
          Gallery Walls
        </Link>
        <Link
          to="/products"
          className="flex-1 text-center border border-white text-white px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white hover:text-[#57663D] transition-all duration-300"
        >
          Shop All Art
        </Link>
      </motion.div>
    </motion.div>
  </div>

</section>



      {/* ── 2. MARQUEE TRUST BAR ── */}
   <div className="bg-[#a0b695] text-white py-2.5 overflow-hidden whitespace-nowrap">
  <div className="flex w-max animate-marquee">
    {[0, 1].map((i) => (
      <div key={i} className="flex items-center shrink-0">
        <span className="flex items-center gap-2 mx-10 text-[13px] font-bold tracking-widest uppercase">
          🎉 40% OFF Posters &amp; 20% OFF Frames*
        </span>
        <span className="text-white/40 mx-2">•</span>
        <span className="flex items-center gap-2 mx-10 text-[13px] font-bold tracking-widest uppercase">
          <Truck className="w-4 h-4 shrink-0" /> Free shipping over ₹2999
        </span>
        <span className="text-white/40 mx-2">•</span>
        <span className="flex items-center gap-2 mx-10 text-[13px] font-bold tracking-widest uppercase">
          <MessageCircle className="w-4 h-4 shrink-0" /> Happiness Guarantee
        </span>
        <span className="text-white/40 mx-2">•</span>
        <span className="flex items-center gap-2 mx-10 text-[13px] font-bold tracking-widest uppercase">
          <ShieldCheck className="w-4 h-4 shrink-0" /> Delivery in 2–4 business days
        </span>
        <span className="text-white/40 mx-2">•</span>
      </div>
    ))}
  </div>
</div>


      {/* ── 3. SHOP BY MOOD — 6 IMAGE GRID ── */}
     <section className="w-full px-2 md:px-4 py-12">

  <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2">
    {moods.map(({ label, cat, img }) => (
      <Link
        key={label}
        to={`/products?cat=${encodeURIComponent(cat)}`}
        className="group flex flex-col gap-2"
      >
        {/* Square image */}
        <div className="relative overflow-hidden rounded-xl aspect-square bg-[#F0F0F0]">
          <img
            src={img}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl" />
        </div>

        {/* Label + arrow */}
        <p className="text-[12px] md:text-[14px] font-bold text-[#111] tracking-tight flex items-center gap-1 group-hover:gap-2 transition-all duration-200 px-1">
          {label}
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">→</span>
        </p>
      </Link>
    ))}
  </div>

</section>


      {/* ── 4. BESTSELLERS ── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
          <p className="m-0 opacity-80 text-[28px] md:text-[36px]" style={{ fontFamily: "Arsenal" }}>
            Bestsellers
          </p>
          <Link
            to="/all"
            className="text-sm font-bold uppercase tracking-widest hover:underline decoration-[#a0b695] underline-offset-8"
          >
            Show more
          </Link>
        </div>

        <div className="relative group/slider">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-[40%] z-20 bg-white border p-2 rounded-full hidden group-hover/slider:block shadow-sm"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-10 no-scrollbar snap-x scroll-smooth"
          >
            {bestsellers.map((item) => (
              <div key={item.id} className="min-w-[200px] md:min-w-[300px] snap-start group cursor-pointer">
                <div className="relative aspect-[3/4] bg-[#f8f8f8] mb-4 overflow-hidden rounded-xl">
                  <div className="absolute top-3 left-3 bg-[#a0b695] text-white text-[11px] font-bold px-3 py-1 rounded-full z-10">
                    {item.discount}
                  </div>
                  <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[16px] font-bold mb-1" style={{ fontFamily: "Arsenal" }}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[14px] text-gray-500 italic">From</span>
                  <span className="text-[16px] font-bold text-[#b21010]">{item.salePrice}</span>
                  <span className="text-[14px] text-gray-400 line-through">{item.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-[40%] z-20 bg-white border p-2 rounded-full hidden group-hover/slider:block shadow-sm"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* ── 5. POPULAR CATEGORIES ── */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-[#fcfcfc]">
        <div className="text-center mb-12">
          <p className="m-0 opacity-80 text-[32px] md:text-[42px]" style={{ fontFamily: "Arsenal" }}>
            Popular Categories
          </p>
        </div>
        <div className="flex overflow-x-auto gap-8 no-scrollbar justify-start md:justify-center px-4">
          {['Iconic', 'Illustration', 'Artists', 'Personalised', 'Photo Art', 'Nature'].map((cat, i) => (
            <Link to="/category" key={i} className="flex flex-col items-center min-w-[120px] group">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-[#a0b695] transition-all p-1">
                <img
                  src={abc}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <span className="text-[14px] font-bold uppercase tracking-widest text-center group-hover:text-[#a0b695]">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 6. CUSTOMER REVIEWS ── */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <p className="m-0 opacity-80 text-[28px] md:text-[36px]" style={{ fontFamily: "Arsenal" }}>
            Customer Reviews
          </p>
        </div>
        <div className="bg-[#f9f7f2] p-10 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
          <div className="text-center md:border-r border-gray-200 md:pr-10">
            <p className="text-5xl font-bold mb-2">4.3</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Excellent</p>
            <div className="flex justify-center text-[#222] mb-2">
              <Star className="fill-black" /><Star className="fill-black" />
              <Star className="fill-black" /><Star className="fill-black" />
              <Star className="text-gray-300" />
            </div>
            <p className="text-[11px] text-gray-400">Based on 70,914 ratings</p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-6">
            <div className="italic text-[15px] text-gray-700">
              "Very quick delivery and fab poster thank you. Had this made up for my wedding and I can't wait to share it with all of our guests."
              <p className="not-italic text-xs font-bold mt-4 uppercase tracking-widest text-[#a0b695] flex items-center gap-2">
                <Check className="w-3 h-3" /> Verified buyer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER ── */}
      <section className="bg-[#C2D8B8] py-20 text-center">
        <div className="max-w-[600px] mx-auto px-4">
          <p
            className="m-0 opacity-100 px-3 sm:px-[52px] text-[32px] md:text-[42px] mb-4 text-white leading-tight"
            style={{ fontFamily: "Arsenal" }}
          >
            Stay up to date
          </p>
          <p className="text-[15px] text-white/80 mb-10 font-medium tracking-wide">
            Receive exclusive offers and discover new arrivals.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="example@mail.com"
              className="flex-1 py-4 px-6 text-sm outline-none rounded-s-full sm:rounded-s-full rounded-none"
            />
            <button className="bg-black text-white px-10 py-4 text-xs font-bold tracking-widest uppercase rounded-e-full sm:rounded-e-full rounded-none hover:bg-gray-900 transition-all">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* ── 8. SEO CONTENT ── */}
      <section className="max-w-5xl mx-auto px-8 py-20 text-center border-t border-gray-100">
        <h2 className="text-[24px] md:text-[30px] font-bold mb-8" style={{ fontFamily: "Arsenal" }}>
          Wall art online at Muro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-[14px] text-gray-600 leading-relaxed">
          <div>
            <h3 className="font-bold text-black mb-2 uppercase tracking-widest">Large selection</h3>
            <p>Muro offers wall art for every occasion, season, and style, with posters, prints, and canvas art prints designed for self-expression. From Scandinavian-inspired designs to modern photography.</p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-2 uppercase tracking-widest">Affordable Art</h3>
            <p>We make it fun to decorate with high-quality wall art - at affordable prices to make you smile. Find fantastic art at happy prices with wall art from Muro!</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
