import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          name: item.name,
          top: rect.top,
        };
      });

      const visibleSection = sections.find(
        (section) =>
          section && section.top >= 0 && section.top < window.innerHeight / 2
      );

      if (visibleSection) {
        setActiveSection(visibleSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#ffffff33] backdrop-blur-[17px] border border-border rounded-full px-6 py-3 space-x-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm px-3 py-1 rounded-full transition-all duration-300",
            activeSection === item.name
              ? "bg-primary text-white"
              : "text-foreground/80 hover:text-primary"
          )}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};
