import { useState, useEffect, useRef } from "react";

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
  const intervalRef = useRef();

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToIndex = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Automatic smooth scrolling
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000); // scroll every 2 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex flex-col items-center mt-16">
      {/* Carousel */}
      <div className="relative w-full max-w-6xl h-[450px] perspective-1000">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full z-10 hover:bg-blue-700"
        >
          ‹
        </button>
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {galleryImages.map((img, i) => {
            const offset = (i - currentIndex + galleryImages.length) % galleryImages.length;
            let className = "absolute transition-all duration-700";
            if (offset === 0) className += " z-10 scale-110"; // center
            else if (offset === 1) className += " translate-x-[200px] scale-90 opacity-80";
            else if (offset === 2) className += " translate-x-[400px] scale-80 opacity-60";
            else if (offset === galleryImages.length - 1) className += " -translate-x-[200px] scale-90 opacity-80";
            else if (offset === galleryImages.length - 2) className += " -translate-x-[400px] scale-80 opacity-60";
            else className += " opacity-0 pointer-events-none";

            return (
              <div
                key={i}
                className={className}
                onClick={() => goToIndex(i)}
                style={{
                  width: "280px",
                  height: "380px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full z-10 hover:bg-blue-700"
        >
          ›
        </button>
      </div>
    </div>
  );
}
