import { useEffect, useRef, useState } from "react";

const images = [
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",

];

export default function Carousel() {
    const [active, setActive] = useState(0);
    const timeout = useRef(null);

    const containerRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(350);

    useEffect(() => {
        if (containerRef.current) {
            const w = containerRef.current.offsetWidth;
            setSlideWidth(w * 0.25);
        }
    }, []);

    const next = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        timeout.current = setTimeout(next, 3000);
        return () => clearTimeout(timeout.current);
    }, [active]);

    const getWrappedOffset = (index, active, length) => {
        let offset = index - active;

        if (offset > length / 2) offset -= length;
        if (offset < -length / 2) offset += length;

        return offset;
    };

    return (
        <div className="w-full flex justify-center">
            <div ref={containerRef} className="relative w-full max-w-7xl  h-[366px] overflow-hidden">

                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white px-3 py-2 rounded-full">
                    ❮
                </button>

                <div className="relative w-full h-[400px] flex items-center justify-center">
                    {images.map((src, i) => {
                        const offset = getWrappedOffset(
                            i,
                            active,
                            images.length
                        );

                        const scale = i === active ? 0.8 :0.7;
                        const translateX = offset * slideWidth;

                        return (
                            <img key={i} src={src} className="absolute h-[200px] border border-gray-300 rounded-xl transition-all duration-700"
                                style={{
                                    height: "370px", 
                                    width: "550px",
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    opacity: i === active ? 1 : 0.8, //празрачнось
                                    zIndex: i === active ? 20 : 10, //зади стояший
                                }}
                            />
                        );
                    })}
                </div>


                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white px-3 py-2 rounded-full" >
                    ❯
                </button>
            </div>
        </div>
    );
}
