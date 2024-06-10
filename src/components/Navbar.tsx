"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  FolderOpenDot,
  ContactRound,
  LucideIcon,
  GraduationCap,
  Medal,
} from "lucide-react"; // Importing icons
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator"; // Importing Separator from ShadCN

interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems: MenuItem[] = [
    { href: "/about", label: "About Us", icon: GraduationCap },
    { href: "/projects", label: "Projects", icon: FolderOpenDot },
    { href: "/resume", label: "Resume", icon: Medal },
    { href: "/contact", label: "Contact Us", icon: ContactRound },
  ];

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="ml-4 text-2xl font-bold stylized-font">
            Joban Dhindsa
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`hover:text-secondary transition-colors ${
                        pathname === item.href
                          ? "border-b-2 border-secondary"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <button
          className="lg:hidden focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          {mobileMenuOpen ? (
            <X className="h-8 w-8 text-white" />
          ) : (
            <Menu className="h-8 w-8 text-white" />
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-primary text-white z-50 flex flex-col items-center justify-center space-y-6 transition-transform transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionDuration: "0.2s" }}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          <X className="h-8 w-8 my-8 text-white" />
        </button>
        {menuItems.map((item, index) => (
          <div key={item.href} className="flex flex-col items-center w-full">
            <Link
              href={item.href}
              className="flex items-center text-2xl hover:text-secondary"
              onClick={handleMobileMenuToggle}
            >
              <item.icon className="h-6 w-6 mr-2" />
              {item.label}
            </Link>
            {index < menuItems.length - 1 && (
              <Separator className="w-3/4 my-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
