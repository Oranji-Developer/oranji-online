import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data/NavItem.tsx";
import { ModeToggle } from "@/components/ModeToggle";
import SvgLogo from "@/assets/svgr/logo";

export const Navbar: React.FC = () => {
  console.log("Navbar rendering");
  console.log("navItems:", navItems);
  const [active, setActive] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 flex justify-between items-center w-full px-28 py-4 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <SvgLogo />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-medium text-gray-900 dark:text-white"
        >
          Oranji Group
        </motion.p>
      </div>

      <nav className="flex gap-2 p-2 bg-black/90 dark:bg-white backdrop-blur-sm rounded-full">
        <AnimatePresence>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.path}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200",
                active === item.id
                  ? "bg-primary text-white"
                  : "text-white dark:text-black"
              )}
              onClick={() => setActive(item.id)}
            >
              {active === item.id && (
                <>
                  {item.icon}
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                </>
              )}
              <span className="font-medium">{item.label}</span>
            </motion.a>
          ))}
        </AnimatePresence>
      </nav>
      <div className="flex items-center gap-6">
        <ModeToggle />
        <motion.a
          className="px-5 py-2 rounded-full border border-gray-700 text-neutral-900 dark:text-white dark:border-white"
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </div>
    </motion.header>
  );
};
