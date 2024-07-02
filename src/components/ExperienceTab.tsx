// ExperienceTab.tsx
import React from "react";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function ExperienceTab() {
  return (
    <div
      className="flex flex-col items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="w-full max-w-4xl px-4" style={{ minHeight: "100vh" }}>
        <ExperienceTimeline />
      </div>
    </div>
  );
}
