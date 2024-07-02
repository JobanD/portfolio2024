import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsTab from "@/components/SkillsTab";
import ResumeTab from "@/components/ResumeTab";
import ExperienceTab from "@/components/ExperienceTab";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-16 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">Joban Dhindsa</h1>
        <p className="mt-4 text-xl">Full Stack Developer</p>
      </header>
      <div className="flex-grow w-full max-w-4xl mx-auto mt-8 flex flex-col">
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="flex justify-center space-x-2 mb-4">
            <TabsTrigger
              value="skills"
              className="flex-1 px-4 py-2 text-center"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="flex-1 px-4 py-2 text-center"
            >
              Resume
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="flex-1 px-4 py-2 text-center"
            >
              Experience
            </TabsTrigger>
          </TabsList>
          <div className="flex-grow">
            <TabsContent value="skills">
              <SkillsTab />
            </TabsContent>
            <TabsContent value="resume">
              <ResumeTab />
            </TabsContent>
            <TabsContent value="experience">
              <ExperienceTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
