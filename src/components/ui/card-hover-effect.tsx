"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "w-full flex flex-wrap mt-[56px]",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group p-2 h-[400px] w-[416px] grow"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image src={item.link} alt="photo" fill objectFit="cover"/>
            <CardDescription>
              <p className="font-medium text-[12px] leading-6 text-[#7f2777]">
                TECH
              </p>
              <p className="mt-2 font-semiblod text-[24px] leading-7 text-[#1a1d27]">
                {item.title}
              </p>
              <p className="text-base leading-16 text-[#1a1d27]">
                {item.description}
              </p>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " h-full w-full overflow-hidden bg-inherit border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 w-full h-full">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div   className={cn(
        "mt-8 w-[368px] h-[116px] py-5 px-6 bg-white absolute bottom-5 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
  );
};
