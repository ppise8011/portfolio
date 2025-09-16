import { VerticalMarquee } from "./VerticalMarquee";
import { VerticalMarqueeReverse } from "./VerticalMarqueeReverse";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const HeroSplitSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-20 xl:pt-0 text-foreground"
    >
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-left">
    <span className="opacity-0 animate-fade-in">Hey, I'm</span>
    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Pranav</span>
    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Pise</span>
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-2 text-left">
    A passionate <span className="text-muted-foreground font-semibold">Frontend Web Developer</span> with over <span className="font-semibold">2.5 years of experience</span> crafting modern, responsive, and high-performing websites using <span className="font-semibold">Wordpress</span>, <span className="font-semibold">Shopify</span>, <span className="font-semibold">Php</span>, <span className="font-semibold">React</span> & <span className="font-semibold">Tailwind CSS</span>.
  </p>

  <ul className="space-y-3 mt-6 text-left">
    {[
      "Custom features. Smart animations. Clean code.",
      "Shopify. React. Tailwind. Motion.",
      "Built with intent. Designed for interaction.",
    ].map((text, i) => (
      <li
        key={i}
        className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base opacity-0 animate-fade-in-delay-3"
      >
        <CheckCircle className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
        <span>{text}</span>
      </li>
    ))}
  </ul>

  <div className="flex flex-wrap gap-3 mt-6 opacity-0 animate-fade-in-delay-3">
    {[
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Shopify",
      "Wordpress",
      "GoHighLevel",
      "Wix",
      "Webflow",
      "React",
      "Tailwind CSS",     
      "Responsive Design",
      "SEO",
      "Git",
    ].map((skill, i) => (
      <span
        key={i}
        className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium shadow-sm"
      >
        {skill}
      </span>
    ))}
  </div>

  <div className="mt-8 flex gap-4 text-left">
    <div className="opacity-0 animate-fade-in-delay-4">
      <a href="#projects" className="cosmic-button">
        View My Work
      </a>
    </div>
    <div className="opacity-0 animate-fade-in-delay-4">
      <a
        href="mailto:pranavpise8011@gmail.com"
        className="secondary-button"
      >
        Hire Me
      </a>
    </div>
  </div>
      </div>

      {/* Right Side - Marquee */}
      <div className="w-full md:w-1/2 flex h-[500px] gap-4 overflow-hidden mt-10 md:mt-0 justify-evenly h-screen relative">
        <div className="pointer-events-none absolute top-0 left-0 w-full h-34 bg-gradient-to-b from-background to-transparent z-20" />
        <VerticalMarquee />
        <VerticalMarqueeReverse />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-34 bg-gradient-to-t from-background to-transparent z-20" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-21">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
