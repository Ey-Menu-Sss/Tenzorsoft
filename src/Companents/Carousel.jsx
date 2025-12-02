import { useEffect, useRef, useState } from "react";

const images = [
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
];

export default function Carousel() {
    const [active, setActive] = useState(0);
    const containerRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(350);

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

    return (
        <div className="w-full flex justify-center">
            <div ref={containerRef} className="relative w-full max-w-7xl h-[366px] overflow-hidden" >
                <div className="relative w-full h-[400px] flex items-center justify-center">
                    {images.map((src, i) => {
                        const offset = getOffset(i);
                        const scale = offset === 0 ? 0.85 : 0.75;
                        const translateX = offset * slideWidth;

                        const handleClick = () => {
                            if (offset === -1) prev();
                            if (offset === 1) next();
                        };

                        return (
                            <img
                                key={i}
                                src={src}
                                onClick={handleClick}
                                className="absolute border border-gray-300 rounded-xl transition-all duration-700 cursor-pointer"
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
            </div>
        </div>
    );
}
