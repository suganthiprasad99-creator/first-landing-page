"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageSrc: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!track || !scrollContainer || products.length === 0) return;

    const handleScroll = () => {
      const rect = track.getBoundingClientRect();
      const trackHeight = rect.height;
      
      const totalScrollable = trackHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top; 
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const maxScrollLeft = scrollContainer.scrollWidth - window.innerWidth;
      
      scrollContainer.style.transform = `translateX(-${progress * maxScrollLeft}px)`;

      const progressPerItem = 1 / products.length;
      const calculatedIndex = Math.floor(progress / progressPerItem);
      const newIndex = Math.max(0, Math.min(products.length - 1, calculatedIndex));
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products.length]);

  const navigateToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    const targetPercentage = index / (products.length - 1);
    
    window.scrollTo({
      top: window.scrollY + rect.top + (targetPercentage * totalScrollable),
      behavior: "smooth"
    });
  };

  return (
    <div 
      ref={trackRef} 
      style={{ height: `${100 + (products.length * 85)}vh` }} 
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 bg-[#F8F8F8] dark:bg-[#161616] select-none">
        
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center px-4 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            Our Products
          </span>
          <h2 className="text-3xl md:text-[64px] font-extrabold text-slate-900 dark:text-white tracking-tight">
            <span className="text-[#0A6CDB]">Solutions</span> for Every <br/>Business Need
          </h2>
        </div>

        {/* Horizontal moving viewport container */}
        <div className="relative flex-1 flex items-center overflow-hidden w-full">
          <div
            ref={scrollContainerRef}
            style={{
              paddingLeft: "calc(50vw - 370px)",
              paddingRight: "calc(50vw - 370px)",
            }}
            className="flex items-center gap-12 will-change-transform transition-transform duration-150 ease-out"
          >
            {products.map((product, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={product.id}
                  onClick={() => navigateToCard(index)}
                  className={`
                    shrink-0
                    w-[85vw]
                    max-w-[740px]
                    h-[55vh]            /* Slightly increased container height for extra breathing room */
                    max-h-[500px]
                    rounded-[2.5rem]
                    p-8
                    md:p-10
                    flex
                    flex-col
                    items-center
                    justify-between
                    bg-white
                    dark:bg-[#0C0C0C]
                    border border-slate-100 dark:border-zinc-900/80
                    cursor-pointer
                    transition-all
                    duration-500
                    ease-out
                    ${isActive ? "scale-100 opacity-100 shadow-2xl shadow-slate-200/50 dark:shadow-none" : "scale-92 opacity-20"}
                  `}
                >
                  {/* --- SIGNIFICANTLY LARGER PRODUCT IMAGE CONTAINER --- */}
                  <div className="relative w-full h-[1080px] max-h-[340px] flex items-center justify-center overflow-hidden scale-110 transition-transform duration-500">
                    {product.imageSrc ? (
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        /* p-0 eliminates all internal buffer space so the file expands to absolute limits */
                        className="object-contain p-0"
                        sizes="(max-width:768px) 85vw, 740px"
                        priority={isActive}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
                        Mockup Image Missing
                      </div>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className={`mt-4 text-xs md:text-sm font-semibold tracking-wide text-slate-500 text-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}>
                    {product.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Area with Fixed Nav and Dynamic Descriptions */}
        <div className="shrink-0 w-full flex flex-col items-center gap-4">
          {/* Product Tabs */}
          <div className="flex justify-center items-center w-full px-4">
            <div className="flex items-center gap-1 dark:bg-[#1F1F1F] bg-slate-200/50 backdrop-blur-sm p-1.5 rounded-full w-max max-w-full overflow-x-auto border border-slate-200/40 no-scrollbar text-[#8D8A95] dark: text-[#7A7A7A]">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => navigateToCard(index)}
                  className={`
                    px-5
                    py-2
                    text-xs
                    md:text-sm
                    font-semibold
                    rounded-full
                    whitespace-nowrap
                    transition-all
                    duration-300
                    outline-none
                    ${activeIndex === index
                      ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-zinc-300"
                    }
                  `}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-2xl mx-auto px-6 relative h-[60px] flex justify-center overflow-hidden">
            {products.map((product, index) => {
              return (
                <p
                  key={`desc-${product.id}`}
                  className={`
                    absolute
                    dark:text-[#C2C2C2]
                    text-[#1D1929]
                    inset-x-4
                    top-0
                    text-center
                    text-sm
                    md:text-base
                    leading-relaxed
                    transition-all
                    duration-300
                    pointer-events-none
                    ${index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}
                >
                  {product.description}
                </p>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}