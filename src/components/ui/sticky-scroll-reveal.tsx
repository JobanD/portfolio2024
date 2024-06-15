"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    tech: string;
    content?: React.ReactNode | any;
    link?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => (index + 0.5) / cardLength
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--slate-800), var(--gray-900))",
    "linear-gradient(to bottom right, var(--gray-700), var(--gray-900))",
    "linear-gradient(to bottom right, var(--gray-800), var(--black))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        background: backgroundGradient,
      }}
      className="min-h-screen lg:h-auto flex flex-col lg:flex-row justify-center items-center relative space-y-10 lg:space-y-0 lg:space-x-10 rounded-md p-10"
    >
      <div className="relative flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl">
        <div
          className="w-full lg:w-1/2 px-4 overflow-y-auto h-[40rem] scrollbar-hide"
          ref={ref}
          style={{
            msOverflowStyle: "none", // Hide scrollbar for IE and Edge
            scrollbarWidth: "none", // Hide scrollbar for Firefox
          }}
        >
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 lg:my-24 lg:py-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-slate-300 mt-4"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-md text-slate-400 mt-2"
              >
                {item.tech}
              </motion.p>
              <div className="mt-4 lg:hidden">
                {item.link ? (
                  <Link href={item.link} passHref>
                    <div className="block h-full w-full cursor-pointer">
                      {item.content}
                    </div>
                  </Link>
                ) : (
                  item.content
                )}
              </div>
            </div>
          ))}
        </div>
        <motion.div
          className={cn(
            "hidden lg:flex lg:h-[40rem] lg:w-1/2 justify-center items-center rounded-md lg:sticky top-10 overflow-hidden lg:ml-10",
            contentClassName
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: "none" }}
        >
          {content[activeCard].link ? (
            <Link href={content[activeCard].link} passHref>
              <div className="block h-full w-full cursor-pointer">
                {content[activeCard].content}
              </div>
            </Link>
          ) : (
            content[activeCard].content
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
