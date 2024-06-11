"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

// image srcs
import ssb from "../../public/ssbseptic.png";
import windsorbhangraclub from "../../public/windsorbhangraclub.png";
import fball from "../../public/fball.png";

export function HomeWobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-secondary min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            About Me
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Learn more about my background, my journey as a full stack
            developer, and my passion for technology.
          </p>
          <div className="mt-4">
            <Link href="/about">
              <button className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-700">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Resume
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            View my resume to see a detailed overview of my professional
            experience, skills, and education.
          </p>
          <div className="mt-4">
            <Link href="/resume" passHref>
              <button className="inline-block px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition">
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-dark min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
          <div className="max-w-sm lg:w-1/3">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Projects
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Explore the projects I&apos;ve worked on, showcasing my skills in
              full stack development.
            </p>
            <div className="mt-4">
              <Link href="/projects">
                <button className="inline-block px-8 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:w-2/3 space-y-4 lg:space-y-0 lg:space-x-4 mt-8 lg:mt-0">
            <div className="relative p-4 lg:ml-16 w-32 h-32 lg:w-48 lg:h-48 transform rotate-8">
              <Link href="https://joban.pythonanywhere.com">
                <div className="absolute w-32 h-32 md:w-64 md:h-64 transform -rotate-12 -translate-x-12 hover:scale-105 focus:scale-105 transition-transform duration-200 cursor-pointer">
                  <Image
                    src={fball}
                    width={200}
                    height={200}
                    alt="Fantasy Basketball Project"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </Link>
              <Link href="https://windsorbhangraclub.com">
                <div className="absolute w-32 h-32 md:w-64 md:h-64 hover:scale-105 focus:scale-105 transition-transform duration-200 cursor-pointer">
                  <Image
                    src={windsorbhangraclub}
                    width={200}
                    height={200}
                    alt="Website for charity organization"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </Link>
              <Link href="https://ssbseptic.com">
                <div className="absolute w-32 h-32 md:w-64 md:h-64 transfrom translate-x-12 rotate-12 hover:scale-105 focus:scale-105 transition-transform duration-200 cursor-pointer">
                  <Image
                    src={ssb}
                    width={200}
                    height={200}
                    alt="Website for Septic Pumping Business"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
