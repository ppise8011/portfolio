import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Trigger scroll styles when not at top

      const scrollPosition = scrollTop + window.innerHeight / 2;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 top-0 flex items-center justify-between",
          isScrolled
            ? "py-3 px-4 md:px-8 bg-[#ffffff12] backdrop-blur-md"
            : "py-5 px-6 md:px-16"
        )}
      >
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Pranav </span> Pise
          </span>
        </a>

        {/* Right side - Theme toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-6 w-full px-4 md:px-0 z-50">
        <div className="mx-auto max-w-md bg-[#ffffff33] backdrop-blur-[17px] border border-border rounded-full px-4 py-2 flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm px-3 py-2 rounded-full transition-all duration-300",
                activeSection === item.name
                  ? "bg-primary text-white"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
