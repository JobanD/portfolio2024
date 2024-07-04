"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    time: "Mar. 2024 - Present",
    title: "Full Stack Freight Management Application",
    company: "Network Logistics, Toronto, ON",
    details:
      "Developing comprehensive freight management solution for a vehicle transportation company, enabling efficient management of deliveries to/from auctions, dealerships, etc.",
  },
  {
    time: "May 2023 - Present",
    title: "Full Stack Engineer",
    company: "Canada Clean Fuels, North York, ON",
    details:
      "Developed dynamic and responsive web apps using MERN and Django/Next.js stacks.",
  },
  {
    time: "Mar. 2023 - Aug. 2023",
    title: "React Developer",
    company: "Doxa Fantasy, Vancouver, BC",
    details: "Developed the MVP for a fantasy sports platform",
  },
  {
    time: "Sep. 2020 - Dec. 2021",
    title: "Front End Developer",
    company: "University of Windsor, Windsor, ON",
    details: "Enhanced the University of Windsor's website using Drupal.",
  },
  {
    time: "Sep. 2017 - May 2020",
    title: "Web Developer",
    company: "Odette Commerce Society, Windsor, ON",
    details: "Developed OCS's website, serving 1600+ students.",
  },
];

export default function ExperienceTimeline() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4" style={{ position: "relative", zIndex: 1 }}>
      <style jsx>{`
        .vertical-timeline-element-icon,
        .vertical-timeline-element-content {
          visibility: visible !important;
          opacity: 1 !important;
          transform: none !important;
        }

        .vertical-timeline-element-content {
          background-color: white !important;
          color: black !important;
        }

        .vertical-timeline-element-content-arrow {
          border-right: 7px solid white !important;
        }

        .vertical-timeline-element-title {
          color: black !important;
        }

        .vertical-timeline-element-subtitle {
          color: black !important;
        }

        .vertical-timeline-element p {
          color: black !important;
        }

        @media (min-width: 769px) {
          .vertical-timeline {
            flex-direction: row !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
          }

          .vertical-timeline-element {
            display: inline-block !important;
            vertical-align: top !important;
            margin-right: 20px !important;
          }

          .vertical-timeline-element-content-arrow {
            display: none !important;
          }

          .vertical-timeline-element-date {
            margin-top: 0 !important;
          }
        }
      `}</style>
      <VerticalTimeline layout={isMobile ? "1-column" : "2-columns"}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.time}
            icon={<Calendar />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            visible={true}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "black" }}
            >
              {exp.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "black" }}
            >
              {exp.company}
            </h4>
            <p style={{ color: "black" }}>{exp.details}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
