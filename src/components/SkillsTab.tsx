import IconCloud from "@/components/magicui/icon-cloud";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const iconSlugs: string[] = [
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "tailwindcss",
  "python",
  "postgresql",
  "postman",
  "mongodb",
  "nodedotjs",
  "express",
  "cloudflare",
  "django",
  "git",
  "github",
  "vercel",
  "astro",
  "go",
  "stripe",
  "atlassian",
  "html5",
  "css3",
  "docker",
  "pandas",
  "numpy",
  "macos",
  "reactquery",
  "amazonwebservices",
  "cloudflareworkers",
  "dbeaver",
];

const skills = [
  {
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3",
  },
  {
    title: "Backend",
    description: "Node.js, Express, Django, Python, Go, PostgreSQL, MongoDB",
  },
  {
    title: "DevOps",
    description: "Docker, Git, GitHub, Cloudflare, Vercel, Amazon Web Services",
  },
  {
    title: "Tools",
    description:
      "Postman, Stripe, Atlassian, Pandas, Numpy, macOS, React Query, DBeaver",
  },
];

export default function SkillsTab() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full">
      <div className="md:w-1/2 flex justify-center items-center">
        <IconCloud iconSlugs={iconSlugs} />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-2 capitalize">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
