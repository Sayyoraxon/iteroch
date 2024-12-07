"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Type definition for the Card object
type CardType = {
  title: string;
  src: string;
};

// CardProps to type the props for the Card component
type CardProps = {
  card: CardType;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

// Memoized Card component for better performance
export const Card = React.memo(
  ({ card, index, hovered, setHovered }: CardProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden w-[306px] h-[420px] transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
      style={{ backgroundImage: "url(/BG_.png)" }}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          <p>{card.title}</p>
          <p className="text-base leading-6 text-white opacity-60">
            Senior Developer
          </p>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// FocusCards component that takes an array of cards
export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-[62px] w-full flex flex-wrap gap-6 justify-center md:justify-between">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
