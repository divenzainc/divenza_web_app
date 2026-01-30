"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  ShoppingCart,
  Monitor,
  CreditCard,
  ExternalLink,
  ArrowRight,
  Package,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  shadowColor: string;
  accentColor: string;
  officialSite: string;
  images: string[];
}

const products: Product[] = [
  {
    id: "di-seller",
    name: "DI SELLER",
    tagline: "E-commerce Simplified",
    description:
      "A powerful e-commerce platform designed to help businesses sell smarter. From inventory management to seamless checkout experiences, DI Seller handles it all.",
    icon: <ShoppingCart className="w-7 h-7" />,
    features: [
      "Multi-channel selling",
      "Real-time inventory sync",
      "Advanced analytics dashboard",
      "Automated order processing",
    ],
    gradient: "from-[#3F3369] to-[#5a4d8a]",
    shadowColor: "rgba(63,51,105,0.3)",
    accentColor: "#3F3369",
    officialSite: "https://diseller.divenza.com",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "di-tech",
    name: "DI TECH CLOUD",
    tagline: "Tech Solutions Hub",
    description:
      "Your one-stop destination for technology solutions. DI Tech connects businesses with cutting-edge tools, services, and expert support to drive digital transformation.",
    icon: <Monitor className="w-7 h-7" />,
    features: [
      "IT infrastructure management",
      "Cloud solutions",
      "Technical consulting",
      "24/7 Support system",
    ],
    gradient: "from-[#32A790] to-[#4bc4a8]",
    shadowColor: "rgba(50,167,144,0.3)",
    accentColor: "#32A790",
    officialSite: "https://ditech.divenza.com",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "di-pos",
    name: "DI POS CLOUD",
    tagline: "Point of Sale Reimagined",
    description:
      "A modern, intuitive point-of-sale system built for retail excellence. Fast transactions, smart inventory, and insightful reports—all in one elegant solution.",
    icon: <CreditCard className="w-7 h-7" />,
    features: [
      "Lightning-fast checkout",
      "Offline mode support",
      "Staff management",
      "Sales reporting & insights",
    ],
    gradient: "from-[#3F3369] to-[#32A790]",
    shadowColor: "rgba(63,51,105,0.25)",
    accentColor: "#3F3369",
    officialSite: "https://dipos.divenza.com",
    images: [
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop",
    ],
  },
];

// Image Carousel Component
interface ImageCarouselProps {
  images: string[];
  productName: string;
  accentColor: string;
  autoPlayInterval?: number;
}

const ImageCarousel = ({
  images,
  productName,
  accentColor,
  autoPlayInterval = 4000,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const hasMultipleImages = images.length > 1;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play effect
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, goToNext, autoPlayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Subtle overlay for better contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 60%, ${accentColor}15 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Only show if multiple images */}
      {hasMultipleImages && (
        <>
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              goToPrevious();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 15px -3px rgba(0, 0, 0, 0.15)",
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: accentColor }} />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              goToNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 15px -3px rgba(0, 0, 0, 0.15)",
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" style={{ color: accentColor }} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="transition-all duration-300"
                aria-label={`Go to image ${index + 1}`}
              >
                <motion.div
                  animate={{
                    width: index === currentIndex ? 20 : 6,
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full"
                  style={{
                    background:
                      index === currentIndex
                        ? accentColor
                        : "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductListSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-[#fafafa]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(63,51,105,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(50,167,144,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-[15%] left-[8%]"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-8 h-8 text-[#32A790] opacity-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] right-[5%]"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Sparkles className="w-10 h-10 text-[#3F3369] opacity-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.1) 0%, rgba(50,167,144,0.1) 100%)",
              border: "1px solid rgba(63,51,105,0.2)",
            }}
          >
            <Package className="w-4 h-4" style={{ color: "#3F3369" }} />
            <span className="text-sm font-medium" style={{ color: "#3F3369" }}>
              Our Products
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Solutions Built for </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
              }}
            >
              Your Success
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our flagship products designed to streamline operations,
            boost sales, and transform the way you do business.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-8 md:space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative rounded-3xl overflow-hidden ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                  boxShadow: `0 15px 50px -15px ${product.shadowColor}`,
                }}
              >
                {/* Border gradient on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    padding: "2px",
                    background: `linear-gradient(135deg, ${product.accentColor} 0%, ${product.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Product Image Section with Carousel */}
                <div className="relative lg:w-2/5 h-64 sm:h-72 lg:h-auto min-h-[280px] lg:min-h-[380px] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5`}
                  />

                  {/* Image Carousel Container */}
                  <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
                    <ImageCarousel
                      images={product.images}
                      productName={product.name}
                      accentColor={product.accentColor}
                      autoPlayInterval={4000}
                    />
                  </div>
                </div>

                {/* Product Content Section */}
                <div className="relative lg:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Product Name - Clickable */}
                  <Link href={`/products/${product.id}`}>
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-2xl md:text-3xl font-bold text-secondary mb-2 cursor-pointer inline-flex items-center gap-3 group/title"
                    >
                      {product.name}
                      <ArrowRight
                        className="w-5 h-5 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all"
                        style={{ color: product.accentColor }}
                      />
                    </motion.h3>
                  </Link>

                  {/* Tagline */}
                  <p
                    className="text-sm font-semibold mb-4"
                    style={{ color: product.accentColor }}
                  >
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + fIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* View Product Button */}
                    <Link href={`/products/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${product.gradient.includes("3F3369") ? "#3F3369" : "#32A790"} 0%, ${product.gradient.includes("32A790") ? "#32A790" : "#5a4d8a"} 100%)`,
                          boxShadow: `0 10px 30px -10px ${product.shadowColor}`,
                        }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>

                    {/* Visit Official Site */}
                    <a
                      href={product.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300"
                        style={{
                          color: product.accentColor,
                          background: `${product.accentColor}10`,
                          border: `1px solid ${product.accentColor}30`,
                        }}
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <div
            className="inline-block rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(63,51,105,0.03) 0%, rgba(50,167,144,0.03) 100%)",
              border: "1px solid rgba(63,51,105,0.1)",
            }}
          >
            {/* Decorative blurs */}
            <div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(63,51,105,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(50,167,144,0.1) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-secondary">Need a Custom </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(130deg, #3F3369 0%, #32A790 100%)",
                  }}
                >
                  Solution?
                </span>
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-5">
                Our products are just the beginning. Let&apos;s explore how we can create something tailored specifically for your business needs. And don&apos;t worry about being limited by budget — we&apos;ll design a solution that fits.
              </p>

              {/* Investment Quote Callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative max-w-lg mx-auto mb-6 px-5 py-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(50,167,144,0.08) 0%, rgba(63,51,105,0.08) 100%)",
                  border: "1px solid rgba(50,167,144,0.2)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, #32A790 0%, #4bc4a8 100%)",
                      boxShadow: "0 4px 12px -3px rgba(50,167,144,0.4)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
                    Your budget isn&apos;t just a cost, it&apos;s an{" "}
                    <span className="text-[#32A790] font-semibold">investment</span>
                    , and we take responsibility for ensuring you see a{" "}
                    <span className="text-[#3F3369] font-semibold">strong return</span> on it.
                  </p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)",
                  boxShadow: "0 10px 40px -10px rgba(63,51,105,0.5)",
                }}
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductListSection;
