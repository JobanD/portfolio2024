"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import ssbseptic from "../../public/ssbseptic.png";
import fball from "../../public/fball.png";
import wbc from "../../public/windsorbhangraclub.png";
import wip from "../../public/wip.jpg";

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
          src={ssbseptic}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="object-cover w-full h-full"
          alt="SSB Septic Pumping"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>
    ),
  },
  {
    title: "Freight Management System",
    description:
      "A custom web solution for a business that hauls vehicles, featuring dispatching orders to drivers, viewing historical data for reports, generating BOLs, and integrating with Motive. Built with a focus on performance, security, and scalability.",
    tech: "Technologies used: Next.js, TypeScript, Go, PostgreSQL, Cloudflare, React Native, Supabase",
    link: "https://github.com/JobanD/sb-trucking-admin",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src={wip}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="object-cover w-full h-full"
          alt="Freight Management System"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
          src={fball}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="object-cover w-full h-full"
          alt="Fantasy Basketball Project"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
          src={wbc}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="object-cover w-full h-full"
          alt="Windsor Bhangra Club"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
