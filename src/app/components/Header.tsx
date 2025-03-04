"use client";
import { motion } from "framer-motion";

function Header() {
  const smoothScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div className="bg-[#606c38] z-[1000] p-4 flex flex-row justify-evenly w-full fixed top-0 left-0 right-0">
      <a onClick={() => smoothScroll("#projects")} className="cursor-pointer hover:text-[#a9b099]">
        Projects
      </a>
      <a onClick={() => smoothScroll("#skills")} className="cursor-pointer hover:text-[#a9b099]">
        Skills
      </a>
      <a onClick={() => smoothScroll("#about")} className="cursor-pointer hover:text-[#a9b099]">
        About Me
      </a>
      <a onClick={() => smoothScroll("#contact")} className="cursor-pointer hover:text-[#a9b099]">
        Contact Me
      </a>
    </motion.div>
  );
}

export default Header;
