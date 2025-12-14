import { useEffect, useRef, useState } from "react";

const images = [
  "./image/tenzor.avif",
  "./image/Litsenziya.avif",
  "./image/Kaspersky.avif",
  "./image/Tastiqnoma.avif",
];

export default function Carousel() {
  const containerRef = useRef(null);
  const activeRef = useRef(null);

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [slideWidth, setSlideWidth] = useState(350);
  const [origin, setOrigin] = useState("center");

  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth * 0.22);
    }
  }, []);

  const next = () => setActive((v) => (v + 1) % images.length);

  const prev = () => setActive((v) => (v - 1 + images.length) % images.length);

  const offsetOf = (index) => {
    if (index === active) return 0;
    if ((active + 1) % images.length === index) return 1;
    if ((active - 1 + images.length) % images.length === index) return -1;
    return null;
  };

  const openImage = () => {
    if (activeRef.current) {
      const rect = activeRef.current.getBoundingClientRect();
      setOrigin(
        `${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`
      );
    }
    setOpen(true);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl h-[366px] overflow-hidden"
      >
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {images.map((src, i) => {
            const offset = offsetOf(i);
            if (offset === null) return null;

            const scale = offset === 0 ? 0.85 : 0.75;
            const translateX = offset * slideWidth;

            const onClick =
              offset === 0 ? openImage : offset === -1 ? prev : next;

            return (
              <img
                key={i}
                ref={offset === 0 ? activeRef : null}
                src={src}
                onClick={onClick}
                className="absolute rounded-xl border border-gray-300 cursor-pointer transition-all duration-700"
                style={{
                  width: 550,
                  height: 370,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: offset === 0 ? 1 : 0.75,
                  zIndex: offset === 0 ? 20 : 10,
                }}
              />
            );
          })}
        </div>

        {open && (
          <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full
             bg-black/50 hover:bg-black/70
             text-white flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={images[active]}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl animate-zoomIn"
              style={{ transformOrigin: origin }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
