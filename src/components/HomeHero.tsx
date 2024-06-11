"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/hero.webp";

export default function HomeHero() {
  return (
    <div className="p-4 lg:p-8">
      <HeroHighlight className="sm:flex justify-center items-center">
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-2 lg:mt-0 lg:ml-8">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl p-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-center mx-auto lg:mx-0"
        >
          Hi, my name is{" "}
          <span className="text-secondary-light">Joban Dhindsa</span> and I am a{" "}
          <Highlight className="text-black dark:text-white">
            Full Stack Developer
          </Highlight>
          <div className="flex justify-center mt-8">
            <Link
              href="/projects"
              className="inline-block px-12 py-3 text-lg font-semibold text-white"
            >
              <button className="p-[4px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light rounded-lg" />
                <div className="px-8 py-2 bg-neutral-700 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  View my Work
                </div>
              </button>
            </Link>
          </div>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
