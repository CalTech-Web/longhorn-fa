"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const cards = [
  { src: "/hero-1.jpg", alt: "Fire alarm planning", label: "Office Tower Project" },
  { src: "/hero-2.jpg", alt: "Blueprint design", label: "Blueprint Review" },
  { src: "/hero-3.jpg", alt: "Construction site", label: "New Construction" },
  { src: "/hero-4.jpg", alt: "Fire alarm inspection", label: "System Inspection" },
];

export default function HeroCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex justify-center">
      <div className="relative w-[480px] h-[380px]">
        {/* Static back card (always visible, peeking out) */}
        <div
          className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-lg"
          style={{ top: 0, left: 0, zIndex: 1, transform: "rotate(-4deg)" }}
        >
          <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5">
              {cards[(active + 2) % cards.length].label}
            </span>
          </div>
          <Image
            src={cards[(active + 2) % cards.length].src}
            alt={cards[(active + 2) % cards.length].alt}
            width={420}
            height={280}
            className="w-full h-[calc(100%-28px)] object-cover"
          />
        </div>

        {/* Static middle card (always visible) */}
        <div
          className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-xl"
          style={{ top: 30, left: 25, zIndex: 2, transform: "rotate(-2deg)" }}
        >
          <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5">
              {cards[(active + 1) % cards.length].label}
            </span>
          </div>
          <Image
            src={cards[(active + 1) % cards.length].src}
            alt={cards[(active + 1) % cards.length].alt}
            width={420}
            height={280}
            className="w-full h-[calc(100%-28px)] object-cover"
          />
        </div>

        {/* Front card — fades between images */}
        <div
          className="absolute w-[420px] h-[300px] rounded-lg overflow-hidden shadow-2xl"
          style={{ top: 65, left: 50, zIndex: 3, transform: "rotate(1deg)" }}
        >
          <div className="bg-[#e8e8e8] px-3 py-2 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-gray-500 bg-white rounded px-2 py-0.5 transition-opacity duration-700">
              {cards[active].label}
            </span>
          </div>
          <div className="relative w-full h-[calc(100%-28px)]">
            {cards.map((card, i) => (
              <Image
                key={i}
                src={card.src}
                alt={card.alt}
                width={420}
                height={280}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
