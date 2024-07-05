import { Dock, DockIcon } from "./magicui/dock";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto items-center justify-between">
        <div className="flex-grow flex justify-center">
          <Dock>
            <DockIcon>
              <Link href="https://github.com/JobanD" passHref>
                <Github className="h-6 w-6 text-white hover:text-gray-400" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link href="https://www.linkedin.com/in/jobandhindsa/" passHref>
                <Linkedin className="h-6 w-6 text-white hover:text-gray-400" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link href="mailto:joban.d555@gmail.com" passHref>
                <Mail className="h-6 w-6 text-white hover:text-gray-400" />
              </Link>
            </DockIcon>
          </Dock>
        </div>
        <div className="text-center py-2">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Joban Dhindsa. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
