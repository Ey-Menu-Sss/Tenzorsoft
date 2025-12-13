import { useEffect, useRef, useState } from "react";

const images = [
  "./image/tenzor.avif",
  "./image/Litsenziya.avif",
  "./image/Kaspersky.avif",
  "./image/Tastiqnoma.avif",
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0);
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(350);
//   const [origin, setOrigin] = useState("center");

  useEffect(() => {
    if (containerRef.current) {
      const w = containerRef.current.offsetWidth;
      setSlideWidth(w * 0.22);
    }
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const getOffset = (index) => {
    if (index === active) return 0;
    if ((active + 1) % images.length === index) return 1;
    if ((active - 1 + images.length) % images.length === index) return -1;

    return 2;
  };

  
    // const rect = e.currentTarget.getBoundingClientRect();
    // const x = rect.left + rect.width / 2;
    // const y = rect.top + rect.height / 2;

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl h-[366px] overflow-hidden"
      >
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {images.map((src, i) => {
            const offset = getOffset(i);

            if (![-1, 0, 1].includes(offset)) return null;

            const scale = offset === 0 ? 0.85 : 0.75;
            const translateX = offset * slideWidth;

            const handleClick = () => {
              switch (offset) {
                case 0:
                //   setOrigin(`${x}px ${y}px`);
                  setOpen(true);
                  break;
                case -1:
                  prev();
                  break;
                case 1:
                  next();
                  break;
              }
            };

            return (
              <img
                key={i}
                src={src}
                onClick={handleClick}
                className="absolute border border-gray-300 rounded-xl transition-all duration-700 cursor-pointer animate-zoomIn"
                style={{
                  height: "370px",
                  width: "550px",
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: offset === 0 ? 1 : 0.75,
                  zIndex: offset === 0 ? 20 : 10,
                }}
              />
            );
          })}
        </div>
        {open && (
          <div className="fixed inset-0 z-50 bg-white/1 backdrop-blur-md flex items-center justify-center">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full
                 bg-gray-400 hover:bg-white/30
                 text-white text-2xl transition"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={images[active]}
              style={{ transformOrigin: origin }}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl
                 animate-zoomIn"
            />
          </div>
        )}
      </div>
    </div>
  );
}
