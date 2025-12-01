import { useEffect, useRef, useState } from "react";

const images = [
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
    "./image/itparkt.jpg",
];

export default function Carousel() {
    const [active, setActive] = useState(0);
    const timeout = useRef(null);

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

    return (
        <div className=" w-full flex justify-center ">
            <div className="relative w-full max-w-7xl h-[400px] overflow-hidden">

                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white px-3 py-2 rounded-full" >
                    ❮
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                    {images.map((src, i) => {
                        const offset = i - active;
                        const scale = i === active ? 1 : 0.8; //размер
                        const translateX = offset * 400; //расстаяния

                        return (
                            <img key={i} src={src} className="absolute border border-gray-300 rounded-xl transition-all duration-700"
                                style={{ height: "350px", transform: `translateX(${translateX}px) scale(${scale})`,
                                    opacity: i === active ? 1 : 0.6, 
                                    zIndex: i === active ? 20 : 10,
                                }}
                            />
                        );
                    })}

                </div>

                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white px-3 py-2 rounded-full">
                    ❯
                </button>
            </div>
        </div>
    );
}
