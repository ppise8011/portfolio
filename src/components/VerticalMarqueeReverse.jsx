// src/components/VerticalMarqueeReverse.jsx
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const projects = [
  { image: "https://i.postimg.cc/fLhQSxn7/project4.png", tag: "Wordpress", link: "https://www.govindmilk.com/" },
  { image: "https://i.postimg.cc/6QXMdzqQ/project6.png", tag: "Shopify", link: "https://daishik.co.in" },
  { image: "https://i.postimg.cc/gJr8R6VJ/project7.png", tag: "Shopify", link: "https://thepurelydesi.com/" },
  { image: "https://i.postimg.cc/c4JNZ0Nd/project8.png", tag: "Shopify", link: "https://nutricodelight.com/" },
  { image: "https://i.postimg.cc/y8X5SGKL/project9.png", tag: "Wordpress", link: "https://pillar-stone.com/" },
  { image: "https://i.postimg.cc/fLhQSxn7/project4.png", tag: "Wordpress", link: "https://www.govindmilk.com/" },
  { image: "https://i.postimg.cc/6QXMdzqQ/project6.png", tag: "Shopify", link: "https://daishik.co.in" },
  { image: "https://i.postimg.cc/gJr8R6VJ/project7.png", tag: "Shopify", link: "https://thepurelydesi.com/" },
  { image: "https://i.postimg.cc/c4JNZ0Nd/project8.png", tag: "Shopify", link: "https://nutricodelight.com/" },
  { image: "https://i.postimg.cc/y8X5SGKL/project9.png", tag: "Wordpress", link: "https://pillar-stone.com/" },
];

export const VerticalMarqueeReverse = () => {
  return (
    <div className="h-full overflow-hidden relative">
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 70, // slower speed
          ease: "linear",
        }}
      >
        {projects.concat(projects).map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              w-full max-w-xs  /* full width up to max 320px on mobile */
              w-40
              h-60
              sm:w-60           /* fixed width 240px on small screens and up */
              sm:h-80
              bg-white
              rounded-xl
              shadow-xl
              overflow-hidden
              block
            "
          >
            {/* Tag */}
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
              {project.tag}
            </div>

            {/* Image */}
            <img
              src={project.image}
              alt={`project-${index}`}
              className="w-full h-full object-cover"
            />

            {/* Link Icon bottom right */}
            <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded-full z-10">
              <Link className="w-5 h-5 text-white link-new" />
            </div>  
          </a>
        ))}
      </motion.div>

      {/* Top & Bottom Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
    </div>
  );
};
