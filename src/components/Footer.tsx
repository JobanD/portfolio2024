import { Dock, DockIcon } from "./magicui/dock";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <Dock>
        <DockIcon>
          <Github />
        </DockIcon>
        <DockIcon>
          <Linkedin />
        </DockIcon>
        <DockIcon>
          <Mail />
        </DockIcon>
      </Dock>
    </div>
  );
}
