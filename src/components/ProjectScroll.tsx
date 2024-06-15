"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "SSB Septic Pumping",
    description:
      "I created this website for a Septic Pumping and Cleaning Business that didn't need special features so I figured to use Astro JS as it optimizes content based sites. It was great practice of front end fundamentals while exploring a new technology as well.",
    tech: "Technologies used: Astro JS, HTML, CSS, Tailwind, JavaScript",
    link: "https://ssbseptic.com",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/ssbseptic.png"
          width={400}
          height={400}
          className="object-cover"
          alt="SSB Septic Pumping"
        />
      </div>
    ),
  },
  {
    title: "Fantasy Basketball Project",
    description:
      "This is one of my first ever projects, the UI/UX could be vastly improved as I didn't know much front end at the time. The project involved me using data analytics and math such as Euclidian distance to try and project the stats of NBA Players in the upcoming season",
    tech: "Technologies used: Django, Python, Jupyter Notebook, SQLite",
    link: "https://joban.pythonanywhere.com",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/fball.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Fantasy Basketball Project"
        />
      </div>
    ),
  },
  {
    title: "Windsor Bhangra Club",
    description:
      "I made this website for a charity organization that focus on promoting Punjabi culture and supporting the local community. It helped me hone my craft and explore the new features of Next v14. I exemplified data fetching, payment forms, contact forms, and basic design skills throughout.",
    tech: "Technologies used: Next JS, Tailwind CSS, Contentful, Node JS",
    link: "https://windsorbhangraclub.com",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/windsorbhangraclub.png"
          width={400}
          height={400}
          className="object-cover"
          alt="Windsor Bhangra Club"
        />
      </div>
    ),
  },
];

export function ProjectScroll() {
  return (
    <div className="p-4 md:p-6">
      <StickyScroll content={content} />
    </div>
  );
}
