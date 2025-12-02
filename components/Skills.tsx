"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Networking Skills",
    "Security & Tools",
    "Operating Systems",
    "Programming & Design",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : activeFilter === "Programming & Design"
      ? skills.filter(
          (skill) => skill.category === "Design" || skill.category === "Programming"
        )
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-card text-muted-foreground hover:bg-muted border border-white/10 hover:border-orange-500/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              {/* Card Background with Gradient Border */}
              <div className="relative bg-card rounded-2xl p-6 border border-white/10 group-hover:border-orange-500/50 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/20">
                {/* Gradient Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon with Background Circle */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                    <div className="relative text-6xl transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-sm font-semibold text-center mb-2 px-2 leading-tight min-h-[2.5rem] flex items-center">
                    {skill.name}
                  </h4>

                  {/* Skill Level Badge */}
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 mb-3">
                    <span className="text-xs font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Orange Underline with Animation */}
                  <motion.div
                    initial={{ scaleX: 0.5 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    className="w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full shadow-sm shadow-orange-500/50"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
