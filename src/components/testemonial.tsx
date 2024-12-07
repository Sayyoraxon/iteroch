"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Testemonial() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-[140px]" style={{backgroundImage: "url(/BG.png)"}}>
      <p className="max-w-[1000px] mx-auto font-semibold text-[18px] leading-[26px] text-[#ff8911]">
        Testemonial
      </p>
      <p className="max-w-[1000px] mt-4 mx-auto font-semibold text-[64px] leading-[72px] text-[#fff]">
        Trusted by more than 1000+ company’s around the world
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <p className="mt-4 text-base leading-6 text-[#1a1d27] text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor
      </p>
    </>
  );
};

const data = [
  {
    category: "Business Analyst",
    title: "Paula Brooks",
    src: "/testemonial1.svg",
    content: <DummyContent />,
  },
  {
    category: "Business Analyst",
    title: "Paula Brooks",
    src: "/testemonial2.svg",
    content: <DummyContent />,
  },
  {
    category: "Business Analyst",
    title: "Paula Brooks",
    src: "/testemonial3.svg",
    content: <DummyContent />,
  },

  {
    category: "Business Analyst",
    title: "Paula Brooks",
    src: "/testemonial4.svg",
    content: <DummyContent />,
  },
  {
    category: "Business Analyst",
    title: "Paula Brooks",
    src: "/testemonial5.svg",
    content: <DummyContent />,
  },
];
