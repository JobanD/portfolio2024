import React from "react";
import { Progress } from "./ui/progress";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
      <Progress className="w-1/2" />
    </div>
  );
};

export default LoadingPage;
