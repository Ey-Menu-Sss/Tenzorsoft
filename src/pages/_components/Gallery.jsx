import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function GalleryCarousel() {
  const galleryImages = [
    { src: "/gallery/image2.avif", alt: "Image 2" },
    { src: "/gallery/image3.avif", alt: "Image 3" },
    { src: "/gallery/image4.avif", alt: "Image 4" },
    { src: "/gallery/image5.avif", alt: "Image 5" },
    { src: "/gallery/image6.avif", alt: "Image 6" },
    { src: "/gallery/image7.avif", alt: "Image 7" },
    { src: "/gallery/image8.avif", alt: "Image 8" },
    { src: "/gallery/image10.avif", alt: "Image 10" },
    { src: "/gallery/image11.avif", alt: "Image 11" },
    { src: "/gallery/image12.avif", alt: "Image 12" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState("center");

  const intervalRef = useRef(null);
  const activeRef = useRef(null);

  const { t } = useTranslation();

  const prev = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setCurrentIndex((v) => (v - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const next = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setCurrentIndex((v) => (v + 1) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const openImage = () => {
    if (!activeRef.current) return;
    const rect = activeRef.current.getBoundingClientRect();
    setOrigin(`${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((v) => (v + 1) % galleryImages.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center space-y-4 pb-20">
      <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[202px] h-[50px] items-center justify-center">
        <img src="/logo/phcertificate.png" className="w-[20px]" />
        <h1 className="text-2xl">{t("gellerySection.badge")}</h1>
      </button>

      <h1 className="font-bold text-[24px] md:text-4xl text-center">
        {t("gellerySection.title")}
      </h1>

      <p className="text-center text-[16px] md:text-xl w-[295px] md:w-[690px]">
        {t("gellerySection.description")}
      </p>

      <div className="relative w-full max-w-6xl h-[450px] mt-10">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-blue-600 text-white flex items-center justify-center text-2xl  w-10 h-10 rounded-full"
        >
          <span className="mb-1.5">‹</span>
        </button>

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {galleryImages.map((img, i) => {
            let offset = i - currentIndex;
            if (offset > galleryImages.length / 2) offset -= galleryImages.length;
            if (offset < -galleryImages.length / 2) offset += galleryImages.length;

            let className = "absolute transition-all duration-700";

            if (offset === 0)
              className += " z-20 scale-110";
            else if (offset === 1)
              className += " translate-x-[220px] z-15 scale-90 opacity-90";
            else if (offset === 2)
              className += " translate-x-[440px] z-10 scale-80 opacity-60"; 
            else if (offset === -1)
              className += " -translate-x-[220px] z-15 scale-90 opacity-90";
            else if (offset === -2)
              className += " -translate-x-[440px] z-10 scale-80 opacity-60";
            else
              className += " opacity-0 pointer-events-none";

            return (
              <div
                key={i}
                ref={offset === 0 ? activeRef : null}
                onClick={offset === 0 ? openImage : undefined}
                className={className}
                style={{
                  width: 280,
                  height: 380,
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                  cursor: offset === 0 ? "zoom-in" : "pointer",
                }}
              >
                <img src={img.src} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-blue-600 text-white flex items-center justify-center text-2xl w-10 h-10 rounded-full"
        >
          <span className="mb-1.5">›</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
          >
            ✕
          </button>

          <img
            src={galleryImages[currentIndex].src}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl animate-zoomIn"
            style={{ transformOrigin: origin }}
          />
        </div>
      )}
    </div>
  );
}
