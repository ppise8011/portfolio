// src/components/VerticalMarquee.jsx
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const projects = [
  { image: "https://i.postimg.cc/K83CNSK3/project1.png", tag: "Wordpress", link: "https://dealishaa.com/" },
  { image: "https://i.postimg.cc/kXBHJ3vY/project5.png", tag: "Wordpress", link: "https://myurbanmonk.in/" },
  { image: "https://i.postimg.cc/YSfnnpt0/project2.png", tag: "Wordpress", link: "http://lavenizzo.com/" },
  { image: "https://i.postimg.cc/Y9dX7bGw/project3.png", tag: "Wordpress", link: "https://janakisadan.com/" },
  { image: "https://i.postimg.cc/BZygC82N/project10.png", tag: "Wordpress", link: "https://makhanawala.com/" },
  { image: "https://i.postimg.cc/K83CNSK3/project1.png", tag: "Wordpress", link: "https://dealishaa.com/" },
  { image: "https://i.postimg.cc/kXBHJ3vY/project5.png", tag: "Wordpress", link: "https://myurbanmonk.in/" },
  { image: "https://i.postimg.cc/YSfnnpt0/project2.png", tag: "Wordpress", link: "http://lavenizzo.com/" },
  { image: "https://i.postimg.cc/Y9dX7bGw/project3.png", tag: "Wordpress", link: "https://janakisadan.com/" },
  { image: "https://i.postimg.cc/BZygC82N/project10.png", tag: "Wordpress", link: "https://makhanawala.com/" },
];

export const VerticalMarquee = () => {
  return (
    <div className="h-full overflow-hidden relative">
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 70, // Slowed down speed
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
              w-full max-w-xs  /* full width up to max width 20rem (320px) */
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
